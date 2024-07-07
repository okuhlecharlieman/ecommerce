import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage } from "./Routes.js";

// import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginPage />}></Route>
        <Route path="/Signup" element={<SignupPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
