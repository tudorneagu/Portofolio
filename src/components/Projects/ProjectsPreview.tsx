import Button from "../ui/Buttons/Button";
import ProjectCard from "./ProjectCard";
import ProjectData from "../../data/projects.json";

function ProjectsPreview() {
  return (
    <section className="flex flex-col gap-14 items-center  py-10 px-20  bg-bg-light  ">
      <article className="flex gap-4 ">
        {ProjectData.map((project) => (
          <ProjectCard
            key={project.id}
            date={project.date}
            title={project.title}
            description={project.description}
            images={project.images}
          />
        ))}
      </article>
      <Button content="See my work" />
    </section>
  );
}

export default ProjectsPreview;
