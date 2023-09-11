import "./App.css";
import img from "./assets/img.jpg";
import profile_photo_img from "./assets/profile_photo.png";
function App() {
  return (
    <div className="min-h-screen h-screen ">
      <div className="max-w-4xl mx-auto flex justify-center items-center flex-col mt-12">
        <span className="font-bold text-4xl text-indigo-700">Machine Learning &</span>
        <h1 className="font-bold  text-4xl text-gray-900 ">  Software Engineer</h1>

        <img className="w-64 h-64 mt-14" src={profile_photo_img} />
      </div>
      <div className="max-w-4xl mx-auto flex justify-center items-center flex-col border-t border-black my-14">
        <h2 className="font-bold text-4xl">Who i axm</h2>
        <h3 className="font-bold">subtitle</h3>
        <p className="text-lg text-center">
          I'm Alejandro, I combine the world of data and software, creating
          products and strategies through problem solving. I am focused on
          creating solutions based on scalability, interactive systems and
          multidisciplinary fields.
        </p>
      </div>
      <div className="max-w-4xl mx-auto flex justify-center items-center flex-col border-t border-black my-14">
        <h2 className="font-bold text-4xl">Who i am</h2>
        <h3 className="font-bold">subtitle</h3>
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
        <h2 className="font-bold text-4xl">My projects</h2>
        <h3 className="font-bold">check it out</h3>
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
