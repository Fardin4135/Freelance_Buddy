import Header from "./components/Header";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Instructors from "./components/Instructors";
import Founder from "./components/Founder";
import Register from "./components/Register";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <Courses />
        <Instructors />
        <Founder />
        <Register />
        <Footer />
      </main>
    </>
  );
}
