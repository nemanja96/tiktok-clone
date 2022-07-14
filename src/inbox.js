import Nav from './components/Nav'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

function Inbox() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
        <div className="flex flex-col w-full h-screen max-w-sm max-h-[800px] bg-white">
            <div className="flex justify-center p-4 border-b border-gray-200 border-solid">
                <h3 className="font-semibold">Inbox</h3>
            </div>
            <div className="flex flex-col justify-center h-full">
                <div className="px-6 flex flex-col items-center">
                    <ChatBubbleOutlineIcon sx={{ width: 90, height: 90 }} className="text-gray-400" />
                    <p className="text-center text-sm text-gray-500 mt-2">Messages and notifications will appear here</p>
                    <button className="bg-[#FE2C55] py-2 mt-6 w-full max-w-[200px] text-white font-semibold rounded-sm">Sign up</button>
                </div>
            </div>
            <Nav />
        </div>
    </div>
  );
}

export default Inbox;