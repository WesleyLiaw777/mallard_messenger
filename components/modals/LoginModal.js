import { closeLoginModal, openLoginModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";

export default function LoginModal() {
  const isOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="bg-transparent border border-white text-white w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
        onClick={() => dispatch(openLoginModal())}
      >
        Log In
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLoginModal())}
        className="flex justify-center items-center"
      >
        <div className="w-[90%] h-[600px] border border-gray-700 rounded-lg bg-black text-white md:w-[560px] md:h-[600px] flex justify-center">
          <div className="w-[90%] mt-8 flex flex-col">
            <h1 className="mt-4 font-bold text-4xl">Sign in to your account</h1>
            
            <input
              placeholder="Email"
              className="h-10 rounded-md mt-8  bg-transparent border border-gray-700 p-6"
              type="email"
            />
            <input
              placeholder="Password"
              className="h-10 rounded-md mt-8  bg-transparent border border-gray-700 p-6"
              type="password"
            />

            <button className="bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md">
              Sign in
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>
            <button className="bg-white text-black w-full font-bold text-lg p-2 rounded-md mt-4">
              Sign In as Guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
