import { NavLink, Outlet } from 'react-router-dom';

export default function ProfilesPage(){
    const profiles = [1,2,3,4,5];

    return(
        <div className='flex gap-2'>
                <div className='flex flex-col gap-2'>
                    {profiles.map((profile) => (
                        <NavLink key={profile} to={`/profiles/${profile}`}
                        className={({isActive}) => {
                            return isActive ? "bg-primary-700 text-white" : ""
                        }}>
                            Profile {profile}
                        </NavLink>
                    ))}
                </div>
            <Outlet />
        </div>
    )
}