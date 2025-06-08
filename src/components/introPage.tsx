'use client';
import { Button, Card } from '@heroui/react';

import HomePic from 'public/assets/accueil.jpg';
import SearchInput from './searchInput';
import { useState } from 'react';

import GeoLocation from '@/components/geoLocation';
import { DrawerInput } from '@/components/drawerInput';

export default function Intro() {

    const bgBackground = HomePic.src;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden ">
                <div
                    style={{ backgroundImage: `url(${bgBackground})` }}
                    className="absolute -inset-4 bg-cover bg-center"
                ></div>


                <GeoLocation />
                <Card isBlurred
                      className=" self-center px-8 flex text-center items-center justify-between space-y-4 py-8 bg-gray-400/10 w-8/12 md:w-8/12 lg:w-6/12">


                    <div className={'flex flex-col space-y-2'}><h2
                        className="text-3xl font-bold text-white/75">Rivière</h2>
                        <h1 className="text-xl text-white/50 rounded-lg">
                            {' '}
                            Your Go-To Weather Companion
                        </h1>
                    </div>


                    <Button onPress={() => setIsOpen(prev => !prev)}>Enter your location</Button>
                    <DrawerInput></DrawerInput>
                </Card>
            </div>

        </>
    );
}
