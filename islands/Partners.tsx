import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/lemon-2.tsx";
import Card from "../components/Card.tsx";

export default function Partners() {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Components", href: "/components" },
    { name: "Docs", href: "/docs" },
  ];

  return (
    <div class="bg-black w-full max-w-screen-lg py-6 md:px-8 flex flex-col md:flex-row gap-4">
      <h6 class="text-2xl font-bold text-white">Partners</h6>
      {new Array(2).fill(0).map((_, i) => {
        return <Card />;
      })}
    </div>
  );
}
