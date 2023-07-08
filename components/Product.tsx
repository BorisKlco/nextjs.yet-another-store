"use client";
import { Tab } from "@headlessui/react";
import { ProductProps } from "@/types/indes";
import Image from "next/image";
import { Fragment } from "react";

const Product = ({ name, desc, price, files }: ProductProps) => {
  return (
    <div className="flex flex-col justify-center w-[64rem]">
      <Tab.Group>
        <h1>{name}</h1>
        <p>{desc}</p>
        <p>{price}</p>
        <div className="">
          <Tab.Panels className="flex justify-center">
            {files.images.map((img) => (
              <Tab.Panel key={img} className="drop-shadow-sm m-2">
                <Image
                  src={`/images/${img}`}
                  height={512}
                  width={512}
                  alt="img"
                  className="rounded-md border border-gray-100"
                />
              </Tab.Panel>
            ))}
          </Tab.Panels>
          <Tab.List className="flex justify-center">
            {files.images.map((img, index) => (
              <Tab key={index} as={Fragment}>
                {({ selected }) => (
                  <Image
                    src={`/images/${img}`}
                    height={158}
                    width={158}
                    alt={img}
                    className={`rounded-md border m-2 transition duration-100 hover:scale-[1.03] hover:contrast-[1.05] ${
                      selected ? "border-2 border-gray-300 drop-shadow-sm" : ""
                    }`}
                  />
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>
      </Tab.Group>
    </div>
  );
};

export default Product;
