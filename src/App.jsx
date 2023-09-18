import "./App.css";
import img from "./assets/img.jpg";
import profile_photo_img from "./assets/profile_photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import messages from "./constant/messages";
import { Link } from "react-scroll";

function App() {
  return (
    <div className="min-h-screen h-screen ">
      <nav className="w-full fixed top-0 left-0 right-0 flex h-20 bg-white z-20">
        <ul className="w-full flex justify-center items-center">
          <li className="mx-3 font-bold border-b-2 hover:border-b-2 hover:border-black">
            <Link
              to="about_me"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About Me
            </Link>
          </li>
          <li className="mx-3 font-bold border-b-2 hover:border-b-2 hover:border-black">
            <Link
              to="my_skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              My Skills
            </Link>
          </li>
          <li className="mx-3 font-bold border-b-2 hover:border-b-2 hover:border-black">
            <Link
              to="my_projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              My Projects
            </Link>
          </li>
        </ul>
      </nav>
      <div className="max-w-7xl mx-auto flex justify-center items-center flex-col  h-screen">
        <h1 className="font-bold text-2xl sm:text-3xl  text-center sans_serif">
          Hi! My name is Alejandro Aponte
        </h1>
        <h1 className="font-bold px-5 text-5xl sm:text-7xl  text-gray-900 text-center ">
          Machine Learning Engineer
        </h1>

        <div className="w-full relative flex justify-center items-center">
          <div className="w-full overflow-hidden absolute top-1/2 border-t border-b border-black">
            <div className="marquee-container  my-7">
              <ul className="marquee flex">
                <li className="mx-3 text-6xl">Computer Vision |</li>
                <li className="mx-3 text-6xl">NLP |</li>
                <li className="mx-3 text-6xl">Machine Learning |</li>
                <li className="mx-3 text-6xl">Software Engineering |</li>
              </ul>
            </div>
          </div>
          <img
            className="w-64 h-64 mt-14 z-10 rounded-full"
            src={profile_photo_img}
          />
        </div>

        <div className="flex mt-4">
          <a
            href="https://github.com/alejomaar"
            target="_blank"
            className="bg-black p-3 cursor-pointer mx-2 rounded-md"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" color="white" />
          </a>
          <a
            href="https://github.com/alejomaar"
            target="_blank"
            className="bg-black p-3 cursor-pointer mx-2 rounded-md"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" color="white" />
          </a>
        </div>
      </div>
      <div className="bg-black text-white  min-h-screen" id="about_me">
        <div className="max-w-4xl px-5 lg:px-0 mx-auto flex flex-col border-t border-black py-20 ">
          <h2 className="font-bold text-6xl mt-7">About me</h2>
          <p className="text-xl mt-3">
            I'm Alejandro, a seasoned Machine Learning Engineer specializing in
            Computer Vision and Natural Language Processing (NLP). With 2 years
            of experience at Habi, I excel in leveraging AI, AWS, and database
            management to solve complex problems across industries like Retail,
            PropTech, and Fintech. My ability to communicate effectively with
            diverse stakeholders has proven invaluable.
          </p>
          <p className="text-xl mt-2">
            In addition to my expertise in AI and related technologies, my
            profile boasts a diverse skill set that includes 3D,
            design,webpages, and marketing knowledge. This unique blend of
            skills enhances my adaptability and creativity in approaching
            problem-solving. My passion for innovation and a keen eye for design
            complement my technical prowess, making me a well-rounded
            professional in the fields of AI, technology, and creative domains.
          </p>
          <h2 className="font-bold text-4xl mt-7">Core Values</h2>
          <div className="flex border-t border-white py-3 my-3">
            <div className="w-1/2">
              <span className="font-bold">Trust</span>
            </div>
            <div className="w-1/2">
              <p>In addition to my expertise in AI and related technologies</p>
            </div>
          </div>
          <div className="flex border-t border-white py-3">
            <div className="w-1/2">
              <span className="font-bold">Ethics</span>
            </div>
            <div className="w-1/2">
              <p>In addition to my expertise in AI and related technologies</p>
            </div>
          </div>
          <div className="flex border-t border-white py-3">
            <div className="w-1/2">
              <span className="font-bold">Ethics</span>
            </div>
            <div className="w-1/2">
              <p>In addition to my expertise in AI and related technologies</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto flex justify-center items-center flex-col border-t border-black my-14"
        id="my_skills"
      >
        <h2 className="font-bold text-4xl  mt-7 mb-3">My skills</h2>
        <div className="max-w-4xl px-5 lg:px-0 mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {messages["landing_page"]["skills"].map((info, id) => (
            <div key={id} className="flex flex-col">
              <FontAwesomeIcon icon={faLinkedin} size="3x" />
              <h3 className="font-bold text-2xl text-center">{info.title}</h3>
              <p className="text-center">{info.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto flex justify-center items-center flex-col border-t border-black my-14"
        id="my_projects"
      >
        <h2 className="font-bold text-4xl mt-7 mb-6">My projects</h2>
        <div className="w-full grid grid-template-rows  px-5 lg:px-0 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {messages["landing_page"]["projects"].map((info, id) => (
            <a className="flex flex-col group cursor-pointer">
              <img src={info.img} />
              <h3 className="text-xl mt-2 px-2 font-bold  group-hover:underline ">
                Hierarchical text-conditional image generation with CLIP latents
              </h3>
              <span className="px-2">{info.description}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto flex justify-center items-center flex-col border-t border-black my-14">
        <p className="text-4xl text-center">
          Join us in shaping the future of technology.
        </p>
      </div>
      <footer className="bg-black py-3">x</footer>
    </div>
  );
}

export default App;
