
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {
    return (
        <button
            type="button"
            className="w-full flex items-center justify-center mx-auto px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none"
        >
            <FcGoogle className="text-xl mr-2" />  Sign in with Google
        </button>
    );
};

export default SocialLogin;