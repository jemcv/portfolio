import me from "../assets/pic.jpg";
import lms from "../assets/lms.png";
import zola from "../assets/zola.png";
import pfl from  "../assets/pfl.png";
import wla from "../assets/wla.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BiLogoTailwindCss } from "react-icons/bi";
import { faCode,} from "@fortawesome/free-solid-svg-icons";
import { faCss3, faGithub, faHtml5, faJs, faLinkedin, faPhp, faPython, faReact } from "@fortawesome/free-brands-svg-icons";

function Portfolio() {
  return (
    <div className="max-w-4xl mx-auto p-4">
        <nav className="flex items-center justify-between md:py-2 md:my-2">
            <h1 className="font-bold text-lg "><FontAwesomeIcon icon={faCode}></FontAwesomeIcon> JEMCV</h1>
            <ul className="flex gap-2 items-center">
                <li className="bg-neutral-900 text-slate-50 p-2 rounded cursor-pointer font-medium"><a href="" download>📝Resume</a></li>
            </ul>
        </nav>
        <header className="grid gap-4 my-4 md:grid-cols-2 md:items-center md:justify-center">
                <img dir="ltr" className="w-48 mx-auto rounded-full border-4 border-neutral-900" src={me} alt="a picture"/>
                <div className="">
                        <h1 className="font-bold text-base text-center mb-2 md:text-left md:text-lg">Hello there!👋  Im Jem.</h1>
                        <p className="text-sm font-medium text-center md:text-left md:text-base">A Muggle-Born Wizard ⚡️ from Hogwarts. <br/>Passionate ❤️ about web and mobile app development. <br/>Occasional ukulele strummer 🎵.</p>
                        <section className="mt-4 flex flex-col gap-2 md:flex-row md:gap-4">
                            <a className="text-slate-900 font-semibold" href="https://github.com/jemcv" target='_blank'><FontAwesomeIcon icon={ faGithub}></FontAwesomeIcon> Github</a>
                            <a className="text-sky-800 font-semibold" href="https://linkedin.com" target='_blank'><FontAwesomeIcon icon={ faLinkedin}></FontAwesomeIcon> Linkedin</a>
                        </section>
                </div>
        </header>
        <hr />
        <section>
            <h1 className="font-bold">SKILLS 👷🏽</h1>
                <ul className="flex flex-wrap justify-center items-center m-2 md:flex-nowrap">
                    <li className="p-2 rounded-md text-orange-500 text-3xl md:text-4xl"><FontAwesomeIcon icon={ faHtml5}></FontAwesomeIcon></li>
                    <li className="p-2 rounded-md text-blue-500 text-3xl md:text-4xl" ><FontAwesomeIcon icon={ faCss3}></FontAwesomeIcon></li>
                    <li className="p-2 rounded-md text-yellow-400 text-3xl md:text-4xl"><FontAwesomeIcon icon={ faJs}></FontAwesomeIcon></li>
                    <li className="p-2 rounded-md text-blue-900 text-3xl md:text-4xl"><FontAwesomeIcon icon={ faPhp}></FontAwesomeIcon></li>
                    <li className="p-2 rounded-md text-blue-500 text-3xl md:text-4xl" ><FontAwesomeIcon icon={ faPython}></FontAwesomeIcon></li>
                    <li className="p-2 rounded-md text-blue-400 text-3xl md:text-4xl" ><FontAwesomeIcon icon={ faReact}></FontAwesomeIcon></li>
                    <li className="p-2 rounded-md  text-blue-400 text-3xl md:text-4xl" ><BiLogoTailwindCss icon={ BiLogoTailwindCss }></BiLogoTailwindCss></li>
                </ul>
        </section>
        <hr />
        
        <section>
            <h1 className="font-bold">PROJECTS 🚧</h1>
            <section className="grid gap-4 my-4 md:grid-cols-2 md:items-center md:justify-center">
                <div className="bg-gray-200 p-4 rounded-md">
                    <h1 className="mb-2 font-bold">Blog Website ✏️</h1>
                    <p className="text-sm font-medium">Built with Zola to post my codes, write blogs, and share Linux-related content.</p>
                    <a href="https://jemcv.github.io/web" target="_blank"><img src={zola} alt="Visit the Zola site" className="mt-2 mx-auto w-auto h-64 object-cover rounded-md border-4 border-gray-900"/></a>
                </div>
                <div className="bg-gray-200 p-4 rounded-md">
                    <h1 className="mb-2 font-bold">Learning Management Sytem 📌</h1>
                    <p className="text-sm font-medium">This one was developed utilizing PHP as the backend and SQL as the database. </p>
                    <img src={lms} alt="random image" className="mt-2 mx-auto w-auto h-64 object-cover rounded-md border-4 border-gray-900"/>
                </div>
                <div className="bg-gray-200 p-4 rounded-md">
                    <h1 className="mb-2 font-bold">Portfolio Website 🎨</h1>
                    <p className="text-sm font-medium">Developed this project using ReactJS, Tailwind CSS, and Vite.</p>
                    <img src={pfl} alt="random image" className="mt-2 mx-auto w-auto h-64 object-cover rounded-md border-4 border-gray-900"/>
                </div>
                <div className="bg-gray-200 p-4 rounded-md">
                    <h1 className="mb-2 font-bold">Mobile Application ⬆️</h1>
                    <p className="text-sm font-medium">A simple endless-scroll mobile app using Dart and Flutter.</p>
                    <img src={wla} alt="random image" className="mt-2 mx-auto w-auto h-64 object-cover rounded-md border-4 border-gray-900"/>
                </div>
            </section>
        </section>
       
        <footer>
            <ul className="flex justify-center align-center font-bold text-sm">
                <li>&copy; 2023 JEMCV </li>
            </ul>
        </footer>
   </div>
  )
}

export default Portfolio