import { useCallback } from 'react';
import {configState} from "../hooks/config.js";
import {useRecoilValue} from "recoil";

export const ContactInfo = () => {
    const config = useRecoilValue(configState)

    const cleanLink = useCallback((link) => {
        return link.replace(/^https?:\/\//, '').replace(/^www\./, '');
    }, []);

    return (
        <div className="text-center">
            <h1 className={"text-4xl"}>{config.contactInfo.name}</h1>

            <h2 className={"text-2xl"}>{config.contactInfo.title}</h2>

            <a href={`mailto:${config.contactInfo.email}`}>{config.contactInfo.email}</a>

            {config.contactInfo.firstLink && (
                <>
                    <span className="mx-1">•</span>
                    <a href={config.contactInfo.firstLink}>{cleanLink(config.contactInfo.firstLink)}</a>
                </>
            )}

            {config.contactInfo.secondLink && (
                <>
                    <span className="mx-1">•</span>
                    <a href={config.contactInfo.secondLink}>{cleanLink(config.contactInfo.secondLink)}</a>
                </>
            )}
        </div>
    );
};