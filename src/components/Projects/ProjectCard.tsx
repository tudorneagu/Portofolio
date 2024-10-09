import Button from "../ui/Buttons/Button";
import Caroussel from "../ui/Caroussel";
import type { Project } from "../../@types/index.types";

function ProjectCard({ date, title, description, link, images }: Project) {
  const handleClick = () => {
    if (link && typeof link === "string") {
      const validLink = link.startsWith("http") ? link : `https://${link}`;
      window.open(validLink, "_blank");
    } else {
      console.error("Invalid link provided:", link);
    }
  };

  return (
    <article className="flex flex-col justify-between  bg-bg-dark h-[450px]  rounded-lg overflow-clip w-full">
      <div className="  flex  flex-col gap-3 pt-5 px-5 ">
        <div className="  flex  flex-col gap-2 ">
          <Caroussel images={images} title={title} />
          <div className="flex justify-between mt-4">
            <h3 className="text-l-bold">{title}</h3>
            <p className="text-m-bold text-medium">{date}</p>
          </div>
        </div>
        <p className="text-m-regular  text-medium">{description}</p>
      </div>
      <div className=" flex justify-end">
        <Button
          content="View Live Demo"
          rounded="rounded-tl-lg"
          border=" border-2 border-b-0 border-r-0"
          onClick={handleClick}
        />
      </div>
    </article>
  );
}

export default ProjectCard;
