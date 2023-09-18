import "./App.css";
import img from "./assets/img.jpg";
import profile_photo_img from "./assets/profile_photo.png";
//https://musotoku.com/
function App() {
  return (
    <div className="min-h-screen h-screen ">
      <nav className="w-full fixed top-0 left-0 right-0 flex h-20 bg-white z-20">
        <ul class="w-full flex justify-center items-center">
          <li class="mx-3 font-bold border-b-2 hover:border-b-2 hover:border-black">
            About Me
          </li>
          <li class="mx-3 font-bold border-b-2 hover:border-b-2 hover:border-black">
            My Skills
          </li>
          <li class="mx-3 font-bold border-b-2 hover:border-b-2 hover:border-black">
            My Projects
          </li>
        </ul>
      </nav>
      <div className="max-w-4xl mx-auto flex justify-center items-center flex-col  h-screen">
        <h1 className="font-bold text-2xl sm:text-3xl  text-center sans_serif">
          Hi! My name is Alejandro Aponte
        </h1>
        <h1 className="font-bold px-5 text-5xl sm:text-7xl  text-gray-900 text-center ">
          Machine Learning Engineer
        </h1>

        <div className="w-full relative flex justify-center items-center">
          <div class="w-full overflow-hidden absolute top-1/2 border-t border-b border-black">
            <div class="marquee-container  my-7">
              <ul class="marquee flex">
                <li class="mx-3 text-6xl">Computer Vision |</li>
                <li class="mx-3 text-6xl">NLP |</li>
                <li class="mx-3 text-6xl">Machine Learning |</li>
                <li class="mx-3 text-6xl">Software Engineering |</li>
              </ul>
            </div>
          </div>
          <img
            className="w-64 h-64 mt-14 z-10 rounded-full"
            src={profile_photo_img}
          />
        </div>
      </div>
      <div className="bg-black text-white  min-h-screen">
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
              <p>
                In addition to my expertise in AI and related technologies
              </p>
            </div>
          </div>
          <div className="flex border-t border-white py-3">
            <div className="w-1/2">
              <span className="font-bold">Ethics</span>
            </div>
            <div className="w-1/2">
              <p>
                In addition to my expertise in AI and related technologies
              </p>
            </div>
          </div>
          <div className="flex border-t border-white py-3">
            <div className="w-1/2">
              <span className="font-bold">Ethics</span>
            </div>
            <div className="w-1/2">
              <p>
                In addition to my expertise in AI and related technologies
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto flex justify-center items-center flex-col border-t border-black my-14">
        <h2 className="font-bold text-4xl  mt-7 mb-3">My skills</h2>
        <div className="max-w-4xl px-5 lg:px-0 mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="">
            <h3 className="font-bold text-2xl text-center">Computer Vision</h3>
            <p className="text-center">
              Segmentation, detection, classification, transformation and
              processing applied to images and videos
            </p>
          </div>
          <div className="">
            <h3 className="font-bold text-2xl text-center">Computer Vision</h3>
            <p className="text-center">
              Segmentation, detection, classification, transformation and
              processing applied to images and videos
            </p>
          </div>
          <div className="">
            <h3 className="font-bold text-2xl text-center">Computer Vision</h3>
            <p className="text-center">
              Segmentation, detection, classification, transformation and
              processing applied to images and videos
            </p>
          </div>
          <div className="">
            <h3 className="font-bold text-2xl text-center">Computer Vision</h3>
            <p className="text-center">
              Segmentation, detection, classification, transformation and
              processing applied to images and videos
            </p>
          </div>
          <div className="">
            <h3 className="font-bold text-2xl text-center">Computer Vision</h3>
            <p className="text-center">
              Segmentation, detection, classification, transformation and
              processing applied to images and videos
            </p>
          </div>
          <div className="">
            <h3 className="font-bold text-2xl text-center">Computer Vision</h3>
            <p className="text-center">
              Segmentation, detection, classification, transformation and
              processing applied to images and videos
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto flex justify-center items-center flex-col border-t border-black my-14">
        <h2 className="font-bold text-4xl mt-7 mb-6">My projects</h2>
        <div className="grid grid-template-rows  px-5 lg:px-0 mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col justify-between">
            <img src={img} />
            <span className="font-bold text-center">
              Recommend the maximum contrast between black and white
            </span>
          </div>
          <div className="flex flex-col justify-between">
            <img src={img} />
            <span className="font-bold text-center">
              Recommend the maximum contrast between black and white
            </span>
          </div>
          <div className="flex flex-col justify-between">
            <img src={img} />
            <span className="font-bold text-center">
              Recommend the maximum contrast between black and white
            </span>
          </div>
          <div className="flex flex-col justify-between">
            <img src={img} />
            <span className="font-bold text-center">
              Recommend the maximum contrast between black and white
            </span>
          </div>
          <div className="flex flex-col justify-between">
            <img src={img} />
            <span className="font-bold text-center">
              Recommend the maximum contrast between black and white
            </span>
          </div>
          <div className="flex flex-col justify-between">
            <img src={img} />
            <span className="font-bold text-center">
              Recommend the maximum contrast between black and white
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto flex justify-center items-center flex-col border-t border-black my-14">
        <p className="text-4xl">Join us in shaping the future of technology.</p>
      </div>
      <footer className="bg-black py-3">x</footer>
    </div>
  );
}

export default App;
