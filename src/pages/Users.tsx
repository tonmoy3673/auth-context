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
interface UserDataType {
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

  return <div></div>;
};

export default Users;
