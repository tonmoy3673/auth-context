import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import { AuthProvider } from "./context/AuthContext";
import UserDetails from "./pages/UserDetails";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="user-details" element={<UserDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
