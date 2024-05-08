import Image from "next/image";
import banner1 from "@/public/banner1.png";
import banner2 from "@/public/banner2.png";
import { CarouselItemType } from "@/app/types";
import de1 from "@/public/de1.png";
import de2 from "@/public/de2.png";
import de3 from "@/public/de3.png";
import ekdosis1 from "@/public/ekdosis1.png";
import ekdosis2 from "@/public/ekdosis2.png";

import galleryImage1 from "@/public/galleryImage1.png";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import { ImageScroller } from "@/app/components/ImageScroller";
import { Carousel } from "@/app/components/Carousel";

const carouselData1: CarouselItemType[] = [
  { title: "Κέντρον Ερεύνης της Αρχαιότητος" },
  { title: "Κέντρο Ερεύνης Φυσικής της Ατμόσφαιρας και Κλιματολογίας	" },
  { title: "Κέντρον Ερεύνης της Ελληνικής Λαογραφίας" },
  { title: "Κέντρον Ερεύνης Νεοελληνικών Διαλέκτων και Ιδιωμάτων Ι.Λ.Ν.Ε" },
];
const carouselData2: CarouselItemType[] = [
  { title: "Χρηστικό λεξικότης Νεοελληνικής Γλώσσας", image: ekdosis1 },
  {
    title: "Κώδικας Ηθικής και Επαγγελματικής Συμπεριφοράς Υπαλλήλ..",
    image: ekdosis2,
  },
  {
    title: "Εκδόσεις Κέντρον Ερεύνης της Ελληνικής Λαογραφίας",
    image: ekdosis1,
  },
  {
    title:
      "Εκδόσεις Κέντρον Ερεύνης Νεοελληνικών Διαλέκτων και Ιδιωμάτων Ι.Λ.Ν.Ε",
    image: ekdosis1,
  },
];
const deData = [
  { title: "Ακαδημία Αθηνών", image: de1 },
  { title: "Αποθετήριο Ακαδημίας", image: de2 },
  { title: "Κεντρική Βιβλιοθήκη ", image: de3 },
];

const staticPhotos: StaticImageData[] = [
  galleryImage1,
  banner1,
  galleryImage1,
  banner1,
];

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-white text-black">
      <ImageScroller images={staticPhotos} />
      <section className="flex flex-col max-w-[1040px] py-12 px-4 gap-6">
        <h1>Καλώς ήρθατε στη δικτυακή πύλη της Ακαδημίας Αθηνών</h1>
        <p className="text-center pb-8">
          Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το
          περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η
          ουσία της χρήσης του Lorem Ipsum είναι ότι έχει λίγο-πολύ μία ομαλή
          κατανομή γραμμάτων, αντίθετα με το να βάλει κανείς κείμενο.
        </p>
        <Image src={banner1} alt="banner1"></Image>
      </section>
      <section className="w-full flex justify-center bg-[#F9F9F9]">
        <div className="max-w-[1040px] w-full flex flex-col items-center gap-6 py-12 px-4">
          <h1>Ερευνητικά Κέντρα</h1>

          <p className="text-center pb-8">
            Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το
            περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας.
            Η ουσία της χρήσης του Lorem Ipsum είναι ότι έχει λίγο-πολύ μία
            ομαλή κατανομή γραμμάτων, αντίθετα με το να βάλει κανείς κείμενο.
          </p>
          <Carousel data={carouselData1} />
          <button className="p-4 ring-2 ring-blue-500 rounded-full text-blue-500 max-w-min hover:bg-blue-accent hover:text-white transition-colors">
            Περισσότερα
          </button>
        </div>
      </section>
      <section className="flex flex-col max-w-[1040px]  py-12 px-4 gap-6">
        <h1>Τα Νέα μας</h1>
        <p className="text-center pb-8">
          Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το
          περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας. Η
          ουσία της χρήσης του Lorem Ipsum είναι ότι έχει λίγο-πολύ μία ομαλή
          κατανομή γραμμάτων, αντίθετα με το να βάλει κανείς κείμενο.
        </p>
        <Image src={banner1} alt="banner1"></Image>
      </section>
      <section className="flex flex-col max-w-[1040px] w-full  py-12 px-4 gap-6">
        <h1>Δείτε επίσης</h1>
        <div className="flex w-full gap-4">
          {deData.map((de, index) => (
            <div
              className="flex flex-col justify-center items-center relative overflow-hidden w-1/3 xl:h-[400px] p-6 gap-8"
              key={index}
            >
              <Image
                src={de.image}
                alt={de.title}
                className="absolute top-0 left-0 z-10 object-cover filter brightness-50"
              />
              <h2 className="z-20 text-xl font-semibold text-white text-center">
                {de.title}
              </h2>
              <button className="xl:py-4 xl:px-6 py-1 px-2 text-sm xl:text-base z-20 ring-2 ring-white rounded-full text-white max-w-min hover:bg-blue-accent hover:ring-blue-accent transition-colors">
                {index % 2 == 0 ? "Πλοηγηθείτε" : "Εξερευνήστε"}
              </button>
            </div>
          ))}
        </div>
        <Image src={banner2} alt="banner2"></Image>
      </section>
      <section className="w-full flex justify-center bg-[#F9F9F9]">
        <div className="max-w-[1040px] w-full flex flex-col items-center gap-6 py-12 px-4">
          <h1>Εκδόσεις</h1>
          <p className="text-center pb-8">
            Είναι πλέον κοινά παραδεκτό ότι ένας αναγνώστης αποσπάται από το
            περιεχόμενο που διαβάζει, όταν εξετάζει τη διαμόρφωση μίας σελίδας.
            Η ουσία της χρήσης του Lorem Ipsum είναι ότι έχει λίγο-πολύ μία
            ομαλή κατανομή γραμμάτων, αντίθετα με το να βάλει κανείς κείμενο.
          </p>
          <Carousel data={carouselData2} />
          <button className="py-4 px-6 ring-2 ring-blue-500 rounded-full text-blue-500 max-w-min hover:bg-blue-accent hover:text-white transition-colors">
            Περισσότερα
          </button>
        </div>
      </section>
    </main>
  );
}
