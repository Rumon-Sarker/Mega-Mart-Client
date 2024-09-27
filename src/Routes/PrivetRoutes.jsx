import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoadingSpainer from "../components/LoadingSpainer";


const PrivetRoutes = ({ children }) => {
    const { user, isLoading } = useSelector((state) => state.user);

    console.log("loading test", isLoading, user?.email);
    if (isLoading) {
        return (
            <LoadingSpainer />
        )
    }

    if (user?.email) {
        return children
    }
    return <Navigate to={"/signin"} />
};

export default PrivetRoutes;