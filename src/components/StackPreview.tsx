import { useTranslation } from "react-i18next";
import Button from "./ui/Buttons/Button";
function Stack() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col lg:flex-row justify-between bg-bg-dark px-10 lg:px-20 py-6 items-center ">
      <article className="flex flex-col  gap-4 items-start max-w-lg">
        <h1 className="capitalise heading-m">{t("stack_title")}</h1>
        <p>{t("stack_description")}</p>
        <Button content={t("stack_button")} />
      </article>
      <article className="hidden lg:grid lg:grid-rows-2 lg:grid-cols-4 grid-cols-2 grid-rows-4 my-10 place-items-center lg:pr-[80px]">
        <img
          className="  p-5  bg-bg-light drop-shadow-xl w-40 h-40 lg:w-32 lg:h-32"
          src="icons/javascript-line.svg"
        />
        <div className=" flex flex-col gap-1 py-5  lg:w-25 lg:h-25 px-5 text-center lg:row-start-2">
          <p className="text-l-bold">Node.JS</p>
        </div>
        <div className=" flex flex-col gap-1 py-5 lg:w-25 lg:h-25 px-5 text-center">
          <p className="text-l-bold">2</p>
          <p>
            Frontend <br />
            Frameworks
          </p>
        </div>
        <img
          className="  p-5 bg-bg-light drop-shadow-xl lg:row-start-2"
          src="icons/reactjs-fill.svg"
        />
        <img
          className="  p-5  bg-bg-light drop-shadow-xl"
          src="icons/database-2-line.svg"
        />
        <div className=" flex flex-col gap-1 py-5 lg:w-25 lg:h-25 px-5  text-center lg:row-start-2">
          <p className="text-l-bold">SQL</p>
          <p className="text-l-bold">&</p>
          <p className="text-l-bold">noSQL</p>
        </div>
        <div className=" flex flex-col gap-1 py-5 lg:w-25 lg:h-25 px-5  text-center">
          <p className="text-l-bold">{t("stack_methods_1")} </p>
          <p>{t("stack_methods_2")}</p>
        </div>
        <img
          className=" p-5  rotate-180 bg-bg-light drop-shadow-xl"
          src="icons/route-line.svg"
        />{" "}
      </article>
    </section>
  );
}

export default Stack;
