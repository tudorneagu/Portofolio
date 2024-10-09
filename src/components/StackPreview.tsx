import { useTranslation } from "react-i18next";
import Button from "./ui/Buttons/Button";
import { useNavigate } from "react-router-dom";
function Stack() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("/stack");
  };
  return (
    <section className="flex justify-between bg-bg-dark px-10 lg:px-20 py-6 items-center ">
      <article className="flex flex-col  gap-4 items-start max-w-lg">
        <h1 className="capitalise heading-m">{t("stack_title")}</h1>
        <p>{t("stack_description")}</p>
        <Button content={t("stack_button")} onClick={handleNav} />
      </article>
      <article className="hidden lg:grid grid-rows-2 grid-cols-4 my-10 place-items-center pr-[80px]">
        <img
          className="  p-5  bg-bg-light drop-shadow-xl"
          src="icons/javascript-line.svg"
        />
        <div className=" flex flex-col gap-1 py-5 w-25 h-25 px-5  text-center">
          <p className="text-l-bold">2</p>
          <p>
            Frontend <br />
            Frameworks
          </p>
        </div>
        <img
          className="  p-5  bg-bg-light drop-shadow-xl"
          src="icons/database-2-line.svg"
        />
        <div className=" flex flex-col gap-1 py-5 w-25 h-25 px-5  text-center">
          <p className="text-l-bold">{t("stack_methods_1")} </p>
          <p>{t("stack_methods_2")}</p>
        </div>
        <div className=" flex flex-col gap-1 py-5 w-25 h-25 px-5  text-center">
          <p className="text-l-bold">Node.JS</p>
        </div>
        <img
          className="  p-5 bg-bg-light drop-shadow-xl"
          src="icons/reactjs-fill.svg"
        />
        <div className=" flex flex-col gap-1 py-5 w-25 h-25 px-5  text-center">
          <p className="text-l-bold">SQL</p>
          <p className="text-l-bold">&</p>
          <p className="text-l-bold">noSQL</p>
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
