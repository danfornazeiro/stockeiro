"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const AccountPage = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  if (!session?.user) {
    router.push("/");
  }
  return (
    <div>
      <Button onClick={() => authClient.signOut()}>Sign out</Button>
    </div>
  );
};

export default AccountPage;
