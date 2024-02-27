import {Navigation} from "@/app/components/Navigation";
import {baseApiUrl} from "@/api";

export default async function Home() {
  const res = await fetch(`${baseApiUrl}/api/trips`,  {next: { tags: ['trips'] } });
  const cards = await res.json();
  return (
    <main className="w-screen h-screen overflow-hidden">
      <Navigation cards={cards}/>
    </main>
  );
}
