'use client';
import {
  Button,
  Card,
  Modal,
  ModalContent,
  useDisclosure,
} from '@heroui/react';

import HomePic from 'public/assets/accueil.jpg';

import GeoLocation from '@/components/geoLocation';
import SearchInput from '@/components/searchInput';
import { useEffect, useState } from 'react';

export default function Intro() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [geolocation, setGeolocation] = useState<boolean>(false);
  const [ulClose, setUlClose] = useState(false);
  const bgBackground = HomePic.src;

  useEffect(() => {
    return () => {
      setGeolocation(false);
    };
  }, []);

  return (
    <>
      <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
        <div
          style={{ backgroundImage: `url(${bgBackground})` }}
          className="absolute -inset-4 bg-cover bg-center"
        ></div>

        {geolocation && <GeoLocation />}
        <Card
          isBlurred
          className="flex w-8/12 items-center justify-between space-y-4 self-center bg-gray-400/10 px-8 py-8 text-center md:w-8/12 lg:w-3/12"
        >
          <div className={'flex flex-col space-y-2'}>
            <h2 className="text-3xl font-bold text-white/75">Rivière</h2>
            <h1 className="rounded-lg text-xl text-white/50">
              Your Go-To Weather Companion
            </h1>
          </div>

          <Button
            variant={'ghost'}
            onPress={onOpen}
            className={'border-white/50 text-lg font-semibold text-white/50'}
          >
            Enter your location
          </Button>
          <Button
            onPress={() => setGeolocation(true)}
            className={
              'border-white/50 bg-white/50 text-lg font-semibold text-sky-950'
            }
          >
            Allow browser location
          </Button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className={`h-[80vh] bg-white/75`}>
              <SearchInput ulClose={ulClose} setUlClose={setUlClose} />
            </ModalContent>
          </Modal>
        </Card>
      </div>
    </>
  );
}
