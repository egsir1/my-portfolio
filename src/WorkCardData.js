import firdavs from "./assets/firdavs-intro.png";
import ecommerce from "./assets/del.png";
import blog from "./assets/blog.png";
const ProjectCardData = [
  {
    id: "p-1",
    imgsrc: firdavs,
    title: "Restaurant Web-app",
    text: "This is halal restaurant web-application built in React and it is completely responsive. It includes several functions like commenting and making a reservation(email is sent to restauraunt staff showing all the reservation details)",
    view: "https://firdavsrestaurant.netlify.app/",
  },
  {
    id: "p-2",
    imgsrc: ecommerce,
    title: "Food Delivery App ",
    text: "This is restaurant food delivery app is being built using React. This is still ongoing project which is fully-responsive and dynamic. The platform can be translated by users (google-translate powered)",
    view: "https://firdavs-delivero.vercel.app/",
  },
  {
    id: "p-3",
    imgsrc: blog,
    title: "My Blog",
    text: "This blog project built in NextJS is very modern and fast. Some awesome features of NextJs like pre-rendering, dynamic-routing, image-optimization, protected-api-credentials have been used.",
    view: "https://next-blog-seven-wine.vercel.app/",
  },
];
export default ProjectCardData;
