"use client";

import Image from "next/image";
import { authClient } from "../lib/auth-client";

export default function Home() {
  const { data: session } = authClient.useSession();

  if (!session?.user) {
    return (
      <div className="flex min-h-screen flex-col justify-center px-10 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="space-y-4 md:w-1/2">
          <h1 className="text-2xl font-bold md:text-4xl">
            Deseja facilidade para gestão de estoque?
          </h1>
          <p className="text-lg md:text-xl">
            Experimente nosso sistema de gestão
            <br /> de estoque e tenha mais controle sobre seus produtos.
          </p>
        </div>

        <div className="mt-8 flex justify-start md:mt-0 md:w-1/2 md:justify-end">
          <Image src="/celular.png" alt="Celular" width={300} height={300} />
        </div>
      </div>
    );
  }

  return <h1 className="text-red-500">Hello World</h1>;
}
