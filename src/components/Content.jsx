import {configState} from "./hooks/config.js";
import { useRecoilState } from 'recoil';
import {useNavigate} from "react-router-dom";

function Content() {
    const navigate = useNavigate()
    const [config, setConfig] = useRecoilState(configState);
    const renderresume = () => {
        console.log(config)
        navigate("/renderresume")
    }
    function handleAddWorkExperience() {
        const prevConfig = {...config}
        prevConfig.workExperience = [...prevConfig.workExperience, {}]
        setConfig(prevConfig)
    }
    function handleAddSkills(){
        const prevConfig = {...config}
        prevConfig.skills = [...prevConfig.skills, '']
        setConfig(prevConfig)
    }
    function handleAddEducation(){
        const prevConfig = {...config}
        prevConfig.education = [...prevConfig.education, {}]
        setConfig(prevConfig)
    }
    const handleInputChange = (section, value, thing) => {
        setConfig((prevConfig) => ({
            ...prevConfig,
            [section]: {...prevConfig[section], [value] : thing},
        }));
    }

    const handleWorkChange = (index,source,target,mainHeader) => {
        setConfig(prevConfig => {
            return {
                ...prevConfig,
                [mainHeader]: [
                    ...prevConfig[mainHeader].slice(0, index),
                    {
                        ...prevConfig[mainHeader][index],
                        [target]: source,
                    },
                    ...prevConfig[mainHeader].slice(index + 1),
                ],
            };
        });
    }

    const removeAttribute = (index, target) => {
        const prevConfig = {...config}
        prevConfig[target] = [...prevConfig[target]]
        prevConfig[target].splice(index,1)
        setConfig(prevConfig)

    }
    function handleSkillAddition(index, value) {
        setConfig((prevConfig) => {
            const updatedSkills = [...prevConfig.skills];
            if (index < updatedSkills.length) {
                updatedSkills[index] = value;
            } else {
                updatedSkills.push(value);
            }

            return {
                ...prevConfig,
                skills: updatedSkills,
            };
        });
    }

    function handleSummarySection(source) {
        const prevConfig = {...config}
        prevConfig.summary = source
        setConfig(prevConfig)
    }

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            {/* Contact Info Section */}
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <form>
                {/* Use Tailwind CSS classes to style input fields */}
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={config.contactInfo.name}
                    onChange={(e) => handleInputChange('contactInfo', 'name', e.target.value)}
                    className="w-full p-2 mb-2 rounded border border-gray-300"
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={config.contactInfo.title}
                    onChange={(e) => handleInputChange('contactInfo', 'title', e.target.value)}
                    className="w-full p-2 mb-2 rounded border border-gray-300"
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={config.contactInfo.email}
                    onChange={(e) => handleInputChange('contactInfo', 'email', e.target.value)}
                    className="w-full p-2 mb-2 rounded border border-gray-300"
                />
                <input
                    type="text"
                    name="firstLink"
                    placeholder="Link1"
                    value={config.contactInfo.firstLink}
                    onChange={(e) => handleInputChange('contactInfo', 'firstLink', e.target.value)}
                    className="w-full p-2 mb-2 rounded border border-gray-300"
                />
                <input
                    type="text"
                    name="secondLink"
                    placeholder="Link2"
                    value={config.contactInfo.secondLink}
                    onChange={(e) => handleInputChange('contactInfo', 'secondLink', e.target.value)}
                    className="w-full p-2 mb-2 rounded border border-gray-300"
                />
                {/* Repeat this for other contact fields */}
            </form>

            {/* Summary Section */}
            <h2 className="text-xl font-semibold my-2">Summary</h2>
            <textarea
                name="summary"
                placeholder="Summary"
                value={config.summary}
                onChange={(e) => handleSummarySection(e.target.value)}
                className="w-full p-2 mb-2 rounded border border-gray-300"
            ></textarea>

            {/* Work Experience Section */}
            <h2 className="text-xl font-semibold my-2">Work Experience</h2>
            {config.workExperience.map((exp, index) => (
                <div key={index} className="mb-4">
                    <div className="mb-2">
                        <input
                            type="text"
                            placeholder="Job Title"
                            name="title"
                            value={exp["title"] || ''}
                            // index,source,target,mainHeader
                            onChange={(e) => handleWorkChange(index,e.target.value,"title", "workExperience")}
                            className="w-full p-2 rounded border border-gray-300"
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="text"
                            name="company"
                            placeholder="Company"
                            value={exp["company"] || ''}
                            onChange={(e) => handleWorkChange(index,e.target.value,"company","workExperience")}
                            className="w-full p-2 rounded border border-gray-300"
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={exp["location"] || ''}
                            onChange={(e) => handleWorkChange(index,e.target.value,"location","workExperience")}
                            className="w-full p-2 rounded border border-gray-300"
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="text"
                            name="date"
                            placeholder="Date"
                            value={exp["date"] || ''}
                            onChange={(e) => handleWorkChange(index,e.target.value,"date","workExperience")}
                            className="w-full p-2 rounded border border-gray-300"
                        />
                    </div>
                    <div className="mb-2">
      <textarea
          name="description"
          placeholder="Description"
          value={exp.description || ''}
          onChange={(e) => handleWorkChange(index,e.target.value,"description","workExperience")}
          className="w-full p-2 rounded border border-gray-300"
      ></textarea>
                    </div>
                    {/* Button to remove this work experience entry */}
                    <button
                        className="text-red-500 hover:text-red-600"
                        onClick={() => removeAttribute(index, "workExperience")}
                    >
                        Remove
                    </button>
                </div>
            ))}
            {/* Button to add more work experience entries */}
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => {
                    handleAddWorkExperience();
                }}
            >
                Add Work Experience
            </button>
                {/*EDU SECTION STARTS*/}

            <h2 className="text-xl font-semibold my-2">Education</h2>
            {config.education.map((edu, index) => (
                <div key={index} className="mb-4">
    <textarea
        name="school"
        placeholder="School"
        value={edu.school}
        onChange={(e) => {
            handleWorkChange(index, e.target.value, "school", "education");
        }}
        className="w-full p-2 mb-2 rounded border border-gray-300"
    ></textarea>
                    <textarea
                        name="location"
                        placeholder="Location"
                        value={edu.location}
                        onChange={(e) => {
                            handleWorkChange(index,e.target.value, "location" , "education");
                        }}
                        className="w-full p-2 mb-2 rounded border border-gray-300"
                    ></textarea>
                    <input
                        name="date"
                        placeholder="Date"
                        type="text"
                        value={edu.date}
                        onChange={(e) => {
                            handleWorkChange(index,e.target.value, "date", "education");
                        }}
                        className="w-full p-2 mb-2 rounded border border-gray-300"
                    />
                    <textarea
                        name="degree"
                        placeholder="Degree"
                        value={edu.degree}
                        onChange={(e) => {
                            handleWorkChange(index, e.target.value, "degree", "education");
                        }}
                        className="w-full p-2 mb-2 rounded border border-gray-300"
                    ></textarea>
                    <textarea
                        name="major"
                        placeholder="Major"
                        value={edu.major}
                        onChange={(e) => {
                            handleInputChange(index, e.target.value, "major", "education");
                        }}
                        className="w-full p-2 mb-2 rounded border border-gray-300"
                    ></textarea>
                    <button
                        className="text-red-500 hover-text-red-600"
                        onClick={() => removeAttribute(index, "education")}
                    >
                        Remove
                    </button>
                </div>
            ))}

            {/* Button to add more education entries */}
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover-bg-blue-600"
                onClick={() => {
                    handleAddEducation()
                }}
            >
                Add Education
            </button>

            {/* Skills Section */}
            <h2 className="text-xl font-semibold my-2">Skills</h2>
            {config.skills.map((skill, index) => (
                <div key={index} className="mb-4">

          <textarea
              name="skills"
              placeholder="Skills"
              value={skill}
              onChange={(e) => {
                  handleSkillAddition(index, e.target.value)
              }}
              className="w-full p-2 mb-2 rounded border border-gray-300"
          ></textarea>
                    <button
                        className="text-red-500 hover:text-red-600"
                        onClick={() => removeAttribute(index, "skills")}
                    >
                        Remove
                    </button>
                </div>
            ))}
            {/* Button to add more skills */}
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => {
                    handleAddSkills()
                }}
            >
                Add Skill
            </button>

           <div className={"mt-16"}>
               <button
                   className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow-md"
                   onClick={renderresume}
               >
                   Render Resume
               </button>
           </div>
        </div>
    );
}

export default Content;

