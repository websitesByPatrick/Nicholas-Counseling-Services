
import Header from "./components/header/header";
import Contents from "./components/contents/contents";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="bg-slate-900 w-full flex flex-col h-full items-center">
      <Header />

      <Contents />

      <Footer />
    </div>
  );
}

export default App;
