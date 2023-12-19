import me from "../assets/pic.jpg";
import lm from "../assets/lm.png";
import zola from "../assets/zola.png";
import pfl from  "../assets/pfl.png";
import wla from "../assets/wla.png";
import gen from "../assets/gen.png";
import dwm from "../assets/dwm.png";
import pdf from "../assets/theITman.pdf"
import ProjectCards from "./Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode,} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons";

const projects = [
    {
      name: "Blog Website ✏️",
      description:
        "Built with Zola to post my codes, write blogs, and share Linux-related content.",
      imageSrc: zola,
      link: "https://jemcv.github.io/web",
    },
    {
      name: "School Sphere 📌",
      description:
        "A learning management system developed using PHP (backend) and MySQL (database).",
      imageSrc: lm,
      link: "https://github.com/jemcv/lms",
    },
  ];

function Portfolio() {
  return (
    <div className="max-w-4xl mx-auto p-4">
        <nav className="flex items-center justify-between md:py-2 md:my-2">
            <h1 className="font-bold text-lg"><FontAwesomeIcon icon={faCode}></FontAwesomeIcon> JEMCV</h1>
            <a href={pdf} target="_blank" className="resume bg-neutral-800 text-slate-50 p-2 rounded cursor-pointer font-medium resume">
            📄 Resume
            </a>
        </nav>
        <header className="flex md:flex-row flex-col md:items-center md:justify-center">
            <img dir="ltr" className="w-48 mx-auto md:mx-12 rounded-full my-4" src={me} alt="a picture"/>
            <div className="mx-auto">
                <h1 className="font-extrabold text-base text-center mb-2 md:text-left md:text-lg">Hey!👋 Im Jem.</h1>
                <p className="text-sm font-medium text-neutral-300 text-center md:text-left md:text-base">A Muggle-Born Wizard ⚡️ from Hogwarts. <br/>Passionate ❤️ about web and mobile app development. <br/>Occasional ukulele strummer 🎵.</p>
                <section className="mt-4 flex flex-col sm:justify-between md:justify-start sm:flex-row gap-2 md:flex-row md:gap-4 mb-2">
                    <a className="git text-slate-100 font-semibold text-base md:text-lg" href="https://github.com/jemcv" target='_blank'><FontAwesomeIcon icon={ faGithub}></FontAwesomeIcon> Github</a>
                    <a className="linkedin text-sky-400 font-semibold text-base md:text-lg" href="https://linkedin.com/in/jemuelveroja" target='_blank'><FontAwesomeIcon icon={ faLinkedin}></FontAwesomeIcon> Linkedin</a>
                </section>
            </div>
        </header>
        <section>
            <h1 className="font-medium md:text-lg">SKILLS 👷🏽</h1>
                <ul className="flex flex-wrap justify-center items-center m-2 md:flex-nowrap">
          <a className="p-2" href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=html,css,js,php,mysql,figma,react,tailwindcss,git,linux,neovim&theme=dark" />
        </a> 
                                    </ul>
        </section>
        <section>
            <h1 className="font-medium md:text-lg">PROJECTS 🚧</h1>
            <ProjectCards projects={projects} />
        </section>
       
        <footer>
            <ul className="flex mt-8 justify-center align-center font-bold text-md">
                <li>&copy; 2023 JEMCV </li>
            </ul>
        </footer>
   </div>
  )
}

export default Portfolio
