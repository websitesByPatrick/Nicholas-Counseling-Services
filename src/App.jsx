
import Header from "./components/header/header";
import Contents from "./components/contents/contents";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar"
function App() {
  return (
    <div className="bg-black w-full flex flex-col h-full items-center">
      <Header />
      <Navbar />
      <Contents />

      <Footer />
    </div>
  );
}

export default App;
