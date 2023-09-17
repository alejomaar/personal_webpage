import "./App.css";
import img from "./assets/img.jpg";
import profile_photo_img from "./assets/profile_photo.png";
function App() {
  return (
    <div className="min-h-screen h-screen ">
      <div className="max-w-4xl mx-auto flex justify-center items-center flex-col mt-12">
        <h1 className="font-bold text-4xl text-indigo-700">
          Alejandro Aponte
        </h1>
        <h1 className="font-bold  text-4xl text-gray-900 ">
          Machine Learning & Software Engineer
        </h1>

        <img className="w-64 h-64 mt-14" src={profile_photo_img} />
      </div>
      <div className="max-w-4xl mx-auto flex justify-center items-center flex-col border-t border-black my-14">
        <h2 className="font-bold text-4xl text-indigo-700 mt-7">About me</h2>
        <p className="text-lg  mt-3">
          Hi, my name is Alejandro, I'm working as Machine Learning Engineer at
          Habi, I have 2 years of experience building solutions using AI and
          software.
        </p>
        <p className="text-lg  mt-2">
          I'm able to solve complex and unusual problems with top tecnologies,
          problem solving and communication skills, besides I've worked in
          different industries (Retail,PropTech, Fintech) and also worked with
          many stakeholders, it allowed me easy communication with different
          people be technical or not.
        </p>
        <p className="text-lg mt-2 ">
          I particularly enjoy working on Computer Vision and NLP. I've find so
          many challenges out there and I consider it so intersting, reason I'm
          always open to study, investigate and experiment continuoslly
        </p>
      </div>
      <div className="max-w-4xl mx-auto flex justify-center items-center flex-col border-t border-black my-14">
        <h2 className="font-bold text-4xl  mt-7 mb-3">My skills</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-3">
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
        <div className="grid grid-cols-3 gap-3 grid-template-rows">
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
