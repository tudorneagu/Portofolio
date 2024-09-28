import Button from "./utils/Buttons/Button";

function ContactPreview() {
  return (
    <section className=" items-center flex flex-col gap-5 justify-center  bg-bg-dark px-20 py-10">
      <h1> Let's Work Together !</h1>
      <Button content="Send me a Message" />
      <p> Phone: +33 6 60 38 86 41</p>
    </section>
  );
}

export default ContactPreview;
