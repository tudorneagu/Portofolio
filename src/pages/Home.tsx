import ContactPreview from "../components/ContactPreview";
import Hero from "../components/Hero";
import ProjectsPreview from "../components/Projects/ProjectsPreview";
import Stack from "../components/Stack";
function Home() {
  return (
    <div className="flex flex-col  ">
      <div>
        <img />
      </div>
      <Hero />
      <div className="relative h-1 bg-transparent">
        <div className="absolute inset-0 backdrop-blur-md h-full bg-gradient-to-b from-bg-light to-bg-dark "></div>
      </div>
      <Stack />
      <div className="relative h-1 bg-transparent">
        <div className="absolute inset-0 backdrop-blur-md h-full bg-gradient-to-b from-bg-dark to-bg-light"></div>
      </div>
      <ProjectsPreview />
      <div className="relative h-1 bg-transparent">
        <div className="absolute inset-0 backdrop-blur-md h-full bg-gradient-to-b from-bg-light to-bg-dark "></div>
      </div>
      <ContactPreview />
      <div className="relative h-1 bg-transparent">
        <div className="absolute inset-0 backdrop-blur-md h-full bg-gradient-to-b from-bg-dark to-bg-light "></div>
      </div>
    </div>
  );
}

export default Home;
