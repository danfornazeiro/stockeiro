"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";

const Header = () => {
  const { data: session } = authClient.useSession();

  return (
    <>
      <header className="flex h-20 w-full items-center justify-between bg-white px-6 text-black">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src="/logo-preta.svg" alt="Logo" width={75} height={75} />
          </Link>
        </div>

        {session?.user ? (
          <div className="flex items-center gap-4">
            <Link href="/account">
              <Avatar className="h-10 w-10">
                <AvatarImage src={session.user.image ?? undefined} />
                <AvatarFallback>
                  {session.user.name?.split(" ")[0]?.[0]}
                  {session.user.name?.split(" ")[1]?.[0]}
                </AvatarFallback>
              </Avatar>
            </Link>
            <span className="hidden font-medium md:block">
              {session.user.name}
            </span>

            <Button
              onClick={() => authClient.signOut()}
              className="border border-gray-300 bg-gray-100 text-black transition-colors hover:bg-gray-200"
            >
              Sair
            </Button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Button
              asChild
              className="bg-blue-600 text-white transition-colors hover:bg-blue-700"
            >
              <Link href="/authentication/sign-up">Cadastrar-se</Link>
            </Button>

            <Button
              asChild
              className="border border-gray-300 bg-white text-black transition-colors hover:bg-black/50 hover:text-white"
            >
              <Link href="/authentication/sign-in">Entrar</Link>
            </Button>
          </div>
        )}
      </header>
      <Separator />
    </>
  );
};

export default Header;
