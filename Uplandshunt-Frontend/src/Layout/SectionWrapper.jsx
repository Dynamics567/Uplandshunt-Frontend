const SectionWrapper = ({ children, className }) => {
  return (
    <section className={`container m-auto w-11/12 mt-4  ${className}`}>
      {children}
    </section>
  );
};

export { SectionWrapper };
