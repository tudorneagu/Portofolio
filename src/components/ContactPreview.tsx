import Button from "./ui/Buttons/Button";
import phoneNumberFormat from "./utils/PhoneNumber.ts";
function ContactPreview() {
  return (
    <section className=" items-center flex flex-col gap-5 justify-center  bg-bg-dark px-20 py-10">
      <h1 className="heading-m"> Let's Work Together !</h1>
      <Button content="Send me a Message" />
      <p> Phone: {phoneNumberFormat("660388641")}</p>
    </section>
  );
}

export default ContactPreview;
