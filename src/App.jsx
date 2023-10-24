import {useNavigate} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import Content from "./components/Content.jsx";
import RenderResume from "./components/RenderResume.jsx";


function App() {
  return (
    <div>
        <Routes>
            <Route Component={LandingPage} path = {"/"} />
            <Route Component={Content} path={"/content"} />
            <Route Component={RenderResume} path={"/renderresume"} />
        </Routes>
    </div>
  )
}
// bg-gradient-to-b from-indigo-900 to-purple-900
function LandingPage() {
    const navigate = useNavigate()
    const handleLogic = () => {
        navigate("/content")
    }
    return (
        <div className="bg-gradient-to-tr from-gray-900 to-trueGray-900
 text-white min-h-screen flex flex-col">
            {/*<header className="p-8 flex flex-col justify-center text-center min-h-[100vh]">*/}
            {/*    <h1 className="text-4xl font-bold">Your Awesome Resume Builder</h1>*/}
            {/*    <p className="mt-4 text-lg">*/}
            {/*        Build beautiful, recruiter-tested resumes in minutes. Tailor your resume for any job. Elevate your chances and outshine the competition.*/}
            {/*    </p>*/}
            {/*    <div className="mt-8 space-x-4">*/}
            {/*        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40 h-14">*/}
            {/*            Sign In*/}
            {/*        </button>*/}
            {/*        <button className="bg-green-500 hover-bg-green-700 text-white font-bold py-2 px-4 rounded w-40 h-14">*/}
            {/*            Sign Up*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</header>*/}
            <header className="p-8 flex flex-col justify-center text-center min-h-[100vh] text-white">
                <div className={"flex justify-around"}>
                    <div className={"mt-56"}>
                        <h1 className="text-4xl font-extrabold">Welcome to Desikalakar Resume Builder</h1>
                        <p className="mt-4 text-lg">
                            Create stunning, recruiter-ready resumes in minutes.
                        </p>

                        <div className="mt-8 space-x-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-40 h-14" onClick={handleLogic}>
                                Sign In
                            </button>
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-40 h-14">
                                Sign Up
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src={"img.png"} alt={"sar"} className={"custom2"}/>
                    </div>
                </div>

                

            </header>

            <section className="p-8 flex flex-col items-center min-h-[55vh]">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-bold mb-4">Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} {...feature} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="p-8 flex flex-col items-center min-h-[40vh]">
                <h2 className="text-3xl font-bold mb-4">Companies that trust our resumes</h2>
                <div className="max-w-screen-lg mx-auto mt-4">
                    <div className="grid grid-cols-4 gap-16">
                        <CompanyCard logoUrl="cisco.svg" />
                        <CompanyCard logoUrl="samsung.svg" />
                        <CompanyCard logoUrl="att.svg" />
                        <CompanyCard logoUrl="hewlett_packard_enterprise.svg" />
                    </div>
                </div>
            </section>

            <section className="p-8 flex flex-col items-center min-h-[60vh] mt-16">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>
                </div>
            </section>

            {/*<section className="min-h-[25vh] mt-16">*/}
            {/*    <div className="max-w-screen-lg mx-auto p-8 text-center">*/}
            {/*        <p className={"font-bold text-lg"}>&copy; 2023 Your Resume Builder</p>*/}
            {/*        <div className="mt-4">*/}
            {/*            <a href="#">Privacy Policy</a>*/}
            {/*            <span className="mx-2">|</span>*/}
            {/*            <a href="#">Terms of Service</a>*/}
            {/*            <span className="mx-2">|</span>*/}
            {/*            <a href="#">Contact Us</a>*/}
            {/*        </div>*/}
            {/*        <div className="mt-4">*/}
            {/*            <p>Website designed by [Your Name]</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            <section className="min-h-[25vh] mt-16">
                <div className="max-w-screen-lg mx-auto p-8 text-center">
                    <p className="font-bold text-lg">&copy; 2023 Desikalakar Resume Builder</p>
                    <div className="mt-4">
                        <a href="#">Privacy Policy</a>
                        <span className="mx-2">|</span>
                        <a href="#">Terms of Service</a>
                        <span className="mx-2">|</span>
                        <a href="#">Contact Us</a>
                        <span className="mx-2">|</span>
                        <a href="#">FAQ</a>
                        <span className="mx-2">|</span>
                        <a href="#">Blog</a>
                    </div>
                    <div className="mt-4">
                        <p>Website designed by Sriwatsa</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Inside FeatureCard component:
// Inside FeatureCard component, increase padding and text size
function FeatureCard({ icon, title, description }) {
    return (
        <div className="bg-white bg-opacity-10 p-8 rounded shadow-lg w-96 h-60 text-center">
      <span className="text-4xl" role="img" aria-label="icon">
        {icon}
      </span>
            <h3 className="text-2xl font-bold my-2">{title}</h3>
            <p className="text-lg">{description}</p>
        </div>
    );
}


function CompanyCard({ logoUrl }) {
    return (
        <img src={logoUrl} alt="Company Logo" className="w-40 h-40 mx-2" />
    );
}



// Inside TestimonialCard component, increase padding and text size
function TestimonialCard({ name, quote }) {
    return (
        // <div className="bg-white bg-opacity-10 p-6 rounded shadow-lg w-80 h-40">
        //     <p className="text-2xl font-bold">{name}</p>
        //     <p className="text-lg">{quote}</p>
        // </div>
    <div className="bg-white bg-opacity-10 p-6 rounded shadow-lg w-80 h-40 flex-col">
        <div className={"flex justify-between"}>
            <p className="text-2xl font-bold">{name}</p>
            <img
                src={"James_Hemgen.jpeg"}
                alt={`${name}'s Photo`}
                className="custom rounded-full ml-4"
            />
        </div>
        <div className={"mt-3"}>
            <p className="text-lg">{quote}</p>
        </div>
    </div>
    );
}



// Dummy data for Features and Testimonials
const features = [
    { icon: '💼', title: 'Easy to Use', description: 'Create a resume in minutes with our powerful templates' },
    { icon: '🎨', title: 'Customizable', description: 'Personalize your resume\'s look. your resume resembles your charecter' },
    { icon: '📄', title: 'Download PDF', description: 'Download your resume as a PDF it just costs you single click' },
];

const testimonials = [
    { name: 'John Doe', quote: 'This resume builder changed my life!' },
    { name: 'Jane Smith', quote: 'I got my dream job thanks to this tool!' },
    { name: 'John Doe', quote: 'This resume builder changed my life!' },
    { name: 'Jane Smith', quote: 'I got my dream job thanks to this tool!' },
    { name: 'John Doe', quote: 'This resume builder changed my life!' },
    { name: 'Jane Smith', quote: 'I got my dream job thanks to this tool!' },
    // Add more testimonials as needed
];


export default App
