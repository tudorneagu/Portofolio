import Button from "../ui/Buttons/Button";
import ProjectCard from "./ProjectCard";
import ProjectData from "../../data/projects.json";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
function ProjectsPreview() {
  const { t } = useTranslation();
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
      <p> {t("under_construction_1")}</p>

      <NavLink to={"/projects"}>
        <Button content="See my work" />
      </NavLink>
    </section>
  );
}

export default ProjectsPreview;
