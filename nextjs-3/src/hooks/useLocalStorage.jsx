import { useState, useEffect } from "react";
export function useLocalStorage(key, initialState) {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const item = localStorage.getItem(key);
        const object = JSON.parse(item)
        if(object){
            setState(object)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state]);

    return [state, setState];
}
