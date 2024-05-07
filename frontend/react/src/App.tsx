import "./App.css";
import Header from "./components/Header";
import Products from "./pages/Products";


const App = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Products/>
      </div>
    </>
  );
};

export default App;
