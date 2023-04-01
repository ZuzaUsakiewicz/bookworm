import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@supabase/auth-helpers-react";

export default function Profile() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  });
  return <div>Profile</div>;
}
