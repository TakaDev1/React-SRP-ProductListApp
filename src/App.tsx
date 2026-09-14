import "./App.css";
import DispayProducts from "./components/DispayProducts";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-800 text-white flex flex-col justify-center items-center">
        <h1>React-SRP-ProductListApp</h1>
        <DispayProducts />
      </div>
    </>
  );
}

export default App;
