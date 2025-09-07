import ReactDOM from "react-dom/client";

import "./index.css";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import { AuthProvider } from "./context/AuthContext";
import UserDetails from "./pages/UserDetails";
import PrivateRoute from "./layouts/PrivateRoute";
import { BrowserRouter, Route, Routes } from "react-router";

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

          {/* Protected routes inside PrivateRoute */}

          <Route
            path="user-details/:id"
            element={
              <PrivateRoute>
                <UserDetails />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
