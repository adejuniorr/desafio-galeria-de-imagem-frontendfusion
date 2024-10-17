import { Outlet } from "react-router-dom";
import { SideBarNav } from "../components/SideBar";

export const RootLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <SideBarNav />
      <main className="mx-auto lg:ml-[22vw] w-full lg:w-[78vw] overflow-y-scroll scroll-smooth">
        <header className="flex flex-col items-center sticky top-0 z-30 bg-gray-50 mb-5 pt-2">
          <h1 className="text-[1.8rem] font-bold">Galeria de Images</h1>
          <h3 className="underline">
            <a href="https://picsum.photos/v2/list">Lorem Picsum</a>
          </h3>
          <hr className="border-2 border-black w-[90%] mt-2" />
        </header>
        <Outlet />
      </main>
    </div>
  );
};
