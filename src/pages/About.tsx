import { useTranslation } from "react-i18next";
function About() {
  const { t } = useTranslation();
  return (
    <section className="w-full flex justify-around items-center  px-20  bg-bg-light ">
      <div className="bg-bg-dark rounded-lg flex gap-114 p-10 w-full justify-around items-center">
        <article className="max-w-80 max-h-auto my-10">
          <img className=" rounded-3xl" src="/tudor.jpg" alt="Image of Tudor" />
        </article>
        <article className="flex flex-col max-w-[620px] pr-12 gap-10 items-start ">
          <h1 className="capitalise heading-m">My Journey</h1>
          <div className="text-m-regular flex flex-col gap-5 ">
            <p>
              After a rewarding career in architecture, I transitioned into
              full-stack web development, blending my design and problem-solving
              skills with a passion for technology. My background in
              architecture allows me to approach challenges with creativity and
              structure, applying the same attention to detail and strategic
              thinking to digital solutions.
            </p>

            <p>
              By combining these strengths with technical expertise, I build
              scalable, user-friendly applications. My experience managing large
              projects has honed my ability to deliver results that are both
              practical and innovative, ensuring efficient solutions that meet
              user needs while exceeding expectations.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
