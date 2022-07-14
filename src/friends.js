import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import facebook from './assets/facebook.png';
import google from './assets/google.png';
import twitter from './assets/twitter.png';

function Friends() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
        <div className="flex flex-col w-full h-screen max-w-sm max-h-[800px] bg-white">
            <div className="flex justify-between p-4">
                <Link to="/"><CloseIcon sx={{ width: 25, height: 25 }} className="text-gray-500"  /></Link>
                <HelpOutlineIcon sx={{ width: 25, height: 25 }} className="text-gray-500" />
            </div>
            <div className="mt-16 flex flex-col justify-between h-full">
                <div className="px-6">
                    <h3 className="text-black text-xl text-center font-black">Sign up for TikTok</h3>
                    <p className="text-center text-sm text-gray-500 mt-2">Create a profile, follow other accounts, make your own videos, and more.</p>
                    <div className="flex flex-col gap-4 mt-6">
                        <div className="flex border border-gray-300 border-solid p-3 items-center">
                            <PersonOutlineIcon sx={{ width: 25, height: 25 }} className="text-black" />
                            <h4 className="flex-grow text-center font-semibold text-sm">Use phone or email</h4>
                        </div>
                        <div className="flex border border-gray-300 border-solid p-3 items-center">
                            <img src={facebook} width="25px" height="25px" className="text-black" />
                            <h4 className="flex-grow text-center font-semibold text-sm">Continue with Facebook</h4>
                        </div>
                        <div className="flex border border-gray-300 border-solid p-3 items-center">
                            <img src={google} width="25px" height="25px" className="text-black" />
                            <h4 className="flex-grow text-center font-semibold text-sm">Continue with Google</h4>
                        </div>
                        <div className="flex border border-gray-300 border-solid p-3 items-center">
                            <img src={twitter} width="25px" height="25px" className="text-black" />
                            <h4 className="flex-grow text-center font-semibold text-sm">Continue with Twitter</h4>
                        </div>
                    </div>
                </div>
                <div>
                <p className="px-6 border-b border-gray-300 border-solid pb-4 text-xs text-gray-500 text-center mt-6">By continuing, you agree to our <strong className="text-black">Terms of Service</strong> and acknowledge that you have read our <strong className="text-black">Privacy Policy</strong> to learn how we collect, use, and share your data and our <strong className="text-black">Cookies Policy</strong> to learn how we use cookies.</p>
                <p className="text-gray-500 text-center py-4 bg-gray-100">Already have an account? <span className="text-red-500 font-bold">Log in</span></p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Friends;