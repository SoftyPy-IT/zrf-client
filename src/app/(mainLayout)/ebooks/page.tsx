import React from "react";
import Container from "@/components/share/Container";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import book1 from "../../../../src/assets/images/ebooks/e1.jpg";
import book2 from "../../../../src/assets/images/ebooks/e2.jpg";
import book3 from "../../../../src/assets/images/ebooks/e3.jpg";
import book4 from "../../../../src/assets/images/ebooks/e4.jpg";
import book5 from "../../../../src/assets/images/ebooks/e5.jpg";
import book6 from "../../../../src/assets/images/ebooks/e6.jpg";
import Ebook from "./_components/Ebook";

// Sample eBooks data
const eBooks = [
  {
    id: 1,
    title: "The Liberation War",
    description: "An in-depth analysis of Bangladesh’s liberation war.",
    image: book1,
  },
  {
    id: 2,
    title: "The Ziaur Rahman Legacy",
    description: "A book about the legacy and impact of Ziaur Rahman.",
    image: book2,
  },
  {
    id: 3,
    title: "Healthcare Revolution",
    description: "A look into the healthcare reforms during the 1980s.",
    image: book3,
  },
  {
    id: 4,
    title: "Bangladesh's Growth Story",
    description: "An economic history of Bangladesh post-independence.",
    image: book4,
  },
  {
    id: 5,
    title: "Bangladesh's Growth Story",
    description: "An economic history of Bangladesh post-independence.",
    image: book5,
  },
  {
    id: 6,
    title: "Bangladesh's Growth Story",
    description: "An economic history of Bangladesh post-independence.",
    image: book6,
  },
];

const EBooks = () => {
  return (
    <div>
      <Ebook />
      <Container>
        <div className="my-20">
          {/* Grid layout for eBooks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {eBooks.map((book) => (
              <div key={book.id} className="bg-white p-5 shadow-lg border">
                <div className="relative w-full h-[450px] overflow-hidden group">
                  <Image
                    src={book.image}
                    alt={book.title}
                    // layout="fill"
                    // objectFit="cover"
                    className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EBooks;
