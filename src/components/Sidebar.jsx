import React from "react";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="h-full w-full bg-navyBlue py-4">
      <section className="flex flex-col gap-6">
        <div>
          <SidebarItem
            isActive
            icon={
              <i className="fa-solid fa-binoculars text-f18 text-white"></i>
            }
            itemText="Overview"
          />
          <SidebarItem
            icon={<GoogleIcon icon="visibility" />}
            itemText="Search preview"
          />
        </div>
        <SidebarSection heading="metrics">
          <div>
            <SidebarItem
              icon={<GoogleIcon icon="monitoring" />}
              itemText="Analytics"
            />
            <SidebarItem
              icon={<GoogleIcon icon="emoji_objects" />}
              itemText="Insights"
            />
          </div>
        </SidebarSection>
        <SidebarSection heading="customize">
          <div>
            <SidebarItem
              icon={<GoogleIcon icon="stat_2" />}
              itemText="Result Rankings"
            />
            <SidebarItem icon={<GoogleIcon icon="tune" />} itemText="Weights" />
            <SidebarItem
              icon={<i className="-my-2 text-f26 text-gray-500">≈</i>}
              itemText="Synonyms"
            />
          </div>
        </SidebarSection>
        <SidebarSection heading="manage">
          <div>
            <SidebarItem
              icon={<GoogleIcon icon="wysiwyg" />}
              itemText="content"
            />
            <SidebarItem
              icon={<GoogleIcon icon="language" />}
              itemText="domains"
            />
          </div>
        </SidebarSection>
        <SidebarSection heading="interface">
          <div>
            <SidebarItem
              icon={<GoogleIcon icon="code" />}
              itemText="install search"
            />
            <SidebarItem
              icon={
                <i className="fa-solid fa-magnet rotate-180 text-f18 text-gray-500"></i>
              }
              itemText="engagement modules"
            />
          </div>
        </SidebarSection>
      </section>
    </aside>
  );
}

function SidebarSection({ heading, children }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="px-4 text-f12 font-medium uppercase text-gray-400">
        {heading}
      </h2>
      {children}
    </div>
  );
}

function GoogleIcon({ icon }) {
  return (
    <span className="material-symbols-outlined text-f20 text-gray-500">
      {icon}
    </span>
  );
}
