const QuickMenu = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-semibold">Quick menu</h1>
      <div className="flex flex-col gap-3">
        <a href="/">Home</a>
        <a href="/#services">Services</a>
        <a href="/#about-us">About Us</a>
        <a href="/#testimonials">Testimonial</a>
        <a href="/#FAQ">FAQs</a>
      </div>
    </div>
  );
};

export default QuickMenu;
