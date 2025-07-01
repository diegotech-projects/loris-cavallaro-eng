const FormButton = ({ text }: any) => {
  return (
    <button
      type="submit"
      className="rounded-full bg-customBlue px-5 py-3 text-sm font-semibold text-whiteOne 2xl:text-xl"
    >
      {text}
    </button>
  );
};

export default FormButton;
