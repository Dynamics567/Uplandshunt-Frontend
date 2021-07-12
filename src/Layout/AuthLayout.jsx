import Background from "../templates/Background";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="" style={{ flex: "1" }}>
        <Background />
      </div>
      <section className="mx-auto w-10/12 mt-16" style={{ flex: "1" }}>
        {children}
      </section>
    </div>
  );
};

export { AuthLayout };
