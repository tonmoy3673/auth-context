import type { UserDataType } from "./Users";

interface UserProps {
  user: UserDataType;
}

const User = ({ user }: UserProps) => {
  console.log(user);
  return (
    <div className="border rounded-lg p-4 shadow bg-white">
      <p>ID : {user?.id}</p>
      <p>Name : {user?.name}</p>
      <p>Email : {user?.email}</p>
      <div className="mt-3 text-center">
        <button className="text-sm bg-blue-400 text-white px-3 py-1 rounded-md cursor-pointer hover:-translate-y-1 hover:bg-amber-500 transition-all hover:scale-y-100 hover:scale-x-110 duration-150">
          Details
        </button>
      </div>
    </div>
  );
};

export default User;
