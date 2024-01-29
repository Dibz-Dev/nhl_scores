import { Standings } from "./ui/standings";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-10">
      <Standings />
    </main>
  );
}
