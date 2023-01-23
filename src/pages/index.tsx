import { type NextPage } from "next";
import Head from "next/head";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { HiChevronDown } from "react-icons/hi";

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
        <section className="grid h-full w-full grid-cols-12 place-items-center">
          <main className="col-span-8 h-full w-full border-r border-gray-300  px-24 ">
            <div className="flex w-full flex-col space-y-4 py-10">
              <div className="flex w-full items-center space-x-4">
                <label
                  htmlFor="search"
                  className="relative w-full rounded-full border border-gray-300"
                >
                  <div className="absolute left-2 flex h-full items-center">
                    <BiSearch />
                  </div>

                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="w-full rounded-full py-2 px-4 pr-6 pl-7  text-sm outline-none placeholder:text-sm  placeholder:text-gray-300"
                    placeholder="Search..."
                  />
                </label>
                <div className="flex w-full items-center justify-end space-x-4">
                  <div>My topics:</div>
                  <div className="flex items-center space-x-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="rounded-full bg-gray-200/50 p-4 ">
                        tag {i}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-between border-b border-gray-300 pb-10">
                <div>Articles</div>
                <div>
                  <button className="flex items-center space-x-2 rounded-full border border-gray-800 px-4 py-1.5 font-semibold">
                    <div>Following</div>
                    <div>
                      <HiChevronDown className="text-xl " />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col justify-center space-y-7">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="group flex flex-col space-y-6 pb-8 border-b border-gray-300 last:border-none ">
                  <div className="flex w-full items-center space-x-10">
                    <div className="w-10 h-10 bg-gray-400 rounded-full " ></div>
                    <div>
                    <p className="font-semibold ">Chizaa &#x2022; 22 Dec 2022</p>
                    <p text-sm>Fullstack Designer | Software Developer | Blockchain Enthusiast</p>
                    </div>
                    
                  </div>
                  <div className="grid w-full grid-cols-12 gap-4">
                    <div className="col-span-8 flex flex-col space-y-4 ">
                      <p className="text-3xl font-bold text-gray-800 group-hover:underline decoration-indigo-6 00">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Dolores, debitis!
                      </p>
                      <p className="text-sm text-gray-500 break-words">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ab odit quibusdam quasi ipsam praesentium expedita
                        non laborum temporibus eligendi odio neque libero magni
                        voluptate accusantium aliquam, veritatis illum nesciunt
                        eveniet? Aliquid voluptatibus ex a corrupti quae,
                        aspernatur illum dolores rem et dolor sint soluta
                        molestias excepturi nobis, sapiente quo, temporibus
                        vitae in. Enim quasi beatae modi, sequi ratione quia
                        vero.
                      </p>
                    </div>
                    <div className="col-span-4">
                      <div className="h-full w-full rounded-xl bg-gray-300 transition hover:scale-105 duration-300 shadow-lg"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex w-full items-center justify-start">
                      <div className="flex items-center space-x-2">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div
                            key={i}
                            className="rounded-full bg-gray-200/50 px-6 py-2.5 "
                          >
                            tag {i}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
          <aside className="col-span-4 h-full w-full">
            This is the aside part
          </aside>
        </section>
      </div>
    </>
  );
};

export default Home;
