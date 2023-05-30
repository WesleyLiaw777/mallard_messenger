import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";

export default function SignupModal() {
  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="bg-white text-black w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
        onClick={() => dispatch(openSignupModal())}
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignupModal())}
        className="flex justify-center items-center"
      >
        <div className="w-[90%] h-[600px] border border-gray-700 rounded-lg bg-black text-white md:w-[560px] md:h-[600px] flex justify-center">
          <div className="w-[90%] mt-8 flex flex-col">
            <button className="bg-white text-black w-full font-bold text-lg p-2 rounded-md">
              Sign In as Guest
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>
            <h1 className="mt-4 font-bold text-4xl">Create your Account</h1>
            <input
              placeholder="Full Name"
              className="h-10 rounded-md mt-8 bg-transparent border border-gray-700 p-6"
              type="text"
            />
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
              Create account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
