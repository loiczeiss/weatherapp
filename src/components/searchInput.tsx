'use client';

import { FetchLocationApi } from '@/actions/fetchLocationApi';
import { ChangeEvent, useState, useEffect, Key, SetStateAction, Dispatch } from 'react';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import { Input, Skeleton } from '@heroui/react';

interface SearchInputProps {
  ulClose: boolean;
  setUlClose: Dispatch<SetStateAction<boolean>>;
}

export default function SearchInput({ setUlClose, ulClose }: SearchInputProps) {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState<
    {
      display_name: string;
      lat: number;
      lon: number;
    }[]
  >([]);
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
      const options = {
        method: 'GET',
        headers: { accept: 'application/json' },
      };
      const url = `https://eu1.locationiq.com/v1/search?key=${token}&q=${searchValue}&format=json`;

      try {
        setIsLoading(true);
        const data = await FetchLocationApi(url, options);

        if (data.data && data.data.length > 0) {
          setResults(
            data.data as unknown as {
              display_name: string;
              lat: number;
              lon: number;
            }[]
          );
          setErrorMessage(null);
        } else {
          setResults([]);
          setErrorMessage('Location not found');
        }
      } catch (error: unknown) {
        if (typeof error === 'object' && error !== null && 'response' in error) {
          setErrorMessage('Location not found');
          setResults([]);
        } else {
          setErrorMessage('An error occurred while fetching data');
        }
      } finally {
        setIsLoading(false);
      }
    };

    const handler = setTimeout(() => {
      if (searchValue) {
        fetchData();
      } else {
        setResults([]);
        setUlClose(true);
        setErrorMessage(null);
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchValue]);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    setUlClose(false);
  };

  const handleClick = (value: string, lat: number, lon: number) => {
    setSearchValue(value);
    handleClose();
    router.push(`/weather?lat=${lat}&lon=${lon}`);
  };

  const handleClose = () => {
    setUlClose(true);
    setSearchValue('');
  };

  return (
    <div className="space-y-2 flex flex-col px-2 py-4 overscroll-y-auto">
      <Input
        isClearable
        placeholder="Enter your location"
        classNames={{ label: 'text-black/25 font-semibold', input: 'text-black/50 font-semibold' }}
        className="rounded-lg font-semibold placeholder:font-semibold font-sans text-sm lg:text-xl focus:outline-gray-300 focus:border-white/25"
        value={searchValue}
        onChange={handleChangeInput}
        onClear={() => {
          setSearchValue('');
          setResults([]);
          setUlClose(true);
          setErrorMessage(null);
        }}
      />

      <ul
        style={{ display: ulClose ? 'none' : '' }}
        className={`${styles.customScrollbar} z-100 lg:mt-2 rounded-lg overflow-y-auto overscroll-y-auto max-h-full`}
      >
        {isLoading ? (
          <div className="flex flex-col space-y-1">
            {[...Array(10)].map((_, index) => (
              <Skeleton key={index} className={'rounded-lg'}>
                <li className="border-y  p-2 py-3 h-12 rounded-lg text-xs font-semibold hover:bg-sky-900/75"></li>
              </Skeleton>
            ))}
          </div>
        ) : errorMessage ? (
          <p className="text-center p-4 text-red-500">{errorMessage}</p>
        ) : (
          results.map((result, index: Key) => (
            <li
              key={index}
              className="border-y rounded-lg p-2 py-3 text-xs font-semibold hover:bg-sky-900/75"
              onClick={() => handleClick(result.display_name, result.lat, result.lon)}
            >
              {result.display_name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
