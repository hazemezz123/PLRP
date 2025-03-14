function Layout({ children }) {
  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "35px",
        }}
      >
        {children}
      </section>
    </>
  );
}
export default Layout;
