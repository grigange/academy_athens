
import Image from "next/image";
import headerIMG from "@/public/header.png";
import chevron_down from "@/public/chevron_down.svg";
import chevron_right from "@/public/chevron_right.svg";
import searchICON from "@/public/searchIcon.svg";
import el from "@/public/el.png";
import eng from "@/public/eng.svg";
import Link from "next/link";
import { MenuItem, MenuResponse } from "@/app/types";

const Menu = ({ json }: { json: MenuResponse }) => {
  return (
    <div className="bg-blue-light text-white/80  h-[80px] w-full hidden items-center justify-center sticky -top-1 z-50 2xl:flex">
      {json.items.map((item1: MenuItem) => {
        return (
          <div
            className="flex relative hover:bg-white/10 focus-within:bg-white/20 h-full px-6 text-center justify-between gap-2 items-center group/1"
            key={item1.id}
          >
            <Link href={item1.url} className="w-full h-full flex items-center">
              {item1.name}
            </Link>
            {item1.submenu && item1.submenu?.length > 0 && (
              <Image
                src={chevron_down}
                alt="Search"
                className="group-hover/1:rotate-180 group-focus-within/1:rotate-180 transition-transform"
              />
            )}
            {item1.submenu && item1.submenu?.length > 0 && (
              <div className="absolute group-hover/1:flex group-focus-within/1:flex hidden flex-col gap-2 justify-start w-max top-[80px] left-0 bg-blue-dark/95">
                {item1.submenu?.map((item2) => (
                  <div
                    className="flex justify-between relative hover:bg-white/20 focus-within:bg-white/20 h-full w-full px-4 py-2 text-start items-center group/2"
                    key={item2.id}
                  >
                    <Link href={item2.url} className="w-full h-full">
                      {item2.name}
                    </Link>
                    {item2.side_menu && (
                      <Image
                        src={chevron_right}
                        alt="Search"
                        className="group-hover/2:rotate-180 group-focus-within/2:rotate-180 transition-transform"
                      />
                    )}
                    {item2.submenu && item2.submenu?.length > 0 && (
                      <div className="absolute group-hover/2:flex group-focus-within/2:flex hidden flex-col gap-2 justify-start w-max max-w-64 top-0 left-[100%] bg-blue-dark/90">
                        {item2.submenu?.map((item3) => (
                          <Link
                            className="flex relative hover:bg-white/20 focus:bg-white/20 h-full w-full px-4 py-2 text-start justify-start items-center"
                            href={item3.url}
                            key={item3.id}
                          >
                            {item3.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
      <button className="h-8 w-8 rounded-full bg-white flex items-center justify-center mx-2">
        <Image src={searchICON} alt="Search" />
      </button>
      <div
        tabIndex={1}
        className="relative group bg-transparent mx-2 h-full flex items-center hover:bg-white/10"
      >
        <div className="flex gap-1 p-2 justify-center items-center rounded-md min-w-full">
          <Image src={el} width={20} height={15} alt="Ελληνικά" /> EΛ
          <Image
            src={chevron_down}
            alt="Search"
            className="group-hover:rotate-180 group-focus-within:rotate-180 transition-transform"
          />
        </div>
        <div className="absolute group-hover:flex group-focus-within:flex hidden flex-col gap-2 justify-start w-max max-w-64 top-[80px] left-0 bg-blue-dark/90">
          <button
            tabIndex={2}
            className="flex gap-1 p-2 justify-center items-center focus:bg-white/20 hover:bg-white/20"
          >
            <Image src={el} alt="Ελλάδα" width={20} height={15} /> ΕΛ
          </button>
          <button
            tabIndex={3}
            className="flex gap-1 p-2 justify-center items-center focus:bg-white/20 hover:bg-white/20"
          >
            <Image src={eng} alt="Αγγλία" width={20} height={15} /> EN
          </button>
        </div>
      </div>
    </div>
  );
};
const MobileMenu = ({ json }: { json: MenuResponse }) => {
  return (
    <div className="fixed text-white/80  top-0 left-0 pt-[80px] bg-blue-light w-full h-full flex-col hidden">
      {json.items.map((i: MenuItem) => {
        return (
          <Link
            className="flex hover:bg-white/20 h-full px-4 text-center justify-center items-center"
            href={i.url}
            key={i.id}
          >
            {i.name}
          </Link>
        );
      })}
    </div>
  );
};

export const Header = async () => {
  const request = await fetch(
    "https://academyofathens-latest-cms.dotsoft.gr/api/el/menu/main"
  );
  const json: MenuResponse = await request.json();
  return (
    <>
      <div className="bg-blue-dark h-[100px] w-full items-center justify-center hidden 2xl:flex">
        <Image src={headerIMG} alt="Ακαδημία Αθηνών" height={84} />
      </div>
      <Menu json={json} />
      <div className="bg-blue-dark text-white/80  h-[80px] w-full flex justify-between items-center sticky top-0 2xl:-top-1 z-50 2xl:hidden py-4 px-6">
        <Image src={headerIMG} alt="Ακαδημία Αθηνών" height={50} />
        <button className="font-black text-center text-3xl">☰</button>
      </div>
      <MobileMenu json={json} />
    </>
  );
};
