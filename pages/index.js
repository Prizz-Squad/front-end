import { ModeToggle } from "@/components/toggles/dark-light-mode";
import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <Button
        onClick={() => {
          router.push("/signup");
        }}
      >
        Sign Up
      </Button>
      <ModeToggle />
    </main>
  );
}
