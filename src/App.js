import Header from "./componments/Header";
import SideList from "./componments/SideList";
import Image from "./componments/Image";
import Cursor from "./componments/Cursor";
function App() {
  return (
    <div className="App">
    <Cursor />
    <Header />
    <div className="main-content">
      <SideList />
      <Image />
    </div>
    

      
    </div>
  );
}

export default App;