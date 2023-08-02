import me from "../assets/pic.jpg";
import lms from "../assets/lms.png";
import zola from "../assets/zola.png";
import pfl from  "../assets/pfl.png";
import wla from "../assets/wla.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Portfolio() {
  return (
    <div className="max-w-4xl mx-auto p-4">
        <nav className="flex items-center justify-between md:py-2 md:my-2">
            <h1 className="font-black"><FontAwesomeIcon icon={faCode}></FontAwesomeIcon> JEMCV</h1>
            <ul className="flex gap-2 items-center font-semibold">
                <li className="bg-emerald-400 p-2 rounded cursor-pointer"><a href="" download>📝 View Resume</a></li>
            </ul>
        </nav>
        <header className="grid gap-4 my-4 md:grid-cols-2 md:items-center md:justify-center">
                <img dir="ltr" className="w-48 mx-auto rounded-full border-4 border-neutral-900" src={me} alt="a picture"/>
                <div className="">
                        <h1 className="font-bold text-lg text-center mb-2 md:text-left">Hello there!👋  Im Jem.</h1>
                        <p className="text-sm font-medium text-center md:text-left md:text-base">A Muggle-Born Wizard ⚡️ from Hogwarts. <br/>Passionate ❤️ about building websites and mobile apps. <br/>Occasional ukulele strummer 🎵.</p>
                        <section className="mt-4 flex flex-col gap-2 md:flex-row md:gap-4">
                            <a className="text-slate-900 font-semibold" href="https://github.com/jemcv" target='_blank'><FontAwesomeIcon icon={ faGithub}></FontAwesomeIcon> Github</a>
                            <a className="text-sky-800 font-semibold" href="https://linkedin.com" target='_blank'><FontAwesomeIcon icon={ faLinkedin}></FontAwesomeIcon> Linkedin</a>
                        </section>
                </div>
        </header>
        <hr />
        <main className="mt-2">
            <h1 className="font-bold">PROJECTS 🔨</h1>
        </main>
        <section className="grid gap-4 my-4 md:grid-cols-2 md:items-center md:justify-center">
            <div className="bg-orange-200 p-4 rounded-md">
                <h1 className="mb-2 font-bold">Blog Website ✏️</h1>
                <p className="text-sm font-medium">Built with Zola to post my codes, write blogs, and share Linux-related content.</p>
                <a href="https://jemcv.github.io/web" target="_blank"><img src={zola} alt="Visit the Zola site" className="mt-2 w-auto h-64 object-cover rounded-md border-4 border-orange-500"/></a>
            </div>
            <div className="bg-gray-200 p-4 rounded-md">
                <h1 className="mb-2 font-bold">Learning Management Sytem 📌</h1>
                <p className="text-sm font-medium">This one was developed utilizing PHP as the backend and SQL as the database. </p>
                <img src={lms} alt="random image" className="mt-2 w-auto h-64 object-cover rounded-md border-4 border-gray-500"/>
            </div>
            <div className="bg-stone-200 p-4 rounded-md">
                <h1 className="mb-2 font-bold">Portfolio Website 🎨</h1>
                <p className="text-sm font-medium">Developed this project using ReactJS, Tailwind CSS, and Vite.</p>
                <img src={pfl} alt="random image" className="mt-2 w-auto h-64 object-cover rounded-md border-4 border-stone-500"/>
            </div>
            <div className="bg-red-200 p-4 rounded-md">
                <h1 className="mb-2 font-bold">Mobile Application ⬆️</h1>
                <p className="text-sm font-medium">A simple endless-scroll mobile app using Dart and Flutter.</p>
                <img src={wla} alt="random image" className="mt-2 w-auto h-64 object-cover rounded-md border-4 border-red-500"/>
            </div>
            
          
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