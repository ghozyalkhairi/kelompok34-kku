import { Box } from "@chakra-ui/react";
import { FC, useState } from "react";
import Image from "next/image";
import Bimbel1 from "@/assets/jpg/bimbel1.jpeg";
import Bimbel2 from "@/assets/jpg/bimbel2.jpeg";
import Bimbel3 from "@/assets/jpg/bimbel3.jpeg";
import Bimbel4 from "@/assets/jpg/bimbel4.jpeg";
import Bimbel5 from "@/assets/jpg/bimbel5.jpeg";
import Bimtek1 from "@/assets/jpg/bimtek1.jpeg";
import Bimtek2 from "@/assets/jpg/bimtek2.jpeg";
import Bimtek3 from "@/assets/jpg/bimtek3.jpeg";
import Bimtek4 from "@/assets/jpg/bimtek4.jpeg";
import Bimtek5 from "@/assets/jpg/bimtek5.jpeg";
import Komposter1 from "@/assets/jpg/komposter1.jpeg";
import Komposter2 from "@/assets/jpg/komposter2.jpeg";
import Komposter3 from "@/assets/jpg/komposter3.jpeg";
import Komposter4 from "@/assets/jpg/komposter4.jpeg";
import Komposter5 from "@/assets/jpg/komposter5.jpeg";
import Singkong1 from "@/assets/jpg/singkong1.jpeg";
import Singkong2 from "@/assets/jpg/singkong2.jpeg";
import Singkong3 from "@/assets/jpg/singkong3.jpeg";
import Singkong4 from "@/assets/jpg/singkong4.jpeg";
import Singkong5 from "@/assets/jpg/singkong5.jpeg";
import WebDev1 from "@/assets/jpg/webdev1.jpeg";
import WebDev2 from "@/assets/jpg/webdev2.jpeg";
import WebDev3 from "@/assets/jpg/webdev3.jpeg";
import WebDev4 from "@/assets/jpg/webdev4.jpeg";
import WebDev5 from "@/assets/jpg/webdev5.jpeg";
import Literasi1 from "@/assets/jpg/literasi1.jpeg";
import Literasi2 from "@/assets/jpg/literasi2.jpeg";
import Literasi3 from "@/assets/jpg/literasi3.jpeg";
import Literasi4 from "@/assets/jpg/literasi4.jpeg";
import Literasi5 from "@/assets/jpg/literasi5.jpeg";
import Investasi1 from "@/assets/jpg/investasi1.jpeg";
import Investasi2 from "@/assets/jpg/investasi2.jpeg";
import Investasi3 from "@/assets/jpg/investasi3.jpeg";
import Investasi4 from "@/assets/jpg/investasi4.jpeg";
import Investasi5 from "@/assets/jpg/investasi5.jpeg";
import ProjectSelector from "./ProjectSelector";

const projects = [
  {
    id: 1,
    title: "Bimbingan Belajar",
    images: [Bimbel1, Bimbel2, Bimbel3, Bimbel4, Bimbel5],
  },
  {
    id: 2,
    title: "Bimbingan Teknis",
    images: [Bimtek1, Bimtek2, Bimtek3, Bimtek4, Bimtek5],
  },
  {
    id: 3,
    title: "Komposter",
    images: [Komposter1, Komposter2, Komposter3, Komposter4, Komposter5],
  },
  {
    id: 4,
    title: "Pengembangan UMKM Singkong",
    images: [Singkong1, Singkong2, Singkong3, Singkong4, Singkong5],
  },
  {
    id: 5,
    title: "Pengembangan Website Rumah Baca Masyarakat Desa Jawa Tengah",
    images: [WebDev1, WebDev2, WebDev3, WebDev4, WebDev5],
  },
  {
    id: 6,
    title: "Peningkatan Literasi dan Numerasi di Sekolah Dasar",
    images: [Literasi1, Literasi2, Literasi3, Literasi4, Literasi5],
  },
  {
    id: 7,
    title: "Penyuluhan Investasi",
    images: [Investasi1, Investasi2, Investasi3, Investasi4, Investasi5],
  },
];

const ProjectList: FC = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  return (
    <Box w="100%" display="flex" flexDir="column" alignItems="center" mt="4">
      <ProjectSelector
        projects={projects}
        setSelectedProject={setSelectedProject}
      />
      <Box
        w="100%"
        mt="4"
        bg="brand.black"
        borderWidth={2}
        borderColor="brand.secondary"
        borderRadius="full"
        overflow="hidden"
      >
        {selectedProject.images.map((image) => (
          <Image
            key={image.src}
            id={image.src}
            src={image.src}
            alt={selectedProject.title}
            width={image.width}
            height={image.height}
            layout="responsive"
            style={{
              marginBottom:
                image ===
                selectedProject.images[selectedProject.images.length - 1]
                  ? ""
                  : "8px",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProjectList;
