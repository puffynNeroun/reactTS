import {FC} from "react";
import {NavLink} from "react-router-dom";



const MyNavLink: FC = () => {
    return (
        <div>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/card">Card</NavLink>
        </div>
    );
};

export default MyNavLink;