import { NextPage } from "next";
import Head from "next/head";
import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/shared/Hero";
import TheTeam from "@/components/shared/TheTeam";
import TeamVideo from "@/components/shared/TeamVideo";
import TeamProfile from "@/components/shared/TeamProfile";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kelompok 34 | KKU 2023 | UM Pontianak</title>
        <meta
          name="description"
          content="Dokumentasi Kegiatan Kelompok 34 KKU 2023 Universitas Muhammadiyah Pontianak"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Hero />
        <TheTeam />
        <TeamVideo />
        <TeamProfile />
      </MainLayout>
    </>
  );
};

export default Home;
