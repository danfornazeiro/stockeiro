"use client";

import { authClient } from "@/lib/auth-client";

const AccountPage = () => {
  const { data: session } = authClient.useSession();
  return <div></div>;
};

export default AccountPage;
