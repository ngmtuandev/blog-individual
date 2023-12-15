import Header from "../components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header></Header>
      <div className="w-screen h-screen bg-body">{children}H</div>
    </div>
  );
}
