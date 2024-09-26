import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const PrivetRoutes = ({ children }) => {
    const { user, isLoading } = useSelector((state) => state.user);

    console.log("loading", isLoading);
    // if (user === null) {
    //     return <p>Loading ......</p>
    // }

    if (user) {
        return children
    }
    return <Navigate to={"/signin"} />
};

export default PrivetRoutes;