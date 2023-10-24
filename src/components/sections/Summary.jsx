import {configState} from "../hooks/config.js";
import {useRecoilValue} from "recoil";
import { SectionWrapper } from '../shared';

export const Summary = () => {
    const config = useRecoilValue(configState);

    return (
        <SectionWrapper title="Summary">
            <p>{config.summary}</p>
        </SectionWrapper>
    );
};