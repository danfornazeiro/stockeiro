"use client";

import { Menu, LogOut, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth-client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Options from "./options";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const HeaderOptions = () => {
  const { data: session } = authClient.useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // adiciona delay para animar fade-in
      const timer = setTimeout(() => setShowSidebar(true), 10);
      return () => clearTimeout(timer);
    } else {
      setShowSidebar(false);
    }
  }, [isOpen]);

  if (!session?.user) return null;

  return (
    <div className="lg:hidden">
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-white hover:bg-gray-100"
        size="icon"
      >
        <Menu color="black" size={20} />
      </Button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar com fade-in */}
          <aside
            className={`fixed top-0 left-0 z-50 flex h-screen w-64 transform flex-col bg-blue-600 p-4 text-white shadow-lg transition-all duration-300 ${showSidebar ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"} `}
          >
            <div className="mb-8 flex">
              <Link href="/">
                <Image src="/logo.svg" alt="Logo" width={75} height={75} />
              </Link>
            </div>

            <div className="mb-8 flex">
              <Link href="/account">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={session.user.image ?? undefined} />
                  <AvatarFallback>
                    {session.user.name?.split(" ")[0]?.[0]}
                    {session.user.name?.split(" ")[1]?.[0]}
                  </AvatarFallback>
                </Avatar>
              </Link>
            </div>

            <nav className="flex flex-1 flex-col gap-2">
              <Options />
            </nav>

            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg p-2 hover:bg-blue-500"
              >
                <Settings size={20} /> Configurações
              </Link>
              <Button
                onClick={() => authClient.signOut()}
                className="flex items-center gap-2 rounded-lg bg-blue-600 p-2 hover:bg-blue-500"
              >
                <LogOut size={20} /> Sair
              </Button>
            </div>
          </aside>
        </>
      )}
    </div>
  );
};

export default HeaderOptions;
