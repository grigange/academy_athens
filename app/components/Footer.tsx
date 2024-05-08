
import Image from "next/image";
import headerIMG from "@/public/header.png";
import espaIMG from "@/public/espa.png";
import facebook from "@/public/facebook.svg";
import instagram from "@/public/instagram.svg";
import youtube from "@/public/youtube.svg";
import Link from "next/link";


export const Footer = () => {
    return (
      <div className="flex flex-col w-full bg-blue-light text-white">
        <div className="flex flex-col gap-4 w-full p-8 justify-evenly 2xl:flex-row 2xl:gap-0">
          <div className="flex flex-col items-center gap-4">
            <Image src={headerIMG} alt="Ακαδημία Αθηνών" height={84} />
            <div className="flex flex-row gap-4 ml-4">
              <div className="w-[48px] h-[48px] bg-gray-bg/20 rounded-full flex items-center justify-center">
                <Image src={facebook} alt="facebook" height={20} width={20} />
              </div>
              <div className="w-[48px] h-[48px] bg-gray-bg/20 rounded-full flex items-center justify-center">
                <Image src={instagram} alt="instagram" height={20} width={20} />
              </div>
              <div className="w-[48px] h-[48px] bg-gray-bg/20 rounded-full flex items-center justify-center">
                <Image src={youtube} alt="youtube" height={20} width={20} />
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-[16px] font-semibold">ΕΠΙΚΟΙΝΩΝΙΑ</h2>
            <p className="text-white/80">
              Πανεπιστημίου 28, 106 79 Αθήνα <br />
              Τ: 210 3634700 <br />
              F: 210 3634806 <br />
              E-mail: info@academyofathens.gr
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-[16px] font-semibold">ΧΡΗΣΙΜΕΣ ΠΛΗΡΟΦΟΡΙΕΣ</h2>
            <Link className="text-white/80" href="">
              Ευρετήριο Προσώπων
            </Link>
            <Link className="text-white/80" href="">
              Πρόσβαση
            </Link>
            <Link className="text-white/80" href="">
              Δικαιώματα
            </Link>
            <Link className="text-white/80" href="">
              Δελτία Τύπου
            </Link>
            <Link className="text-white/80" href="">
              Προκηρύξεις
            </Link>
          </div>
        </div>
        <div className="w-full bg-white h-[76px] flex items-center justify-center">
          <Image src={espaIMG} alt="ESPA" height={52} />
        </div>
        <div className="w-full bg-blue-dark h-[57px] flex items-center justify-center">
          <span className="text-center text-[14px] font-normal">
            © 2023 Dotsoft. All Rights Reserved.
          </span>
        </div>
      </div>
    );
  };