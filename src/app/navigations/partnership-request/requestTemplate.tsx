import React from "react";
// import { RequestListContainer } from "src/app/navigations/partnership-request/page";
import { options } from "./../../../interface";
import { RequestListContainer } from "./RequestListContainer";

interface templateProps {
  name: string;
  location: string;
  results: number;
  categories: options[];
}
const RequestTemplate: React.FC<templateProps> = ({
  name,
  location,
  results,
  categories,
  ...props
}) => {
  return (
    <>
      <section className="mt-6">
        <h1 className="text-2xl font-semibold ">
          {name} {location}
        </h1>
        <p className="text-lg text-sec font-semibold">{results} Results</p>

        <div className="mt-8 flex justify-between ">
          <div className="flex gap-3 w-1/2">
            <div className=" w-1/2">
              <input
                type="text"
                className="input "
                placeholder="Partner type"
              />
            </div>
            <div className="w-1/2">
              <input type="text" className="input" placeholder="Location" />
            </div>
          </div>
          <div className="">
            <button className="h-12 text-white px-20 rounded-lg bg-primary">
              Search{" "}
            </button>
          </div>
        </div>

        <div className="flex gap-2 mt-10 items-end ">
          <p className="text-xl font-semibold">Filter results</p>
          <p className="text-primary font-semibold">Clear filters</p>
        </div>
      </section>

      <section className="w-11/12 mt-4">
        <div className="font-semibold mb-2 text-lg">Categories</div>
        <div className="flex gap-x-5 flex-wrap ">
          <div className="text-primary font-semibold">All categories</div>
          {categories?.map((e: options) => (
            <div
              key={e.label}
              className="hover:cursor-pointer hover:text-primary duration-200 text-[#9C9C9C]"
            >
              {e.label}
            </div>
          ))}
        </div>
        <div></div>
      </section>
      <section className="my-40">
        <RequestListContainer />
      </section>
    </>
  );
};

export default RequestTemplate;
