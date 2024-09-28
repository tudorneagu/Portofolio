import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import "./index.css";
function App() {
  return (
    <div className=" flex justify-around w-screen">
      <div className="w-[1500px]  ">
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
