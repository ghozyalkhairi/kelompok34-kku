import { NextPage } from "next";
import Head from "next/head";
import MainLayout from "@/components/layout/MainLayout";
import OurProjects from "@/components/shared/OurProjects";
import ProjectList from "@/components/shared/ProjectList";

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
        <OurProjects />
        <ProjectList />
      </MainLayout>
    </>
  );
};

export default Home;
