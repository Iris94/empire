'use client';

import React, { useState, useEffect } from 'react';
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import RotatePhone from "../components/sideScreens/RotatePhone";

export function Providers ({children} : any) {
    const [isPortrait, setIsPortrait] = useState(true);

    function handlePhoneChange() {
        setIsPortrait(window.innerHeight > window.innerWidth);
    }

    function handleClick() {
        if (isPhoneScreen()) {
            if (document.fullscreenElement) {
                // If the game is in fullscreen and it's a phone, exit fullscreen
                document.exitFullscreen();
            } else {
                // If the game is not in fullscreen and it's a phone, request fullscreen
                document.documentElement.requestFullscreen();
            }
        }
    }
    

    // Function to check if the screen size corresponds to a phone
    function isPhoneScreen() {
        // Adjust these values according to your requirements
        const minWidth = 415; // Minimum screen width for a phone
        const maxWidth = 950; // Maximum screen width for a phone
        const screenWidth = window.innerWidth;
        return screenWidth >= minWidth && screenWidth <= maxWidth;
    }

    useEffect(() => {
        handlePhoneChange();
        window.addEventListener('resize', handlePhoneChange);

        // Check if the Fullscreen API is supported by the browser
        if (document.documentElement.requestFullscreen!) {
            // Add or remove the click event listener based on orientation and screen size
            if (!isPortrait && isPhoneScreen()) {
                window.addEventListener('click', handleClick);
            } else {
                window.removeEventListener('click', handleClick);
            }
        }

        return () => {
            window.removeEventListener('resize', handlePhoneChange);
            window.removeEventListener('click', handleClick); // Remove the click event listener on cleanup
        }
    }, [isPortrait]);

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
