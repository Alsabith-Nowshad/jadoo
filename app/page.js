import Category from "./Components/Category";
import EasyFast from "./Components/EasyFast";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import TopSelling from "./Components/TopSelling";



export default function Home() {
  return (
  <>
  
  <Navbar/>
<Hero/>
<Category/>
<TopSelling/>
  <EasyFast/>
  </>
  );
}
