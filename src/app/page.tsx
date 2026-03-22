import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingPhone from "@/components/FloatingPhone";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Team />
        <Reviews />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingPhone />
      <ScrollToTop />
    </>
  );
}
