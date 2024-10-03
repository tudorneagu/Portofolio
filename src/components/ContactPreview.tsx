import { useTranslation } from "react-i18next";
import Button from "./ui/Buttons/Button";
import phoneNumberFormat from "./utils/PhoneNumber.ts";
import { NavLink } from "react-router-dom";
function ContactPreview() {
  const { t } = useTranslation();
  return (
    <section className=" items-center flex flex-col gap-5 justify-center  bg-bg-dark px-20 py-10">
      <h1 className="heading-m"> {t("hero_contact_title")}</h1>
      <NavLink to={`/contact`}>
        <Button content={t("hero_contact_button")} />
      </NavLink>
      <p>
        {t("hero_contact_phone")} {phoneNumberFormat("660388641")}
      </p>
    </section>
  );
}

export default ContactPreview;
