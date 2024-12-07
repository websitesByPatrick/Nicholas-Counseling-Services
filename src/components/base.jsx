import Header from "./header/header";
import Navbar from "./navbar/navbar";
import Contents from "./contents/contents";
import Footer from "./footer/footer";

const Base = () => {
  return (
    <div className="bg-slate-100 w-full flex flex-col h-full  py-2">
      <Header />

      {/* <Navbar /> */}

      <Contents />

      <Footer />
    </div>
  );
};

export default Base;
