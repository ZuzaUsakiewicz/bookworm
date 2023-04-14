import React from "react";
import { useSupabaseClient, useSession } from "@supabase/auth-helpers-react";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div>
      {session ? (
        <Button variant="contained" onClick={() => supabase.auth.signOut()}>
          Sign out
        </Button>
      ) : null}

      <Link href="/profile">dashboard</Link>
      <Link href="/profile/addBook">add</Link>
      <Link href="/profile/library">your library</Link>
      <Link href="/profile/achievements">achievements</Link>
    </div>
  );
}
