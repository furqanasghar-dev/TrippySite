import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/1.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

export default function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        title="Services"
        heroImg={ServiceImg}
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}
