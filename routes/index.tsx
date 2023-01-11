import { Head } from "$fresh/runtime.ts";
import Hero from "../islands/Hero.tsx";
import Header from "../islands/Header.tsx";
import Partners from "../islands/Partners.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>It in Dublin</title>
      </Head>
      <Header />
      <Hero />
      <Partners />
    </>
  );
}
