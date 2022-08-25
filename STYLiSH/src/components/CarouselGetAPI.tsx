import axios from "axios";

const CarouselGetAPI = async () => {
  await axios
    .get(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => {
      console.log("Response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
    });
};
