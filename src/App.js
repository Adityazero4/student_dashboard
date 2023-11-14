import "./App.css";
import { useState } from "react";
import MenuAppBar from "./components/MenuAppBar";
import Sidebar from "./components/Sidebar";
import jsondata from ".//data.json";
import StudentProfile from "./components/StudentProfile";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="App">
      <MenuAppBar
        onMenuClick={handleSidebarToggle}
        isSidebarOpen={isSidebarOpen}
      />
      <Sidebar open={isSidebarOpen} onClose={handleSidebarToggle} />
      {/* <MainContent /> */}
      <StudentProfile data={jsondata} />
    </div>
  );
}

export default App;
