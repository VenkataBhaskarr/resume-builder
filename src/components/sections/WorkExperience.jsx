import { configState } from "../hooks/config.js";
import { useRecoilValueLoadable } from "recoil";
import SectionWrapper from '../shared/SectionWrapper.jsx';

export const WorkExperience = () => {
    const configLoadable = useRecoilValueLoadable(configState);

    if (configLoadable.state === "loading") {
        // Render a loading indicator or message while the data is loading
        return <p>Loading...</p>;
    }

    if (configLoadable.state === "hasValue") {
        const config = configLoadable.contents;

        if (!config.workExperience || !Array.isArray(config.workExperience)) {
            // Handle cases where workExperience is undefined or not an array
            return <p>No work experience data available.</p>;
        }

        return (
            <div>
                <ul className="ml-2">
                    {config.workExperience.map((workExperience, i) => (
                        <li key={workExperience.company} className={i % 2 ? `mt-1` : `mt-half`}>
                            <div className="flex">
                                <h3>
                                    {workExperience.company} - {workExperience.location}
                                </h3>
                                <span className="ml-auto text-muted">{workExperience.date}</span>
                            </div>
                            <h4>{workExperience.title}</h4>
                            <p>{workExperience.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    // Handle cases where data is not available or if there's an error
    return <p>Data is not available.</p>;
};
