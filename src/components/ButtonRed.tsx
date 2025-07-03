const ButtonRed = ({ text }: any) => {
  return (
    <a
      href="/#appointment"
      className="rounded-full bg-themeSecondary px-5 py-3 text-sm font-semibold text-themeSurface hover:bg-themeAccent transition-colors 2xl:text-xl"
    >
      {text}
    </a>
  );
};

export default ButtonRed;
