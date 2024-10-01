import Button from "./ui/Buttons/Button";
import phoneNumberFormat from "./utils/PhoneNumber.ts";
import { NavLink } from "react-router-dom";
function ContactPreview() {
  return (
    <section className=" items-center flex flex-col gap-5 justify-center  bg-bg-dark px-20 py-10">
      <h1 className="heading-m"> Let's Work Together !</h1>
      <NavLink to={`/contact`}>
        <Button content="Send me a Message" />
      </NavLink>
      <p> Phone: {phoneNumberFormat("660388641")}</p>
    </section>
  );
}

export default ContactPreview;
