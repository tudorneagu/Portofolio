import Button from "../utils/Buttons/Button";
function ProjectsPreview() {
  return (
    <section className="flex justify-between items-center  px-20  bg-bg-light ">
      <article className="max-w-80 max-h-auto my-10">
        <img className=" rounded-3xl" src="/tudor.jpg" alt="Image of Tudor" />
      </article>
      <article className="flex flex-col max-w-2xl gap-4 items-start">
        <h1 className="capitalise heading-m">
          Hello, I'm Tudor,
          <br /> Full Stack Developper
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sodales nam egestas id lectus
          dictum. Consectetur sit augue quam velit suspendisse.{" "}
        </p>
        <Button content="Download Resume" />
      </article>
    </section>
  );
}

export default ProjectsPreview;
