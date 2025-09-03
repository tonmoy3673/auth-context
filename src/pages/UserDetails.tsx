import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

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

const UserDetails = () => {
  const [userData, setUserData] = useState<UserDataType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  // ====== getUserDetails ======//
  useEffect(() => {
    if (!id) return;
    const fetchUserData = async (id: number): Promise<void> => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!response) {
          throw new Error("No Response Found!");
        }
        const data = await response.json();
        console.log("data", data);
        setUserData(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(`Failed to Fetch User Data ${err.message}`);
          throw new Error(`Failed to Fetch User Data ${err.name}`);
        } else {
          console.error(`Unknown Error Found ${err}`);
          throw new Error(`Unknown Error Found`);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUserData(Number(id));
  }, [id]);
  console.log("userData", userData);
  return (
    <>
      {loading ? (
        <p className="text-center text-amber-500 text-2xl py-2 font-semibold">
          Loading ...
        </p>
      ) : userData ? (
        <div className="flex justify-center items-center ">
          <div className=" bg-amber-100 p-10 rounded-md">
            <p>ID : {userData?.id.toString()}</p>
            <p>Name : {userData?.name}</p>
            <p>Email : {userData?.email}</p>
            <p>
              Address : {userData?.address?.street}. {userData?.address?.city}
            </p>
            <p>Phone : {userData?.phone}</p>
            <p>Company : {userData?.company?.name}</p>
            <p>Website : {userData?.website}</p>
            <div className="mt-3">
              <Link to="/">
                <button className="text-blue-500 px-2 py-1 cursor-pointe text-3xl">
                  {" "}
                  🔙
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>No Data Found</p>
      )}
    </>
  );
};

export default UserDetails;
