import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        title="Contact Us"
        heroImg={ContactImg}
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
