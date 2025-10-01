"use client";

import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  CreditCard,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import AsideOptions from "./aside-options";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth-client";
import Options from "./options";

const Sidebar = () => {
  const { data: session } = authClient.useSession();

  if (!session?.user) {
    return null;
  }

  return (
    <aside className="fixed top-0 left-0 hidden h-screen w-[280px] flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-blue-600 text-white shadow-lg lg:flex">
      {/* TOPO */}
      <div className="p-4">
        <Link href="/">
          <Image src={"/logo.svg"} alt="Logo" width={75} height={75} />
        </Link>
      </div>

      {/* MENU */}
      <nav className="flex flex-col gap-2 px-4">
        <Options />
      </nav>

      {/* RODAPÉ */}
      <div className="px-4 pb-4">
        <Link
          href="#"
          className="flex items-center gap-2 rounded-lg p-2 pb-3 hover:bg-blue-500"
        >
          <Settings size={20} /> Configurações
        </Link>
        <Button
          onClick={() => authClient.signOut()}
          className="flex w-full items-center gap-2 rounded-lg bg-blue-600 p-2 pt-3 hover:bg-blue-500"
        >
          <LogOut size={20} /> Sair
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
