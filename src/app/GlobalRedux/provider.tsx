'use client';

import React, { useState, useEffect } from 'react';
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import RotatePhone from "../components/sideScreens/RotatePhone";

export function Providers ({children} : any) {
    const [isPortrait, setIsPortrait] = useState(true);

    useEffect(() => {
        function handlePhoneChange () {
            setIsPortrait(window.innerHeight > window.innerWidth)
        }

        handlePhoneChange();
        window.addEventListener('resize', handlePhoneChange)

        return () => {
            window.removeEventListener('resize', handlePhoneChange)
        }
    }, [])

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {isPortrait ? <RotatePhone /> : (
                    <>
                        {children}
                    </>
                )}
            </PersistGate>
        </Provider>
    )
}