"use client";

import { Button } from "@/components/ui/button";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AccountPage = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  if (!session?.user) {
    router.push("/");
  }
  return (
    <div className="h-screen w-screen">
      <div className="p-5">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Tipo de conta" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="funcionario">Funcionário</SelectItem>
            <SelectItem value="empresa">Empresa</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default AccountPage;
