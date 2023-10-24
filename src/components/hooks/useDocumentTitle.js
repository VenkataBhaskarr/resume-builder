import { useEffect } from 'react';
import {useRecoilValue} from "recoil";
import {configState} from "./config.js";

export const useDocumentTitle = () => {
    const config = useRecoilValue(configState)
    useEffect(() => {
        document.title = config.contactInfo.name + ' Resume';
    }, []);
};
