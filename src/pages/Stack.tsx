import { useTranslation } from "react-i18next";

function Stack() {
  const { t } = useTranslation();

  return (
    <div className="text-l-bold items-center w-full justify-center flex">
      {" "}
      {t("under_construction")}
    </div>
  );
}

export default Stack;
