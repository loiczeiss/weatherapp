'use client';
import { Button, Card, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure, Input } from '@heroui/react';

import HomePic from 'public/assets/accueil.jpg';


import GeoLocation from '@/components/geoLocation';
import SearchInput from '@/components/searchInput';
import { useState } from 'react';

export default function Intro() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const[ulClose, setUlClose] = useState(false);
    const bgBackground = HomePic.src;


    return (
        <>
            <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden ">
                <div
                    style={{ backgroundImage: `url(${bgBackground})` }}
                    className="absolute -inset-4 bg-cover bg-center"
                ></div>


                {/*<GeoLocation />*/}
                <Card isBlurred
                      className=" self-center px-8 flex text-center items-center justify-between space-y-4 py-8 bg-gray-400/10 w-8/12 md:w-8/12 lg:w-6/12">


                    <div className={'flex flex-col space-y-2'}><h2
                        className="text-3xl font-bold text-white/75">Rivière</h2>
                        <h1 className="text-xl text-white/50 rounded-lg">
                            {' '}
                            Your Go-To Weather Companion
                        </h1>
                    </div>


                    <Button onPress={onOpen}>Enter your location</Button>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                        <ModalContent className={'self-center mx-8 bg-black/75'}>
                          <SearchInput ulClose={ulClose} setUlClose={setUlClose}/>
                        </ModalContent>
                    </Modal>
                </Card>
            </div>

        </>
    );
}
