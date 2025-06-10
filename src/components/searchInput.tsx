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

import CloseIcon from 'public/assets/icons/closeIcon.png';
import Image from 'next/image';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import { Input } from '@heroui/react';

interface SearchInputProps {


    ulClose: boolean;
    setUlClose: Dispatch<SetStateAction<boolean>>;
}

export default function SearchInput({

                                        setUlClose,
                                        ulClose,
                                    }: SearchInputProps) {
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState<any>([]);
    const router = useRouter();
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // State to store error message
const [isLoading, setIsLoading] = useState(false);
    // Debounce mechanism to limit fetch calls
    useEffect(() => {
        const fetchData = async () => {
            const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
            const options = {
                method: 'GET',
                headers: { accept: 'application/json' },
            };
            const url = `https://eu1.locationiq.com/v1/search?key=${token}&q=${searchValue}&format=json`;

            try {
                const data = await FetchLocationApi(url, options);
                if (data.data && data.data.length > 0) {
                    setResults(data.data); // Assuming the data is an array of LocationData
                    setErrorMessage(null); // Clear the error message if data is fetched successfully
                } else {
                    setResults([]); // Clear results if empty
                    setErrorMessage('Location not found'); // Set error message if the results are empty
                }
            } catch (error: any) {
                if (error.response && error.response.status === 404) {
                    setErrorMessage('Location not found'); // Set error message if the response status is 404
                    setResults([]); // Clear previous results
                } else {
                    setErrorMessage('An error occurred while fetching data');
                }
            }
        };

        const handler = setTimeout(() => {
            if (searchValue) {
                fetchData(); // Call the fetch function
            } else {
                setResults([]); // Clear results if searchValue is empty
                setUlClose(true);
                setErrorMessage(null); // Clear error message when the input is empty
            }
        }, 300); // 300 ms delay for debouncing

        return () => {
            clearTimeout(handler); // Clean up the timeout on unmount or change
        };
    }, [searchValue]);

    // Handle input changes
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchValue(e.target.value); // Update search value
        setUlClose(false);
    };

    // Handle click on li elements
    const handleClick = (value: string, lat: number, lon: number) => {
        setSearchValue(value);
        handleClose();
        router.push(`/weather?lat=${lat}&lon=${lon}`);
    };

    // Close the ul element
    const handleClose = () => {
        setUlClose(true);
        setSearchValue('');
    };

    return (
        <div className={'space-y-2 flex flex-col px-2 py-4'}>
            <Input
                isClearable
                placeholder="Enter your location"
                classNames={{label: 'text-black/25 font-semibold', input:'text-black/50 font-semibold'}}
                className={` rounded-lg font-semibold placeholder:font-semibold font-sans text-sm lg:text-xl focus:outline-gray-300 focus:border-white/25`}
                value={searchValue}
                onChange={handleChangeInput}
            />

            <ul
                style={{ display: ulClose ? 'none' : '' }}
                className={`${styles.customScrollbar}     z-100  lg:mt-2 rounded-lg overflow-y-auto overscroll-y-auto max-h-full`}
            >
                <li
                    className="flex justify-end p-2 py-3 hover:bg-sky-900/75 rounded-lg"
                    onClick={() => handleClose()}
                >
                    <Image
                        src={CloseIcon}
                        alt="close-icon"
                        width={20}
                        className="invert"
                    />
                </li>
                {errorMessage ? (
                    <p className="text-center p-4 text-red-500">{errorMessage}</p> // Display error message if exists
                ) : (
                    results &&
                    results.map(
                        (
                            result: { display_name: string; lat: number; lon: number },
                            index: Key | null | undefined,
                        ) => (
                            <li
                                key={index}
                                className="border-y rounded-lg p-2 py-3 text-xs font-semibold  hover:bg-sky-900/75 "
                                onClick={() =>
                                    handleClick(result.display_name, result.lat, result.lon)
                                }
                            >
                                {result.display_name}
                            </li>
                        ),
                    )
                )}
            </ul>
        </div>
    );
}
