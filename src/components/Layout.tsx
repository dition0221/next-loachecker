import Nav from "@/components/Nav";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Nav />
      <main className="max-w-5xl m-auto p-2">{children}</main>
    </>
  );
}
