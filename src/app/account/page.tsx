"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const AccountPage = () => {
  const { data: session } = authClient.useSession();
  return (
    <div>
      <Button onClick={() => authClient.signOut()}>Sign out</Button>
    </div>
  );
};

export default AccountPage;
