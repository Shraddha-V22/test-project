import React from "react";

export default function SidebarItem({ icon, itemText, isActive }) {
  return (
    <div
      className={`${
        isActive ? "bg-blue" : ""
      } grid grid-cols-[20px_1fr] items-center gap-4 px-4 py-1.5`}
    >
      {icon}
      <p
        className={`${
          isActive ? "text-white" : "text-gray-200"
        } text-f14 capitalize`}
      >
        {itemText}
      </p>
    </div>
  );
}
