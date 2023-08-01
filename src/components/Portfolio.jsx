import me from "../assets/pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Portfolio() {
  return (
    <div className="max-w-4xl mx-auto p-4">
        <nav className="flex items-center justify-between md:py-2 md:my-2">
            <h1 className="font-black"><FontAwesomeIcon icon={faCode}></FontAwesomeIcon> JEM<span className="text-orange-500">CV</span></h1>
            <ul className="flex gap-2 items-center font-semibold">
                <li className="bg-orange-500 p-2 rounded cursor-pointer"><a href="" download>📝View Resume</a></li>
            </ul>
        </nav>
        <header className="grid gap-4 my-4 md:grid-cols-2 md:items-center md:justify-center">
                <img dir="ltr" className="w-48 mx-auto rounded-full border-4 border-y-orange-400 border-x-neutral-900" src={me} alt="a picture"/>
                <div className="">
                        <h1 className="font-bold text-lg text-center mb-2 md:text-left">Hello there!👋  Im Jem.</h1>
                        <p className="text-sm font-medium text-center md:text-left md:text-base">A Muggle-Born Wizard ⚡️ from Hogwarts. <br/>Passionate ❤️ about building websites and mobile apps. <br/>Occasional ukulele strummer 🎵.</p>
                        <section className="mt-4 flex flex-col gap-2 md:flex-row md:gap-4">
                            <a className="text-slate-900 font-semibold" href="https://github.com" target='blank'><FontAwesomeIcon icon={ faGithub}></FontAwesomeIcon> Github</a>
                            <a className="text-sky-800 font-semibold" href="https://linkedin.com" target='blank'><FontAwesomeIcon icon={ faLinkedin}></FontAwesomeIcon> Linkedin</a>
                        </section>
                </div>
        </header>
        <hr />
        <main className="mt-2">
            <h1 className="font-bold">PROJECTS 🔨</h1>
        </main>
        <section className="grid gap-4 my-4 md:grid-cols-2 md:items-center md:justify-center">
            <div className="bg-gray-100 p-4 rounded-md">
                <h1 className="font-bold">Project 1</h1>
                <p className="text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatibus.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
                <h1 className="font-bold">Project 2</h1>
                <p className="text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatibus.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
                <h1 className="font-bold">Project 3</h1>
                <p className="text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatibus.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
                <h1 className="font-bold">Project 4</h1>
                <p className="text-sm font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatibus.</p>
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