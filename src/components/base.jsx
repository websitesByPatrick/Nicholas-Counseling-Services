import Header from "./header/header";
import Contents from "./contents/contents";
import Footer from "./footer/footer";

const Base = () => {
  return (
    <div className="bg-slate-100 w-full flex flex-col h-full items-center">
      <Header />

      <Contents />

      <Footer />
    </div>
  );
};

export default Base;
