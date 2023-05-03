import Nav from "../navbar/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Layout;
