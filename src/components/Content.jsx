import {configState} from "./hooks/config.js";
import { useRecoilState } from 'recoil';
import {useNavigate} from "react-router-dom";

function Content() {
    const navigate = useNavigate()
    const [config, setConfig] = useRecoilState(configState);
    const renderResume = () => {
        navigate("/renderresume")
    }

    const handleInputChange = (section, value, thing) => {
        setConfig((prevConfig) => ({
            ...prevConfig,
            [section]: {...prevConfig[section], [value] : thing},
        }));
    }

    const handleWorkChange = (e, index) => {
        const updatedWorkExperience = [...config.workExperience];
        updatedWorkExperience[index] = {
            ...updatedWorkExperience[index],
            [e.target.name]: e.target.value,
        };
        handleInputChange('workExperience', index, updatedWorkExperience);
    }

    const removeWorkExperience = (index) => {
        const updatedWorkExperience = [...config.workExperience];
        updatedWorkExperience.splice(index, 1);
        handleInputChange('workExperience', updatedWorkExperience);
    }

    const removeEducation = (index) => {
        const updatedEducation = [...config.education];
        updatedEducation.splice(index, 1);
        handleInputChange('education', updatedEducation);
    }

    const removeSkill = (index) => {
        const updatedSkills = [...config.skills];
        updatedSkills.splice(index, 1);
        handleInputChange('skills', updatedSkills);
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
                onChange={(e) => handleInputChange('summary', e.target.value)}
                className="w-full p-2 mb-2 rounded border border-gray-300"
            ></textarea>

            {/* Work Experience Section */}
            <h2 className="text-xl font-semibold my-2">Work Experience</h2>
            {config.workExperience.map((exp, index) => (
                <div key={index} className="mb-4">
                    <div className="mb-2">
                        <input
                            type="text"
                            name="workTitle"
                            placeholder="Job Title"
                            value={exp.workTitle || ''}
                            onChange={(e) => handleWorkChange(e, index)}
                            className="w-full p-2 rounded border border-gray-300"
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="text"
                            name="company"
                            placeholder="Company"
                            value={exp.company || ''}
                            onChange={(e) => handleWorkChange(e, index)}
                            className="w-full p-2 rounded border border-gray-300"
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={exp.location || ''}
                            onChange={(e) => handleWorkChange(e, index)}
                            className="w-full p-2 rounded border border-gray-300"
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="text"
                            name="date"
                            placeholder="Date"
                            value={exp.date || ''}
                            onChange={(e) => handleWorkChange(e, index)}
                            className="w-full p-2 rounded border border-gray-300"
                        />
                    </div>
                    <div className="mb-2">
      <textarea
          name="description"
          placeholder="Description"
          value={exp.description || ''}
          onChange={(e) => handleWorkChange(e, index)}
          className="w-full p-2 rounded border border-gray-300"
      ></textarea>
                    </div>
                    {/* Button to remove this work experience entry */}
                    <button
                        className="text-red-500 hover:text-red-600"
                        onClick={() => removeWorkExperience(index)}
                    >
                        Remove
                    </button>
                </div>
            ))}
            {/* Button to add more work experience entries */}
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => {
                    handleInputChange('workExperience', [...config.workExperience, {}]);
                }}
            >
                Add Work Experience
            </button>

            {/* Education Section */}
            <h2 className="text-xl font-semibold my-2">Education</h2>
            {config.education.map((edu, index) => (
                <div key={index} className="mb-4">
          <textarea
              name="education"
              placeholder="Education"
              value={edu}
              onChange={(e) => {
                  const updatedEducation = [...config.education];
                  updatedEducation[index] = e.target.value;
                  handleInputChange('education', updatedEducation);
              }}
              className="w-full p-2 mb-2 rounded border border-gray-300"
          ></textarea>
                    <button
                        className="text-red-500 hover:text-red-600"
                        onClick={() => removeEducation(index)}
                    >
                        Remove
                    </button>
                </div>
            ))}
            {/* Button to add more education entries */}
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover-bg-blue-600"
                onClick={() => {
                    handleInputChange('education', [...config.education, '']);
                }}
            >
                Add Education
            </button>

            {/* Skills Section */}
            <h2 className="text-xl font-semibold my-2">Skills</h2>
            {config.skills.map((skill, index) => (
                <div key={index} className="mb-4">

                {/*    setConfig((prevConfig) => ({*/}
                {/*    ...prevConfig,*/}
                {/*    [section]: {*/}
                {/*    ...prevConfig[section],*/}
                {/*    [field]: value,*/}
                {/*},*/}
                {/*}));*/}

          <textarea
              name="skills"
              placeholder="Skills"
              value={skill}
              onChange={(e) => {
                  const updatedSkills = [...config.skills];
                  updatedSkills[index] = e.target.value;
                  handleInputChange('skills', updatedSkills);
              }}
              className="w-full p-2 mb-2 rounded border border-gray-300"
          ></textarea>
                    <button
                        className="text-red-500 hover:text-red-600"
                        onClick={() => removeSkill(index)}
                    >
                        Remove
                    </button>
                </div>
            ))}
            {/* Button to add more skills */}
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => {
                    handleInputChange('skills', [...config.skills, '']);
                }}
            >
                Add Skill
            </button>
            <div className={"mt-16"}>
                <button
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow-md"
                    onClick={renderResume}
                >
                    Render Resume
                </button>
            </div>
        </div>
    );
}

export default Content;

