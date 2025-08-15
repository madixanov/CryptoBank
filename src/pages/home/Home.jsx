import Header from "../../components/default-components/Header";
import Footer from "../../components/default-components/Footer";
import HomeMain from "./UI/HomeMain";
import "./home.css";
import Partners from "./UI/Partners";

export default function HomePage() {
  return (
    <>
      <Header />
      <HomeMain />
      <Partners />
      <Footer />
    </>
  )
}