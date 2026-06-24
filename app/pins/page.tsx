"use client";
import {usePinsStore} from "@/store/pins";
import {PrismicImage} from "@prismicio/react";
import {WebsiteDocument} from "@/prismicio-types";

type PinsPageType = {};
export default function PinsPage({}: PinsPageType) {
  const pins = usePinsStore((state) => state.pins);
  const setPin = usePinsStore((state) => state.setPin);

  const updatePin = (site: WebsiteDocument) => {
    setPin(pins, site);
  }

  return (
      <main>
        {pins.length > 0 && ( pins.map(pin => (
            <>
              <h3>{pin.data.title}</h3>
              <span onClick={() => updatePin(pin)} className="material-symbols-outlined cursor-pointer">keep_off</span>
              <PrismicImage field={pin.data.img}/>
            </>
        ))
      )}
        { pins.length === 0 && <span>Veuillez enregistrer au moins 1 site !</span>}
  </main>)
}
