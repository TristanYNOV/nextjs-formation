import { create } from 'zustand';
import {WebsiteDocument} from "@/prismicio-types";

interface PinsStore {
    pins: WebsiteDocument[],
    setPin: (pinsState: WebsiteDocument[], targetedPin: WebsiteDocument) => void,
}

export const usePinsStore = create((set): PinsStore => ({
    pins: [],
    setPin: (pinsState, tPin) => {
        const pinIndex = pinsState.findIndex(pin => pin.uid === tPin.uid);

        if(pinIndex < 0) {
            set({pins: [...pinsState, tPin]});
        } else {
            pinsState.splice(pinIndex, 1);
            set({pins: [...pinsState]});
        }
    },
}))