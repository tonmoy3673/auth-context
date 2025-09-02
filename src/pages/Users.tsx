import { useEffect, useState } from "react";
import User from "./User";

// =========== UserAddress =====//
interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

// =========== UserCompany =======//
interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

// ====== UserDataType ======//
export interface UserDataType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
}

const Users = () => {
  const [users, setUsers] = useState<UserDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // ========= getUsers =====//
    const getUsers = async (): Promise<void> => {
      setLoading(true);

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network Error");
        } else {
          const data: UserDataType[] = await response.json();
          setUsers(data);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(`Failed to Fetch Data ${err.message}`);
          throw new Error(`Failed to Fetch Data ${err.stack}`);
        } else {
          console.error(`Unknown Error Found ${err}`);
          throw new Error(`Unknown Error Found!`);
        }
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);
  console.log("Users", users);
  return  (
    <div>
    {loading ? (
      <p className="text-center text-amber-500 text-2xl py-2 font-semibold">
        Loading ...
      </p>
    ) : (
        users && users.length>0? (
            <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center bg-amber-300">{users.map((user)=> <User key={user.id} user={user}/>)}</div>
        ): (<p>No User Data Found!</p>)
         )}
  </div>
  )
};

export default Users;
