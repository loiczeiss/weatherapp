"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

export default function GeoLocation() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalPlacement] = useState<
    "center" | "auto" | "top" | "top-center" | "bottom" | "bottom-center"
  >("center");
  const [error, setError] = useState<string | null>("");
  const router = useRouter();
console.log(navigator.geolocation)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          router.push(
            `/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`
          );

        },
        (err) => {
          setError(
            `Geolocation error: ${err.message}. Please retry or enter location manually`
          );
          onOpen();
        }
      );
    } else {
      setError(
        "Geolocation is not supported by this browser. Please enter a location manually."
      );
      onOpen();
    }
  }, []); // Empty dependency array to ensure this effect runs only once on mount

  if (error) {
    return (
      <>
        <Modal
          placement={modalPlacement}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  GeoLocation failed
                </ModalHeader>
                <ModalBody>
                  <p>{error}</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }
}
