import "./App.css";
import Header from "./component/Header";
import User from "./component/User";

function App() {
 
  return (
    <div className="app bg-gray-50 dark:bg-gray-900 h-screen transition-all ">
      
        <Header />
        <User />
    </div>
  );
}

export default App;
