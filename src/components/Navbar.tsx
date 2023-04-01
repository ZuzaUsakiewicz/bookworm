import React from "react";
import { useSupabaseClient, useSession } from "@supabase/auth-helpers-react";
import { Button } from "@mui/material";

export default function Navbar() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div>
      {session ? (
        <Button variant="contained" onClick={() => supabase.auth.signOut()}>
          Sign out
        </Button>
      ) : (
        <Button>sign in</Button>
      )}
    </div>
  );
}
