import Button from "../ui/Buttons/Button";
import ProjectCard from "./ProjectCard";
import ProjectData from "../../data/projects.json";
import { NavLink } from "react-router-dom";

function ProjectsPreview() {
  return (
    <section className="flex flex-col gap-14 items-center py-10 px-10 lg:px-20 bg-bg-light">
      <article className=" xl:flex xl:flex-row  flex-col md:grid md:grid-cols-2 justify-around gap-6">
        {ProjectData.slice(0, 4).map((project) => (
          <ProjectCard
            key={project.id}
            date={project.date}
            title={project.title}
            description={project.description}
            images={project.images}
            link={project.link}
            stack={project.stack}
          />
        ))}
      </article>

      <NavLink to={"/projects"}>
        <Button content="See my work" />
      </NavLink>
    </section>
  );
}

export default ProjectsPreview;
