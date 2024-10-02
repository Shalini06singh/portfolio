import Choose from "./components/Choose";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Learners from "./components/Learners";
import Sections from "./components/Sections";
import Testimonial from "./components/Testimonial";
import Upcoming from "./components/Upcoming";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950/[0.96] antialiased bg-grid-white/[0.02]">
      <Sections />
      <Featured />
      <Choose />
      {/* <Testimonial /> */}
      {/* <Upcoming/> */}
      {/* <Learners/> */}
      <Footer/>
    </main>
  );
}
