import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/lemon-2.tsx";
import Card from "../components/Card.tsx";


export default function Partners() {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Components", href: "/components" },
    { name: "Docs", href: "/docs" },
  ];


  return (
    <div class="bg-black w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">
      {new Array(10).fill(0).map((_, i) => {
        return <Card/>
      })}
    </div>
  );
}
