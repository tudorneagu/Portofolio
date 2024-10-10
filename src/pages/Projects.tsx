import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ProjectData from "../data/projects.json";
import ProjectCard from "../components/Projects/ProjectCard";

function Projects() {
  const { t } = useTranslation();
  return (
    <section className="w-full flex flex-col md:flex-row  bg-bg-light px-10 lg:px-20 md:gap-32 text-m-regular md:items-start ">
      <article className="flex  pb-10 flex-col justify-between gap-10">
        <h1 className="heading-m pt-10 md:pt-52">{t(`projects.title`)}</h1>
        <p className="text-m-regular"> {t(`projects.catchPhrase`)}</p>
        <p className="italic"> {t("under_construction")}</p>
      </article>
      <article className="flex flex-col md:grid md:grid-cols-2  gap-5 mr-5  ">
        {ProjectData.map((project) => (
          <Link to={`/projects/${project.title} `}>
            <ProjectCard
              key={project.id}
              date={project.date}
              title={project.title}
              description={project.description}
              images={project.images}
              link={project.link}
              stack={project.stack}
            />
          </Link>
        ))}
      </article>
    </section>
  );
}

export default Projects;
