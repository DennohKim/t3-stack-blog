import { type NextPage } from "next";
import Head from "next/head";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>T3Stack Blog Site</title>
      </Head>
      <div className="flex h-screen w-full flex-col">
        <header className="flex h-20   w-full flex-row justify-around items-center bg-white border-b-[1px] border-gray-300 ">
          
          <div>
            <IoReorderThreeOutline className="text-2xl text-gray-600"/>
          </div>
          <div className="font-thin text-xl">Ultimate Blog app</div>
          <div className="flex items-center space-x-4">
            <div>
              <BsBell className="text-2xl text-gray-600" />
            </div>
            <div>
              <div className="h-5 w-5 rounded-full bg-gray-600" />
            </div>
            <div>
              <button className="flex rounded items-center px-4 py-2 space-x-3 border border-gray-200 hover:border-gray-900 hover:text-gray-900">
                <div>Write</div>
                <div>
                  <FiEdit className="text-2xl text-gray-600 "/>
                </div>
              </button>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-12">{/* Main screen */}</div>
      </div>
    </>
  );
};

export default Home;
