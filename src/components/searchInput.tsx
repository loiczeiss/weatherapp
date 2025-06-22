'use client';

import { FetchLocationApi } from '@/actions/fetchLocationApi';
import {
  ChangeEvent,
  useState,
  useEffect,
  Key,
  SetStateAction,
  Dispatch,
} from 'react';
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
            }[],
          );
          setErrorMessage(null);
        } else {
          setResults([]);
          setErrorMessage('Location not found');
        }
      } catch (error: unknown) {
        if (
          typeof error === 'object' &&
          error !== null &&
          'response' in error
        ) {
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
    router.push(`/weather/?lat=${lat}&lon=${lon}`);
  };

  const handleClose = () => {
    setUlClose(true);
    setSearchValue('');
  };

  return (
    <div className="flex flex-col space-y-2 overscroll-y-auto px-2 py-4">
      <Input
        isClearable
        placeholder="Enter your location"
        classNames={{
          label: 'text-black/25 font-semibold',
          input: 'text-black/50 font-semibold',
        }}
        className="rounded-lg font-sans text-sm font-semibold placeholder:font-semibold focus:border-white/25 focus:outline-gray-300 lg:text-xl"
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
        className={`${styles.customScrollbar} z-100 max-h-full overflow-y-auto overscroll-y-auto rounded-lg lg:mt-2`}
      >
        {isLoading ? (
          <div className="flex flex-col space-y-1">
            {[...Array(10)].map((_, index) => (
              <Skeleton key={index} className={'rounded-lg'}>
                <li className="h-12 rounded-lg border-y p-2 py-3 text-xs font-semibold hover:bg-sky-900/75"></li>
              </Skeleton>
            ))}
          </div>
        ) : errorMessage ? (
          <p className="p-4 text-center text-red-500">{errorMessage}</p>
        ) : (
          results.map((result, index: Key) => (
            <li
              key={index}
              className="rounded-lg border-y p-2 py-3 text-xs font-semibold hover:bg-sky-900/75"
              onClick={() =>
                handleClick(result.display_name, result.lat, result.lon)
              }
            >
              {result.display_name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
