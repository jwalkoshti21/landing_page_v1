import Footer from "./sections/footer";
import Header from "./sections/header";
import SectionOne from "./sections/section-one";
import SectionThree from "./sections/section-three";
import SectionTwo from "./sections/section-two";

function App() {
  return (
    <div className="main-wrapper bg-neutral-0">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}

export default App;
