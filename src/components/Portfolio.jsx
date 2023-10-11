import me from "../assets/pic.jpg";
import lms from "../assets/lms.png";
import zola from "../assets/zola.png";
import pfl from  "../assets/pfl.png";
import wla from "../assets/wla.png";
import gen from "../assets/gen.png";
import dwm from "../assets/dwm.png";
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
                <li className="bg-neutral-900 text-slate-50 p-2 rounded cursor-pointer font-medium resume"><a href="https://www.africau.edu/images/default/sample.pdf" target="_blank">📝 My Resume</a></li>
            </ul>
        </nav>
        <header className="flex md:flex-row flex-col md:items-center md:justify-center">
            <img dir="ltr" className="w-48 mx-auto md:mx-12 rounded-full border-4 border-neutral-900 my-4" src={me} alt="a picture"/>
            <div className="mx-auto">
                <h1 className="font-extrabold text-base text-center mb-2 md:text-left md:text-lg">Hey!👋 Im Jem.</h1>
                <p className="text-sm font-medium text-center md:text-left md:text-base">A Muggle-Born Wizard ⚡️ from Hogwarts. <br/>Passionate ❤️ about web and mobile app development. <br/>Occasional ukulele strummer 🎵.</p>
            <section className="mt-4 flex flex-col sm:justify-between md:justify-start sm:flex-row gap-2 md:flex-row md:gap-4 mb-2">
                <a className="text-slate-900 font-semibold text-base md:text-lg" href="https://github.com/jemcv" target='_blank'><FontAwesomeIcon icon={ faGithub}></FontAwesomeIcon> Github</a>
                <a className="text-sky-800 font-semibold text-base md:text-lg" href="https://linkedin.com" target='_blank'><FontAwesomeIcon icon={ faLinkedin}></FontAwesomeIcon> Linkedin</a>
            </section>
  </div>
</header>
        <hr />
        <section>
            <h1 className="font-bold md:text-lg">SKILLS 👷🏽</h1>
                <ul className="flex flex-wrap justify-center items-center m-2 md:flex-nowrap">
          <a className="p-2" href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html,css,js,php,mysql,figma,react,tailwindcss,git,linux,neovim" />
   </a> 
                                    </ul>
        </section>
        <hr />
        
        <section>
            <h1 className="font-bold md:text-lg">PROJECTS 🚧</h1>
            <section className="grid gap-4 my-4 md:grid-cols-2 md:items-center md:justify-center">
                <div className="bg-gray-300 p-4 rounded-md card">
                    <h1 className="mb-2 font-semibold">Blog Website ✏️</h1>
                    <p className="text-sm font-medium">Built with Zola to post my codes, write blogs, and share Linux-related content.</p>
                    <a href="https://jemcv.github.io/web" target="_blank"><img src={zola} alt="Visit the Zola site" className="mt-2 mx-auto w-auto h-64 object-cover rounded-md "/></a>
                </div>
                <div className="bg-gray-300 p-4 rounded-md card">
                    <h1 className="mb-2 font-semibold">School Sphere 📌</h1>
                    <p className="text-sm font-medium">A learning management system developed using PHP as the backend and SQL as the database. </p>
                    <a href="https://github.com/jemcv/lms" target="_blank"><img src={lms} alt="random image" className="mt-2 mx-auto w-auto h-64 object-cover rounded-md "/></a>
                </div>
         
                <div className="bg-gray-300 p-4 rounded-md card">
                    <h1 className="mb-2 font-semibold">Portfolio Website 🎨</h1>
                    <p className="text-sm font-medium">Developed this project using ReactJS, Tailwind CSS, and Vite.</p>
                    <a href="https://jemcv.netlify.app" target="_blank"><img src={pfl} alt="random image" className="mt-2 mx-auto w-auto h-64 object-cover rounded-md "/></a>
                </div>
                <div className="bg-gray-300 p-4 rounded-md card">
                    <h1 className="mb-2 font-semibold">WallAnime 📱</h1>
                    <p className="text-sm font-medium">A simple endless-scroll mobile app using Dart and Flutter.</p>
                    <a href="https://github.com/jemcv/wallanime" target="_blank"><img src={wla} alt="random image" className="mt-2 mx-auto w-auto h-64 object-cover rounded-md "/></a>
                </div>
                <div className="bg-gray-300 p-4 rounded-md card">
                    <h1 className="mb-2 font-semibold">Generar 🧑🏽‍💻</h1>
                    <p className="text-sm font-medium">A cli tool to generate fake data based from Faker using Typer.</p>
                    <img src={gen} alt="random image" className="mt-2 mx-auto w-auto h-64 object-cover rounded-md "/>
                </div>
                <div className="bg-gray-300 p-4 rounded-md card">
                    <h1 className="mb-2 font-semibold">DWM Rice 🍚</h1>
                    <p className="text-sm font-medium">My Linux Rice using Arch Linux with DWM (Dynamic Window Manager).</p>
                    <img src={dwm} alt="random image" className="mt-2 mx-auto w-auto h-64 object-cover rounded-md "/>
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
