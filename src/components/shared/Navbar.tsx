import { NavLink } from "react-router";
import { useAuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuthContext();

  return (
    <>
      <nav className="py-5 flex justify-between">
        {/* ============ band ======== */}
        <h2 className="text-xl text-gray-700 font-semibold">UserApps</h2>
        <ul className="mx-auto flex items-center gap-5">
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-500" : "text-gray-600"
              } font-semibold text-lg`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-500" : "text-gray-600"
              } font-semibold text-lg`
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? "text-blue-500" : "text-gray-600"
              } font-semibold text-lg`
            }
            to="/contact"
          >
            Contact
          </NavLink>
          {user === null ? (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${
                  isActive ? "text-blue-500" : "text-gray-600"
                } font-semibold text-lg`
              }
            >
              Login
            </NavLink>
          ) : (
            <NavLink
              className="font-semibold text-gray-600 text-lg hover:text-red-500"
              to="/login"
              onClick={logout}
            >
              LogOut
            </NavLink>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
