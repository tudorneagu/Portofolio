import { useTranslation } from "react-i18next";
function About() {
  const { t } = useTranslation();
  return (
    <section className="w-full flex  justify-around items-center  py-5 px-10 lg:px-20  bg-bg-light ">
      <div className="bg-bg-dark rounded-lg flex flex-col lg:flex-rowgap-114 p-10 w-full justify-around items-center">
        <article className="max-w-80 max-h-auto my-5 lg:my-10">
          <img className=" rounded-3xl" src="/tudor.jpg" alt="Image of Tudor" />
        </article>
        <article className="flex flex-col max-w-[620px] lg:pr-12 gap-5 lg:gap-10 items-start ">
          <h1 className="capitalise heading-m">{t("about_title")}</h1>
          <div className="text-m-regular flex flex-col gap-5 ">
            <p>{t("about_description_1")}</p>

            <p>{t("about_description_2")}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
