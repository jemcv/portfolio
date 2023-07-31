import me from "../assets/pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Portfolio() {
  return (
    <div className="max-w-3xl mx-auto p-4">
        <nav className="flex py-4 my-4 items-center justify-between">
            <h1 className="text-2xl font-bold"><FontAwesomeIcon icon={faCode}></FontAwesomeIcon> jemcv</h1>
            <ul className="flex text-xl items-center gap-2 font-medium">
                <li>about</li>
                <li className="bg-slate-700 text-slate-100 py-2 px-2 rounded cursor-pointer"><a href="" download>resume</a></li>
            </ul>
        </nav>
        <header className="flex justify-center my-4 py-4 leading-8 flex-nowrap">
                <img className="w-48 border-8 border-slate-700" src={me} alt="a picture"/>
                <p className='ml-8'>
                    <h1 className="text-2xl font-bold">Hello there! Im Jem </h1>
                    <p className="mt-2">A Muggle-Born Wizard from Hogwarts.</p>
                    <p>Passionate about building websites and mobile apps.</p>
                    <p>Linux Enthusiast and occasional ukulele strummer.</p>
                    <section className="mt-6 ">
                        <a className=" font-bold text-lg p-1 cursor-pointer" href="https://github.com" target='blank'><FontAwesomeIcon icon={ faGithub}></FontAwesomeIcon> Github</a>
                    </section>
                </p>
        </header>
 
   </div>
  )
}

export default Portfolio