"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

function NavBar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/projects"}>
            <MenuItem setActive={setActive} active={active} item="Projects">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/projects">Blog Management</HoveredLink>
                <HoveredLink href="/projects">E-Commerce Platform</HoveredLink>
                <HoveredLink href="/projects">Chat Application</HoveredLink>

              </div>
            </MenuItem>
        
        </Link>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
        <Link href={"https://drive.google.com/file/d/13-pynv0d0Q3g2cClTO5qX8vFD7obESiX/view?usp=sharing"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Download Resume"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default NavBar;
