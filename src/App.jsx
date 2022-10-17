//Init
import React from "react";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Files
import Index from "./routes/index";
import "./css/index.css";

//Components
function App() {
  return (
    <div className="App">
      {/* toastify Container for Notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        transition={Flip}
      />

      {/* Routes */}
      <Index />
    </div>
  );
}
//Export
export default App;
