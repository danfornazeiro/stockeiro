"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = () => {
  const { data: session } = authClient.useSession();

  return (
    <header className="flex h-20 w-full items-center justify-between bg-black px-6 text-white shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={75} height={75} />
        </Link>
      </div>

      {/* Sessão */}
      {session?.user ? (
        <div className="flex items-center gap-4">
          <Link href="/account">
            <Avatar className="h-10 w-10 text-black">
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

          <Button onClick={() => authClient.signOut()}>sair</Button>
        </div>
      ) : (
        <div className="flex gap-4">
          <Button asChild className="">
            <Link href="/authentication/sign-up">Cadastrar-se</Link>
          </Button>

          <Button
            asChild
            className="border border-white bg-white text-black transition-colors hover:bg-gray-100"
          >
            <Link href="/authentication/sign-in">Entrar</Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
