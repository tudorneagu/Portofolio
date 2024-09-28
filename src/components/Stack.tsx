import Button from "./utils/Buttons/Button";
function Stack() {
  return (
    <section className="flex justify-between  bg-bg-dark px-20 items-center ">
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
      <article className="w-96 h-80 max-h-auto bg-slate-500 my-10"></article>
    </section>
  );
}

export default Stack;
