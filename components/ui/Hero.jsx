import { FaDev, FaDownload, FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa6";
import Counter from "./Counter";
const Hero = () => {
    return (
        <div className="w-full z-20 h-full flex md:gap-3 gap-6 justify-center items-center flex-col">
            <div className="w-11/12 gap-4 h-full md:pt-14 pt-24 sm:flex-row flex-col-reverse flex justify-center items-center">
                <div className="sm:w-7/12 w-full">
                    <div className="text_container">
                        <h5 className="text-gray-400 text-md">Hey there!</h5>
                        <h2 className="md:text-7xl text-4xl font-bold">I'm <span className="text-primarycolor">Otmane Boushaba</span>,<br /> a Backend / Data Engineer</h2>
                        <p className="py-4 text-sm text-gray-400">Welcome to my digital portfolio, where code investigation meets creativity. 
                            I thrive on unraveling digital mysteries and understanding problems at their core. 
                            Like a detective examining clues, I'm fascinated by dissecting challenges before crafting solutions. 
                            My passion lies in the investigative journey—analyzing patterns, exploring possibilities, and uncovering the root causes that others might miss. 
                            I build responsive, effective web solutions not just because I can, but because I truly understand the problems they solve.</p>
                        <a href="./resume.pdf" target="_blank" className="w-fit flex"><button className="my-3 text-primarycolor px-5 py-2 border-2 text-sm transition-all duration-200 ease-in-out hover:bg-primarycolor hover:text-white bg-transparent border-primarycolor flex gap-3 justify-center items-center"> <FaDownload /> Download CV</button></a>
                    </div>
                </div>
                <div className="sm:w-5/12 w-full flex justify-center items-center">
                    <div className="hero_img_container w-full max-w-[420px] bg-secondarycolor p-3 rounded-3xl border border-gray-600/[0.5] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                        <img src="./img/hero.jpg" alt="hero_img" className="w-full h-full rounded-3xl" />
                    </div>
                </div>
            </div>
            <div className="w-11/12 md:gap-5 gap-3 h-fit pb-4 flex md:flex-row flex-col justify-center items-center">
                <div className="md:w-7/12 w-full flex items-center py-6 justify-around bg-secondarycolor p-3 rounded-3xl border border-gray-600/[0.5] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                    <div className="flex w-full items-center justify-center gap-3 px-2 border-r-2 border-gray-400">
                        <div className="font-bold md:text-5xl text-3xl flex justify-center items-center text-primarycolor">
                            <Counter from={0} to={1} />
                        </div>
                        <div>
                            <h4 className="sm:text-md text-sm">Years Of<br />
                                Experience</h4>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-center px-2 gap-3">
                        <div className="font-bold md:text-5xl text-3xl  flex justify-center items-center text-primarycolor">
                            <Counter from={0} to={12} />+
                        </div>
                        <div>
                            <h4 className="sm:text-md text-sm">Projects<br />
                                Completed</h4>
                        </div>
                    </div>
                </div>
                <div className="md:w-5/12 w-full flex items-center py-5 justify-around bg-secondarycolor p-3 rounded-3xl border border-gray-600/[0.5] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                    <ul className="flex justify-center items-center gap-4">
                        <li><a href="#"><button className="w-14 h-14 rounded-full flex justify-center items-center glass border border-gray-600/[0.5] transition-all duration-200 ease-in-out hover:bg-primarycolor"><FaDribbble className="w-8 h-8" /></button></a></li>
                        <li><a href="https://www.linkedin.com/in/boushaba-otmane/"><button className="w-14 h-14 rounded-full flex justify-center items-center glass border border-gray-600/[0.5] transition-all duration-200 ease-in-out hover:bg-primarycolor text-3xl"><FaLinkedin /></button></a></li>
                        <li><a href="#"><button className="w-14 h-14 rounded-full flex justify-center items-center glass border border-gray-600/[0.5] transition-all duration-200 ease-in-out hover:bg-primarycolor text-3xl"><FaGithub /></button></a></li>
                        <li><a href="#"><button className="w-14 h-14 rounded-full flex justify-center items-center glass border border-gray-600/[0.5] transition-all duration-200 ease-in-out hover:bg-primarycolor text-3xl"><FaDev /></button></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hero