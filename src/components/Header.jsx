import React from "react";
import Button, { ButtonGreen } from "./Buttons";

export default function Header() {
  return (
    <header className="grid w-[1200px] grid-cols-[200px_1000px] bg-lightBlue text-white">
      <div className="flex w-[200px] items-end justify-between border-b-4 border-lightBlue bg-gradient-to-b from-navyBlueLight to-navyBlue/90 p-2 px-4">
        <div>
          <p className="text-f14">stripe docs</p>
          <div className="flex items-center gap-2 text-f12 text-gray-400">
            <span className="material-symbols-outlined text-f14">group</span>
            <span className="font-medium uppercase">My account</span>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-100">
          <span className="material-symbols-outlined">expand_more</span>
        </button>
      </div>
      <div className="flex w-full items-center justify-between p-2 px-4">
        <p className="text-f16 capitalize">
          enjoying your free swiftype trial?
        </p>
        <div className="flex items-center gap-4">
          <Button btnText="Read more" />
          <ButtonGreen btnText="choose a plan now" />
          <button className="grid h-6 w-6 place-items-center rounded-full border-[1.5px]">
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      </div>
    </header>
  );
}
