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
        <header className="flex h-20   w-full flex-row items-center justify-around border-b-[1px] border-gray-300 bg-white ">
          <div>
            <IoReorderThreeOutline className="text-2xl text-gray-600" />
          </div>
          <div className="text-xl font-thin">Ultimate Blog app</div>
          <div className="flex items-center space-x-4">
            <div>
              <BsBell className="text-2xl text-gray-600" />
            </div>
            <div>
              <div className="h-5 w-5 rounded-full bg-gray-600" />
            </div>
            <div>
              <button className="flex items-center space-x-3 rounded border border-gray-200 px-4 py-2 hover:border-gray-900 hover:text-gray-900">
                <div>Write</div>
                <div>
                  <FiEdit className="text-2xl text-gray-600 " />
                </div>
              </button>
            </div>
          </div>
        </header>
        <section className="grid grid-cols-12 place-items-center w-full h-full">
          <main className="col-span-8 w-full border-r border-gray-300 h-full">This is the main part</main>
          <aside className="col-span-4 w-full h-full">This is the aside part</aside>
        </section>
      </div>
    </>
  );
};

export default Home;
