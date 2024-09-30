import Button from "../ui/Buttons/Button";
import type { Project } from "../../@types/index.types";
function ProjectCard({ date, title, description }: Project) {
  return (
    <article className="flex flex-col justify-between bg-white h-[450px] rounded-lg overflow-clip">
      <div className="  flex  flex-col gap-3 pt-5 px-5 ">
        <div className="  flex  flex-col gap-2 ">
          <img
            className="border-solid border-2 border-black mb-5"
            src="/about.png"
          />
          <div className="flex justify-between">
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
        />
      </div>
    </article>
  );
}

export default ProjectCard;
