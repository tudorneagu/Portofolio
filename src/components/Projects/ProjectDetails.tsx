import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Project } from "../../@types/index.types";
import Caroussel from "../ui/Caroussel";
import ProjectData from "../../data/projects.json";

function ProjectDetails() {
  const { title } = useParams<{ title: string }>();
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    const foundProject = ProjectData.find((p) => p.title === title);
    if (foundProject) {
      setProject(foundProject);
    }
  }, [title]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <Caroussel images={project.images} title={project.title} />
    </div>
  );
}

export default ProjectDetails;
