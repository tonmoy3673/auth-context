import type { UserDataType } from "./Users";

interface UserProps {
  user: UserDataType;
}

const User = ({ user }: UserProps) => {
  console.log(user);
  return (
    <div className="border rounded-lg p-4 shadow bg-white">
      <div className="">
        <p>ID : {user?.id}</p>
        <p>Name : {user?.name}</p>
        <p>Email : {user?.email}</p>
      </div>
    </div>
  );
};

export default User;
