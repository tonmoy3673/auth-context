
import type { UserDataType } from './Users';

interface UserProps{
    user: UserDataType
}

const User = ({user}:UserProps) => {
    console.log(user);
    return (
        <div className='grid grid-cols-[minmax-auto,400px]'>
           user
        </div>
    );
};

export default User;