import Header from "../components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header></Header>
      <div className="w-full overflow-hidden h-full bg-body">{children}</div>
    </div>
  );
}
