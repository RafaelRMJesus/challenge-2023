'use client'

import Link from "next/link";
import Container from "@/components/ui/container";
import { Zap } from 'lucide-react'
import { ThemeToggle } from "@/components/theme-toggle";
import { NavigationMenuDemo } from "./ui/nav-menu-item";

const Navbar =  () => {

  return (
    <div className="border-b flex">
      <Container >
        <div className="justify-between px-4 sm:px-6 lg:px-8 flex h-16 items-center gap-x-4">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-2xl flex items-center gap-x-2 ">
              <Zap width={20} strokeWidth={6}/>
              Schneider
            </p>
          </Link>
          <NavigationMenuDemo />
          <ThemeToggle />
        </div>
      </Container>
    </div>
  );
}
 
export default Navbar;