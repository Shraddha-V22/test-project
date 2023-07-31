import React from "react";
import Button, { ButtonBlue } from "./Buttons";

export default function Main() {
  return (
    <main className="grid grid-cols-[775px_225px] bg-lightGray">
      <section className="flex flex-col bg-lightGray">
        <header className="flex w-[50%] flex-col gap-4 px-8 py-6">
          <h1 className="text-f20 font-medium text-gray-800">
            Welcome to swiftype!
          </h1>
          <p className="text-f14 text-gray-500">
            You are ready to creaft a valuable and engaging search experience
            that will delight your visitors.
          </p>
          <p className="text-f14 text-gray-500">
            Follow this tutorial to preview your search experience and install
            Swiftype.
          </p>
        </header>
        <article className="flex flex-col items-start gap-8 border-b px-8 py-6">
          <h2 className="text-f16 font-medium capitalize text-blue">
            Step 1: Search Preview
          </h2>
          <div className="flex flex-col gap-4 text-f14 text-gray-500">
            <p>Your webpages have become searchable documents!</p>
            <p>
              Click <span className="font-medium">Preview</span> to try some
              search queries.
            </p>
          </div>
          <ButtonBlue btnText="preview" />
        </article>
        <article className="flex items-center justify-between border-b px-8 py-6">
          <h2 className="text-f16 font-medium capitalize text-blue">
            Step 2: Install Swiftype
          </h2>
          <button className="text-gray-500">
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </article>
        <article className="flex flex-col items-start gap-8 border-b px-8 py-6">
          <p className="text-f14 text-gray-400 underline hover:cursor-pointer hover:text-gray-500">
            Hide this tutorial forever
          </p>
          <div className="grid grid-cols-[auto_1fr] items-center gap-4 rounded-md border bg-white p-4">
            <div className="grid h-7 w-7 place-items-center rounded-full border-2 font-medium italic text-gray-400">
              i
            </div>
            <p className="text-f14 text-gray-500">
              Swiftype is currently indexing content for domains in this search
              engine. Pages will become available as they are indexed.
            </p>
          </div>
          <div className="flex w-full flex-col gap-6">
            <h2 className="text-f16 font-medium">
              Stripe docs recent activity
            </h2>
            <div className="flex flex-col rounded-md border bg-white text-f14 text-gray-500">
              <p className="border-b p-4">
                You added domain{" "}
                <span className="text-blue underline">
                  https://stripe.com/docs
                </span>{" "}
                <span className="text-gray-400">— about 3 hours ago</span>
              </p>
              <div className="h-4"></div>
            </div>
          </div>
        </article>
      </section>
      <aside className="flex w-full flex-col gap-8 border-l p-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-f12 font-medium uppercase text-gray-500">
            engine
          </h3>
          <ul className="text-f14">
            <li className="border-b py-2">stripe docs</li>
            <li className="border-b py-2 capitalize">Created jul 13, 2023</li>
            <li className="py-2 ">4,852 pages</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-f12 font-medium uppercase text-gray-500">
            api details
          </h3>
          <ul className="text-f14">
            <li className="grid grid-cols-[1fr_auto] items-center justify-between border-b py-2">
              <div className="leading-4">
                <p className="text-f14 capitalize">api key</p>
                <small className="text-[10px] text-gray-400">
                  dK1umV_w974cMxb_HQ3
                </small>
              </div>
              <div className="grid h-6 w-6 place-items-center rounded-full border-2 font-medium italic text-gray-400">
                i
              </div>
            </li>
            <li className="grid grid-cols-[1fr_auto] items-center justify-between border-b py-2">
              <div className="leading-4">
                <p className="text-f14 capitalize">Engine slug</p>
                <small className="text-[10px] text-gray-400">stripe docs</small>
              </div>
              <div className="grid h-6 w-6 place-items-center rounded-full border-2 font-medium italic text-gray-400">
                i
              </div>
            </li>
            <li className="grid grid-cols-[1fr_auto] items-center justify-between py-2">
              <div className="leading-4">
                <p className="text-f14 capitalize">engine key</p>
                <small className="text-[10px] text-gray-400">
                  6w1umV_w974cMxb_HQ3
                </small>
              </div>
              <div className="grid h-6 w-6 place-items-center rounded-full border-2 font-medium italic text-gray-400">
                i
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <button className="rounded-sm border-[1.5px] p-1 text-[10px] font-medium uppercase text-blue">
            clone engine...
          </button>
          <button className="rounded-sm border-[1.5px] p-1 text-[10px] font-medium uppercase text-gray-400">
            delete engine...
          </button>
        </div>
      </aside>
    </main>
  );
}
