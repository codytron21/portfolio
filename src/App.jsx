import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
