import {ContactInfo} from "./sections/ContactInfo.jsx";
import {useEffect} from "react";
import {Summary} from "./sections/Summary.jsx";
import {WorkExperience} from "./sections/WorkExperience.jsx";
import {Education} from "./sections/Education.jsx";
import {Skills} from "./sections/Skills.jsx";
import SectionWrapper from "./shared/SectionWrapper.jsx"
function RenderResume() {
    const download = () => {
        window.print();
    }

    useEffect(() => {
        document.title =  'Resume';
    }, []);

    return (
        <div className="paper mx-auto p-3">
            <ContactInfo />

            <Summary />

            <SectionWrapper title={"Work Experience"}>
                <WorkExperience />
            </SectionWrapper>

            <Education />

            <Skills />

            <div className={"mt-16"}>
                <button
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow-md"
                    onClick={download}
                >
                    Download
                </button>
            </div>
        </div>
    );
}

export default RenderResume;