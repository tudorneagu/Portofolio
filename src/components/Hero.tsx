import { useTranslation } from "react-i18next";
import Button from "./ui/Buttons/Button";

function Hero() {
  const { t } = useTranslation();
  function handleDownload() {
    const link = document.createElement("a");
    link.href = "/CV - Tudor Neagu.pdf";
    link.download = "Tudor_Neagu_Resume.pdf";
    link.click();
  }
  return (
    <section className="flex flex-col lg:flex-row justify-between items-start lg:items-center  gap-10 px-10 lg:px-20  pb-10 lg:pb-0 bg-bg-light ">
      <article className="max-w-80 max-h-auto my-10">
        <img className=" rounded-3xl" src="/tudor.jpg" alt="Image of Tudor" />
      </article>
      <article className="flex flex-col max-w-[620px] lg:pr-12 gap-4 items-start">
        <h1 className="capitalise heading-m">
          {t("hero_welcome_message")}
          <br /> {t("hero_position")}
        </h1>
        <p>{t("hero_description")}</p>
        <Button content={t("hero_resume")} onClick={handleDownload} />
      </article>
    </section>
  );
}

export default Hero;
