import "./App.css";
import img from "./assets/img.jpg";
function App() {
  return (
    <div className="min-h-screen h-screen ">
      <div className="max-w-4xl mx-auto flex justify-center items-center flex-col">
        <h2 className="font-bold text-4xl">Who i am</h2>
        <h3 className="font-bold">subtitle</h3>
        <p className="text-lg text-center">
          I'm Alejandro, I combine the world of data and software, creating
          products and strategies through problem solving. I am focused on
          creating solutions based on scalability, interactive systems and
          multidisciplinary fields.
        </p>
      </div>
      <div className="max-w-4xl mx-auto flex justify-center items-center flex-col pt-3">
        <h2 className="font-bold text-4xl">Who i am</h2>
        <h3 className="font-bold">subtitle</h3>
      </div>
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
      <div className="max-w-4xl mx-auto flex justify-center items-center flex-col">
        <h2 className="font-bold text-4xl">My projects</h2>
        <h3 className="font-bold">check it out</h3>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <img src={img} alt="" srcset="" />
            <span className="font-bold">
              Recommend the maximum contrast between black and white
            </span>
          </div>
          <div>
            <img src={img} alt="" srcset="" />
            <span className="font-bold">
              Recommend the maximum contrast between black and white
            </span>
          </div>
          <div>
            <img src={img} alt="" srcset="" />
            <span className="font-bold">
              Recommend the maximum contrast between black and white
            </span>
          </div>
          <div>
            <img src={img} alt="" srcset="" />
            <span className="font-bold">
              Recommend the maximum contrast between black and white
            </span>
          </div>
          <div>
            <img src={img} alt="" srcset="" />
            <span className="font-bold">Recommend the maximum contrast between black and white</span>
          </div>
          <div>
            <img src={img} alt="" srcset="" />
            <span className="font-bold">Recommend the maximum contrast between black and white</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
