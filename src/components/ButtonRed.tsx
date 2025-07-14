const ButtonRed = ({ text }: any) => {
  return (
    <a
      href="/#appointment"
      className="rounded-full bg-themeSecondary px-5 py-3 text-sm font-semibold text-themeSurface transition-colors hover:bg-themeAccent 2xl:text-xl"
    >
      {text}
    </a>
  );
};

export default ButtonRed;
