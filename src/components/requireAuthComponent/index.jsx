import useUser from "../../hooks/useUser";
import Redirecting from "../redirectComponent";
import { Outlet } from "react-router-dom";

function RequireAuth ({children}) {
    const { isAuthenticated } = useUser();

    return isAuthenticated ? <Outlet/> : <Redirecting/>;

}

export default RequireAuth;