
const Resume = () => {

    const experiencedata = [
        {
            name: "Freelance Developer",
            year: "2023 & 2025",
        },
        {
            name: "Data Engineer Intern",
            year: "March 2024 - September 2024",
            company: "Viseo"
        },
        {
            name: "Front-End Developer Intern",
            year: "July 2022 - August 2022",
            company: "MaxAffaire"
        }
    ];
    const educationdata = [
        {
            name: "Computer Science Engineering Degree",
            year: "2021 – 2024",
            institution: "École Nationale Supérieure d'Ingénieurs du Mans"
        },
        {
            name: "PSI Specialization",
            year: "2019 – 2021",
            institution: "Classes Préparatoires aux Grandes Écoles First Prepa"
        }
    ];

    const skillsdata = [
        "Python", 
        "React", 
        "JavaScript", 
        "Computer Vision", 
        "Data Analysis", 
        "HTML/CSS", 
        "Unity/C#",
        "Node.js", 
        "REST APIs", 
        "PyTorch",
        "UI/UX Design",
        "SQL", 
        "Mobile Development",
        "Figma",
        "3D Modeling"
    ];

    return (
        <div className='w-full z-20 h-full flex justify-center items-center'>
            <div className="w-11/12 gap-4  h-full pt-20 md:pb-0 pb-5 flex flex-col justify-center items-center">
                <div className="w-full gap-5 flex md:flex-row flex-col justify-center items-center">
                    <div className="md:w-1/2 w-full">
                        <div className="rounded-xl px-6 py-14 overflow-hidden primary-glass2 w-full border border-gray-600/[0.5]">
                            <div className="w-full z-30 relative">
                                <h3 className='text-2xl font-bold'>Experience</h3>
                            </div>
                            <div className="py-5 z-30 w-10/12 mx-auto relative">
                                <ul className="relative  before:content-[''] before:w-0.5 before:h-full before:bg-gray-400 before:absolute before:-left-5 before:top-0">
                                    {experiencedata.map((experience, index) => {
                                        return (
                                            <li key={index} className={`py-3 relative ${index === 0 ? "after:content-[''] after:w-3 after:h-3 after:bg-primarycolor after:absolute after:-left-6 after:rounded-full after:top-6" : ""}  before:content-[''] before:w-5 before:h-5 before:bg-gray-400 before:absolute before:-left-7 before:rounded-full before:top-5`}>
                                                <h4 className="text-xl font-bold py-1 text-white">{experience.name}</h4>
                                                <p className="text-sm py-1 text-gray-400">{experience.year}</p>
                                                <p className="text-md py-1 font-medium text-gray-400 italic">{experience.company}</p>
                                            </li>

                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full flex flex-col gap-4">
                    <div className="rounded-xl p-4 overflow-hidden glass2 w-full border border-gray-600/[0.5]">
                            <div className="w-full z-30 relative">
                                <h3 className='text-2xl font-bold'>Education</h3>
                            </div>
                            <div className="py-5 z-30 w-10/12 mx-auto relative">
                                <ul className="relative  before:content-[''] before:w-0.5 before:h-full before:bg-gray-400 before:absolute before:-left-5 before:top-0">
                                    {educationdata.map((experience, index) => {
                                        return (
                                            <li key={index} className={`py-3 relative ${index === 0 ? "after:content-[''] after:w-3 after:h-3 after:bg-primarycolor after:absolute after:-left-6 after:rounded-full after:top-6" : ""}  before:content-[''] before:w-5 before:h-5 before:bg-gray-400 before:absolute before:-left-7 before:rounded-full before:top-5`}>
                                                <h4 className="text-xl font-bold py-1 text-white">{experience.name}</h4>
                                                <p className="text-sm py-1 text-gray-400">{experience.year}</p>
                                                <p className="text-md py-1 font-medium text-gray-400 italic">{experience.institution}</p>
                                            </li>

                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    <div className="rounded-xl p-4 overflow-hidden glass2 w-full border border-gray-600/[0.5]">
                            <div className="w-full z-30 relative">
                                <h3 className='text-2xl font-bold'>Skills</h3>
                            </div>
                            <div className="py-5 z-30 w-10/12 mx-auto relative">
                                <ul className="relative flex gap-3 flex-wrap">
                                    {skillsdata.map((skill, index) => {
                                        return (
                                            <li key={index} className="glass cursor-default text-sm px-3 py-2 rounded-xl overflow-hidden">
                                                {skill}
                                            </li>

                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Resume