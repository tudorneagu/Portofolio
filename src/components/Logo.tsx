function Logo({ textSize = "text-l-bold" }) {
  return (
    <h1 className={`drop-shadow-3xl ${textSize} lg:heading-s`}>
      {"< Tudor Neagu />"}
    </h1>
  );
}

export default Logo;
