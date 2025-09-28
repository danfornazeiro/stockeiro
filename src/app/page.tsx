"use client";

import Image from "next/image";
import { authClient } from "../lib/auth-client";

export default function Home() {
  const { data: session } = authClient.useSession();

  if (!session?.user) {
    return (
      <div className="flex min-h-screen flex-col justify-center px-10 md:flex-row md:items-center md:justify-between md:gap-4">
        {/* Reduzi o gap de 8 para 4 */}

        <div className="space-y-4 md:w-1/2">
          <h1 className="text-3xl font-bold md:text-4xl">
            Deseja facilidade para gestão de estoque?
          </h1>
          <p className="text-2xl md:text-xl">
            Experimente nosso sistema de gestão
            <br /> de estoque e tenha mais controle sobre seus produtos.
          </p>
        </div>

        <div className="mt-4 flex justify-start md:mt-0 md:w-1/2 md:justify-end">
          {/* Reduzi mt-8 para mt-4 */}
          <Image src="/celular.png" alt="Celular" width={500} height={500} />
        </div>
      </div>
    );
  }

  return <h1 className="text-red-500">Hello World</h1>;
}
