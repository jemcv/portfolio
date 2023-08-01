import me from "../assets/pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Portfolio() {
  return (
    <div className="max-w-4xl mx-auto p-4">
        <nav className="flex items-center justify-between py-4 my-4">
            <h1 className="font-black"><FontAwesomeIcon icon={faCode}></FontAwesomeIcon> JEMCV</h1>
            <ul className="flex gap-2 items-center font-bold">
                <li>about</li>
                <li className="bg-green-500 text-slate-100 p-2 rounded cursor-pointer"><a href="" download>📝resume</a></li>
            </ul>
        </nav>
        <header className="grid gap-4 my-4 md:grid-cols-2 md:items-center md:justify-center">
                <img dir="ltr" className="w-48 mx-auto rounded-full border-4 border-y-orange-400 border-x-neutral-900" src={me} alt="a picture"/>
                <div className="">
                        <h1 className="font-bold">Hello there!👋  Im Jem</h1>
                        <p>A Muggle-Born Wizard ⚡️ from Hogwarts.</p>
                        <p>Passionate ❤️ about building websites and mobile apps.</p>
                        <p>Occasional ukulele strummer 🎵.</p>
                        <section className="mt-4 flex flex-col gap-2 md:flex-row md:gap-4">
                            <a href="https://github.com" target='blank'><FontAwesomeIcon icon={ faGithub}></FontAwesomeIcon> Github</a>
                            <a className="text-sky-800"href="https://linkedin.com" target='blank'><FontAwesomeIcon icon={ faLinkedin}></FontAwesomeIcon> Linkedin</a>
                        </section>
                </div>
        </header>
        <hr />
        
 
   </div>
  )
}

export default Portfolio