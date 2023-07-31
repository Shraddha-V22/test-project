import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <Header />
      <div className="grid grid-cols-[200px_1fr]">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
