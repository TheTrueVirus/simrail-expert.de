import { useEffect, useState } from 'react'
import { screenList } from '../data/customData';

const DEFAULT_USER_OPTIONS = {
    selectedServer: 'int1',
    selectedScreen: screenList[0],
    shortStationNames: false,
    allowExtendedView: false,
    flipScreen: false,
    showNonPlayableTracks: false,
}

export function useUserOptions() {

    const [userOptions, setUserOptions] = useState(() => getUserOptionsOrDefault());

    useEffect(() => {
        localStorage.setItem('USER_OPTIONS', JSON.stringify(userOptions))
    }, [userOptions]);

    function getUserOptionsOrDefault() {
        const defaultOptions = DEFAULT_USER_OPTIONS;
        const optionsFromStorage = localStorage.getItem('USER_OPTIONS');
        if (!optionsFromStorage) return defaultOptions;

        try {
            const p = JSON.parse(optionsFromStorage);

            // Validate required properties exist and have correct types
            const isValid =
                p &&
                typeof p.selectedServer === "string" &&
                p.selectedScreen &&
                typeof p.selectedScreen.screenid === "string" &&
                screenList.some(screen => screen.screenid === p.selectedScreen.screenid) &&
                typeof p.shortStationNames === "boolean" &&
                typeof p.allowExtendedView === "boolean" &&
                typeof p.flipScreen === "boolean" &&
                typeof p.showNonPlayableTracks === "boolean";

            if (!isValid) return defaultOptions;

            return p;
        } catch {
            console.warn(`Unable to load saved options. Loading default options!`);
            return defaultOptions;
        }
    }

    return [userOptions, setUserOptions]
}