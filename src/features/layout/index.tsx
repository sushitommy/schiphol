import Header from "./Header";

function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
