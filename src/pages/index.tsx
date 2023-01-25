import { type NextPage } from "next";
import Head from "next/head";
import { BiSearch } from "react-icons/bi";
import { HiChevronDown } from "react-icons/hi";
import MainLayout from "../components/MainLayout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>T3Stack Blog Site</title>
      </Head>

      <MainLayout>
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
                <div
                  key={i}
                  className="group flex flex-col space-y-6 border-b border-gray-300 pb-8 last:border-none "
                >
                  <div className="flex w-full items-center space-x-10">
                    <div className="h-10 w-10 rounded-full bg-gray-400 "></div>
                    <div>
                      <p className="font-semibold ">
                        Chizaa &#x2022; 22 Dec 2022
                      </p>
                      <p text-sm>
                        Fullstack Designer | Software Developer | Blockchain
                        Enthusiast
                      </p>
                    </div>
                  </div>
                  <div className="grid w-full grid-cols-12 gap-4">
                    <div className="col-span-8 flex flex-col space-y-4 ">
                      <p className="decoration-indigo-6 00 text-3xl font-bold text-gray-800 group-hover:underline">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Dolores, debitis!
                      </p>
                      <p className="break-words text-sm text-gray-500">
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
                      <div className="h-full w-full rounded-xl bg-gray-300 shadow-lg transition duration-300 hover:scale-105"></div>
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
          <aside className="sticky top-36  col-span-4 flex h-full w-full flex-col space-y-4 p-6">
            <div>
              <h3 className="my-6 text-lg font-semibold">
                People you might be interested
              </h3>
              <div className="flex flex-col space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex flex-row items-center space-x-5 "
                  >
                    <div className="h-10 w-10 flex-none rounded-full bg-gray-300 "></div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">
                        John Doe
                      </div>
                      <div className="text-xs">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Temporibus sint totam nesciunt.
                      </div>
                    </div>
                    <div>
                      <button className="flex items-center space-x-3 rounded border border-gray-500 px-4 py-2 hover:border-gray-900 hover:text-gray-900">
                        Follow
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="my-6 text-lg font-semibold">Your reading list</h3>
            <div className="flex flex-col space-y-8 ">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="group flex items-center space-x-6">
                  <div className="aspect-square h-full w-2/5 rounded-xl bg-gray-300"></div>
                  <div className="flex w-3/5 flex-col space-y-2">
                    <h3 className="text-lg font-semibold decoration-indigo-600 group-hover:underline">
                      Lorem ipsum dolor sit amet consectetur.
                    </h3>
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero, similique?
                    </div>
                    <div className="flex w-full items-center space-x-4 ">
                      <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                      <div>Chizaa &#x2022; </div>
                      <div>Dec 22 2022</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>
      </MainLayout>
    </>
  );
};

export default Home;
