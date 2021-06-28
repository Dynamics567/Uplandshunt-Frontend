const SectionWrapper = ({ children, className }) => {
  return (
    <section className={`container m-auto w-11/12 mt-8  ${className}`}>
      {children}
    </section>
  );
};

export { SectionWrapper };
