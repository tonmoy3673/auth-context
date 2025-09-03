import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router";

const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, user } = useAuthContext();
  // ======= handleSubmit =======//
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    login({ userName, password });
    setUserName("");
    setPassword("");
  };
  console.log("UserAuth", user);
  return (
    <div>
      <div>
        <p className="text-gray-800 text-xl text-center py-3 mb-2">
          Login Here
        </p>
        {/* ========== login form ====== */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <div className="grid grid-cols-[auto_minmax(auto,300px)] justify-start gap-5">
            {/* =========== UserName ===== */}
            <label htmlFor="name">UserName : </label>
            <input
              className="border rounded-md p-[2px]"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              type="text"
              id="name"
              required
            />
            {/* ============ Password ==== */}
            <label htmlFor="name">Password : </label>
            <input
              className="border rounded-md p-[2px]"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              id="password"
              required
            />
          </div>
          <div className="mt-5 text-center">
            <Link to='/'>
            <button
              className="text-sm bg-blue-400 text-white px-8 py-[6px] rounded-md cursor-pointer hover:-translate-y-1 hover:bg-amber-500 transition-all hover:scale-y-100 hover:scale-x-110 duration-150"
              type="submit"
            >
              login
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
