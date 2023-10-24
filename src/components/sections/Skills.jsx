import {configState} from "../hooks/config.js";
import {useRecoilValue} from "recoil";
import SectionWrapper from '../shared/SectionWrapper.jsx';

export const Skills = () => {
    const config = useRecoilValue(configState);
    return (
        <SectionWrapper title="Skills">
            {config.skills.map((skill) => (
                <p key={1} className="inline-block">
                    <span className="mx-1">•</span>
                    <span>{skill}</span>
                </p>
            ))}
        </SectionWrapper>
    );
};
