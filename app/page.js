import Category from "./Components/Category";
import EasyFast from "./Components/EasyFast";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Subscribe from "./Components/Subscribe";
import Testimonials from "./Components/Testimonials";
import TopSelling from "./Components/TopSelling";



export default function Home() {
  return (
  <>
  
  <Navbar/>
<Hero/>
<Category/>
<TopSelling/>
  <EasyFast/>
  <Testimonials/>
  <Subscribe/>
  <Footer/>
  </>
  );
}
