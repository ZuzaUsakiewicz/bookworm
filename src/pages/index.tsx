import Head from "next/head";
import { Auth } from "@supabase/auth-ui-react";
import { useRouter } from "next/router";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import {
  useSupabaseClient,
  useSession,
  useUser,
} from "@supabase/auth-helpers-react";
import { Container, Stack, Box, Card, Typography } from "@mui/material";
import { useEffect } from "react";
import Image from "next/image";
import bookIcon from "../../public/Book3dIcon.svg";

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/profile");
    }
  });

  return (
    <>
      <Head>
        <title>Bookworm - books managament app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fixed maxWidth="md" sx={{ height: "100vh" }}>
        <Typography variant="h2" component="h1">
          Bookworm
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }}>
          <Box m="auto">
            <Image src={bookIcon} alt="book icon" width="300" height="300" />
          </Box>
          <Card elevation={3} sx={{ minWidth: "300px" }}>
            <Container maxWidth="xs">
              {!session ? (
                <Auth
                  supabaseClient={supabase}
                  appearance={{ theme: ThemeSupa }}
                  theme="light"
                  providers={[]}
                />
              ) : (
                <p>Loading...</p>
              )}
            </Container>
          </Card>
        </Stack>
      </Container>
    </>
  );
}
