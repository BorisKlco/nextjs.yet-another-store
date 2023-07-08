"use client";
import { Tab } from "@headlessui/react";
import { ProductProps } from "@/types/indes";
import Image from "next/image";
import { Fragment } from "react";

const Product = ({ name, desc, price, files }: ProductProps) => {
  return (
    <div className="grid grid-cols-1 w-4/5 min-w-[26rem] lg:grid-cols-2 lg:w-[64rem] mx-auto outline outline-black">
      <Tab.Group>
        <div className="w-full">
          <Tab.Panels className="flex justify-center">
            {files.images.map((img) => (
              <Tab.Panel key={img} className="drop-shadow-sm m-2 w-full">
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
          <Tab.List className="flex justify-center mx-auto relative w-full">
            {files.images.map((img, index) => (
              <Tab key={index} as={Fragment}>
                {({ selected }) => (
                  <Image
                    src={`/images/${img}`}
                    objectFit="responsive"
                    height={128}
                    width={128}
                    alt={img}
                    className={`cursor-pointer w-full rounded border border-gray-200 m-2 transition duration-100 hover:scale-[1.03] hover:contrast-[1.05] ${
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
        <div className="m-2 px-4 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl">{name}</h1>
            <p className="pt-6 text-xl">{desc}</p>
            <p className="pt-8 text-6xl text-purple-300">{price}</p>
          </div>
          <div>
            <button
              className="w-full py-4 font-bold text-xl border-none bg-blue-300 rounded text-white
            transition duration-300 hover:bg-blue-400 hover:scale-[1.01] hover:drop-shadow-sm
            "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Tab.Group>
    </div>
  );
};

export default Product;
