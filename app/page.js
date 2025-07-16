import AboutUs from "@/components/aboutus/aboutus";
import Connect from "@/components/connect/connect";
import Footer from "@/components/footer/footer";
import Landing from "@/components/landing/landing";

export default function Home() {
  return (
    <div>
      <Landing />
      <AboutUs />
      <Connect />
      <Footer />
    </div>
  );
}
