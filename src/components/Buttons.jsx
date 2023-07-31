import React from "react";

export default function Button({ btnText }) {
  return (
    <button
      className={`rounded-sm bg-gradient-to-b from-white to-gray-300 p-2 px-4 text-f12 font-medium uppercase text-black shadow-one hover:to-gray-200`}
    >
      {btnText}
    </button>
  );
}

export function ButtonBlue({ btnText }) {
  return (
    <button
      className={`rounded-sm bg-gradient-to-b from-lightBlue/90 to-blue p-2 px-4 text-f12 font-medium uppercase text-white shadow-one hover:to-lightBlue`}
    >
      {btnText}
    </button>
  );
}

export function ButtonGreen({ btnText }) {
  return (
    <button
      className={`rounded-sm bg-gradient-to-b from-greenLight via-greenLight to-greenLight/75 p-2 px-4 text-f12 font-medium uppercase text-white shadow-one hover:to-greenLight`}
    >
      {btnText}
    </button>
  );
}
