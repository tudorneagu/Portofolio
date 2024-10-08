import Logo from "../Logo";

import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <footer className=" flex flex-col py-5 items-center bg-bg-light">
      <Logo textSize="text-m-bold" />
      <p className="text-s-regular ">{t("footer_copyright")}</p>
    </footer>
  );
}

export default Footer;
