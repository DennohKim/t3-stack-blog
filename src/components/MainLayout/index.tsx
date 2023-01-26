import React, { useContext } from "react";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useSession, signIn, signOut } from "next-auth/react";
import { HiLogout } from "react-icons/hi";
import { GlobalContext } from "../../contexts/GlobalContextProvider";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  const { data: sessionData, status } = useSession();
  const { isWriteModalOpen, setIsWriteModalOpen} = useContext(GlobalContext)

  console.log(sessionData);
  return (
    <div className="flex h-full w-full flex-col">
      <header className="flex h-32   w-full flex-row items-center justify-around border-b-[1px] border-gray-300 bg-white ">
        <div>
          <IoReorderThreeOutline className="text-2xl text-gray-600" />
        </div>
        <div className="text-xl font-thin">Ultimate Blog app</div>
        {status === "authenticated" ? (
          <div className="flex items-center space-x-4">
            <div>
              <BsBell className="text-2xl text-gray-600" />
            </div>
            <div>
              <div className="h-5 w-5 rounded-full bg-gray-600" />
            </div>
            <div>
              <button onClick={() => setIsWriteModalOpen(true)} className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 hover:border-gray-900 hover:text-gray-900">
                <div>Write</div>
                <div>
                  <FiEdit className="text-2xl text-gray-600 " />
                </div>
              </button>
            </div>
            <div>
              <button onClick={() => signOut()} className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 hover:border-gray-900 hover:text-gray-900">
                <div>Logout</div>
                <div>
                  <HiLogout className="text-2xl text-gray-600 " />
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => signIn()}
              className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 hover:border-gray-900 hover:text-gray-900"
            >
              Sign in with Google
            </button>
          </div>
        )}
      </header>
      {children}
    </div>
  );
};

export default MainLayout;
