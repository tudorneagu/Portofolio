import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { Project } from "../../@types/index.types";

import Caroussel from "../ui/Caroussel";
import ProjectData from "../../data/projects.json";
import Button from "../ui/Buttons/Button";

function ProjectDetails() {
  const { title } = useParams<{ title: string }>();
  const [project, setProject] = useState<Project>();

  const { t } = useTranslation();

  useEffect(() => {
    const foundProject = ProjectData.find((p) => p.title === title);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [title]);

  if (!project) {
    return <div>Project not found</div>;
  } else console.log(project);

  const handleClick = () => {
    if (project.link && typeof project.link === "string") {
      const validLink = project.link.startsWith("http")
        ? project.link
        : `https://${project.link}`;
      window.open(validLink, "_blank");
    } else {
      console.error("Invalid link provided:", project.link);
    }
  };

  return (
    <section className="bg-bg-light flex flex-col md:flex-row justify-between gap-10 md:gap-24 px-10 lg:px-20 py-5 lg:py-10 w-full items-center">
      <article className="w-full">
        <Caroussel
          images={project.images}
          title={project.title}
          height="h-[400px]"
        />
      </article>

      <div className="w-full lg:max-w-[620px] flex flex-col gap-3 text-m-regular items-center md:items-start">
        <article>
          <div>
            <h1 className="heading-m ">{project.title}</h1>
            <p className="bg-main text-bg-light text-s-regular w-fit py-1 px-2 rounded-lg">
              {project["date"] ? t(project["date"]) : ""}
            </p>
          </div>
          <div>
            <ul className="flex flex-wrap gap-1 mt-10 ">
              {project["stack"]?.map((el, index) => (
                <li key={index} className="text-m-bold">
                  / {el}{" "}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-medium ">
              {project["full-description"]
                ? t(`${project["full-description"]}`)
                : ""}
            </p>
            {project.github ? (
              <div className="flex gap-3 pt-5">
                {project.github.front ? (
                  <div className="flex gap-3">
                    <p className="font-bold">Github Repo:</p>
                    <a
                      className="hover:drop-shadow-lg underline"
                      href={project.github?.front}>
                      Frontend App
                    </a>
                  </div>
                ) : (
                  ""
                )}
                {project.github.back ? (
                  <div className="flex gap-3">
                    <p> / </p>
                    <a
                      className="hover:drop-shadow-lg underline"
                      href={project.github?.back}>
                      Backend Server
                    </a>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
            {project["notes"] ? (
              <div className="my-3">
                <p className="text-m-bold mb-1">Notes:</p>
                <p className="text-medium">{t(`${project.notes}`)}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </article>
        <div className="">
          <Button content={t("projects_preview_demo")} onClick={handleClick} />
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
