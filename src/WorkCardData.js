import firdavs from "./assets/firdavs-intro.png";
import ecommerce from "./assets/del.png";
import blog from "./assets/blog.png";
import market from "./assets/f-market.png";
const ProjectCardData = [
  {
    id: "p-0",
    imgsrc: market,
    title: "Online Grocery",
    text: "This is very powerful full-stack online-shopping app built taking advantage of NextJs, tailwind.css and mongodb database. The project is still ongoing and I am working on the Paypal payment system feature now. Most importantly, all data coming from mongodb are pregennerated behind the scenes with the help of `getSeverSideProps(nextjs function)`. This SPA is completely responsive and optimized. Another interesting feature of the app is the translation(powered with Google-translate)",
    view: "https://next-e-commerce-app-one.vercel.app/",
  },
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
