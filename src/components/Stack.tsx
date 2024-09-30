import Button from "./ui/Buttons/Button";
function Stack() {
  return (
    <section className="flex justify-between  bg-bg-dark px-20 py-6 items-center ">
      <article className="flex flex-col  gap-4 items-start max-w-lg">
        <h1 className="capitalise heading-m">
          Experienced Across Multiple Tools
        </h1>
        <p>
          Bringing creativity and technical profieciency to building responsive
          web applications and enhancing user experiences{" "}
        </p>
        <Button content="Knowledge and Skills" />
      </article>
      <article className="grid grid-rows-2 grid-cols-4 my-10 place-items-center pr-[80px]">
        <img
          className="  p-5  bg-bg-light drop-shadow-xl"
          src="/javascript-line.svg"
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
          src="/database-2-line.svg"
        />
        <div className=" flex flex-col gap-1 py-5 w-25 h-25 px-5  text-center">
          <p className="text-l-bold">Various </p>
          <p>Approaches</p>
        </div>
        <div className=" flex flex-col gap-1 py-5 w-25 h-25 px-5  text-center">
          <p className="text-l-bold">Node.JS</p>
        </div>
        <img
          className="  p-5 bg-bg-light drop-shadow-xl"
          src="/reactjs-fill.svg"
        />
        <div className=" flex flex-col gap-1 py-5 w-25 h-25 px-5  text-center">
          <p className="text-l-bold">SQL</p>
          <p className="text-l-bold">&</p>
          <p className="text-l-bold">noSQL</p>
        </div>
        <img
          className=" p-5  rotate-180 bg-bg-light drop-shadow-xl"
          src="/route-line.svg"
        />{" "}
      </article>
    </section>
  );
}

export default Stack;
