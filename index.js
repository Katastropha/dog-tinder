import { dogs } from "./data.js";
import Dog from "./Dog.js";

const application = document.getElementById("application");

const handleFinish = () => {
  if (dogs.length) {
    const dogToLike = new Dog(dogs.shift(), application, handleFinish);
    dogToLike.feedHtml();
  } else {
    console.log("THE END");
  }
};

handleFinish();
