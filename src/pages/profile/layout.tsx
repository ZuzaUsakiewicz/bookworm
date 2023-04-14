import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@supabase/auth-helpers-react";
import Navbar from "@/components/Navbar";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};
export default function Layout({ children }: Props) {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  });
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
