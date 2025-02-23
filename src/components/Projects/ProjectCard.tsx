import Button from "../ui/Buttons/Button";
import Caroussel from "../ui/Caroussel";
import { useTranslation } from "react-i18next";
import type { Project } from "../../@types/index.types";
import { Link } from "react-router-dom";

function ProjectCard({
  date,
  title,
  description,
  link,
  images,
  stack,
}: Project) {
  const handleClick = () => {
    if (link && typeof link === "string") {
      const validLink = link.startsWith("http") ? link : `https://${link}`;
      window.open(validLink, "_blank");
    } else {
      console.error("Invalid link provided:", link);
    }
  };

  const { t } = useTranslation();

  return (
    <article className="flex flex-col justify-between  bg-bg-dark h-[550px]  rounded-lg overflow-clip w-full">
      <div className="  flex  flex-col  justify-between gap-3 pt-5 px-5 flex-grow ">
        <div>
          <div className="  flex  flex-col gap-2 ">
            <Caroussel images={images} title={title} />
            <div className="flex justify-between mt-4">
              <h2 className="text-l-bold">{title}</h2>
              <p className="text-s-bold text-medium">{t(`${date}`)}</p>
            </div>
          </div>
          <ul className=" flex flex-wrap pr-5 text-s-bold pt-2  ">
            {stack?.map((el, index) => (
              <li key={index}>/ {el} </li>
            ))}
          </ul>
        </div>
        <p className="text-m-regular h-[150px] text-medium">
          {t(`${description}`)}
        </p>
      </div>

      <div className=" flex  justify-between items-center">
        <div className="mb-5 ml-4 text-m-regular  text-medium hover:font-bold hover:text-black ">
          <Link to={`/projects/${title}`}>{t("projects_preview_more")}</Link>
        </div>

        <Button
          content={t("projects_preview_demo")}
          rounded="rounded-tl-lg"
          border=" border-2 border-b-0 border-r-0"
          onClick={handleClick}
        />
      </div>
    </article>
  );
}

export default ProjectCard;
