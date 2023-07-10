"use client";
import { Tab } from "@headlessui/react";
import { ProductProps } from "@/types/indes";
import Image from "next/image";
import { Fragment } from "react";
import { BuyButton } from ".";
import Cart from "./Cart";

const Product = ({ name, desc, price, files, url }: ProductProps) => {
  return (
    <div className="grid grid-cols-1 w-full md:grid-cols-2 max-w-[64rem] mx-auto mb-4 outline outline-gray-600 bg-white">
      <Tab.Group>
        <div className="">
          <Tab.Panels className="flex justify-center">
            {files.images.map((img) => (
              <Tab.Panel key={img} className="drop-shadow-sm m-2">
                <Image
                  src={`/images/${img}`}
                  height={1024}
                  width={1024}
                  alt="img"
                  className="rounded border border-gray-100"
                />
              </Tab.Panel>
            ))}
          </Tab.Panels>
          <Tab.List className="flex justify-center mx-auto relative">
            {files.images.map((img, index) => (
              <Tab key={index} as={Fragment}>
                {({ selected }) => (
                  <Image
                    src={`/images/${img}`}
                    height={96}
                    width={96}
                    alt={img}
                    className={`cursor-pointer w-3/9 rounded border border-gray-200 m-2 transition duration-100 hover:scale-[1.03] hover:contrast-[1.05] ${
                      selected
                        ? "drop-shadow-md outline-none border-2 border-black"
                        : ""
                    }`}
                  />
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <div className="m-2 flex flex-col justify-between">
          <div className="flex flex-col gap-1 pt-4 pl-2">
            <h1 className="text-4xl">{name}</h1>
            <p className="pt-6 text-xl">{desc}</p>
            <p className="pt-8 text-6xl text-purple-300">{price}</p>
          </div>

          <BuyButton url={url} price={price} />
        </div>
      </Tab.Group>
    </div>
  );
};

export default Product;
