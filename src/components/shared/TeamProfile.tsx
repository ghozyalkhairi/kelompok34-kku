import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import InstagramIcon from "../icons/InstagramIcon";
import Ghozy from "@/assets/png/ghozy.png";
import Rifky from "@/assets/png/rifky.png";
import Alvi from "@/assets/png/alvi.png";
import Jeki from "@/assets/png/jeki.png";
import Dinda from "@/assets/png/dinda.png";
import Ridha from "@/assets/png/ridha.png";
import Desya from "@/assets/png/desya.png";
import Meli from "@/assets/png/meli.png";
import Erika from "@/assets/png/erika.png";

const teamList = [
  {
    id: 1,
    name: "Jeki Handika",
    pic: Jeki,
    prodi: "Teknik Informatika",
    instagram: "https://www.instagram.com/calljeck77/",
  },
  {
    id: 2,
    name: "Ghozy Alkhairi",
    pic: Ghozy,
    prodi: "Teknik Informatika",
    instagram: "https://www.instagram.com/ghozyalkhairi/",
  },
  {
    id: 3,
    name: "Rahmad M Rifky",
    pic: Rifky,
    prodi: "Teknik Informatika",
    instagram: "https://www.instagram.com/rahmadmrifky/",
  },
  {
    id: 4,
    name: "Alvi Febrian",
    pic: Alvi,
    prodi: "Teknik Informatika",
    instagram: "https://www.instagram.com/afebriiaan/",
  },
  {
    id: 5,
    name: "Ridha Ardilla",
    pic: Ridha,
    prodi: "Manajemen",
    instagram: "https://www.instagram.com/ridhaardilla/",
  },
  {
    id: 6,
    name: "Desya Prasasni",
    pic: Desya,
    prodi: "Manajemen",
    instagram: "https://www.instagram.com/dsyaprssn/",
  },
  {
    id: 7,
    name: "Dinda Pratiwi",
    pic: Dinda,
    prodi: "Manajemen",
    instagram: "https://www.instagram.com/dndapratiwii/",
  },
  {
    id: 8,
    name: "Meli Maria",
    pic: Meli,
    prodi: "Pendidikan Biologi",
    instagram: "https://www.instagram.com/melimria1107/",
  },
  {
    id: 9,
    name: "Erika Oktaviona",
    pic: Erika,
    prodi: "Pendidikan Biologi",
    instagram: "https://www.instagram.com/erikaaoktaaa/",
  },
];

const TeamProfile: FC = () => {
  return (
    <>
      <Box
        w="100%"
        mt="4"
        display={{
          base: "block",
          md: "none",
        }}
      >
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          showIndicators={true}
          showArrows={true}
          interval={4000}
          swipeable={true}
        >
          {teamList.map((team) => (
            <Box
              px="4"
              w="100%"
              borderRadius={10}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              key={team.id}
            >
              <Box w="100%" h="400px" position="relative">
                <Image
                  src={team.pic}
                  alt={team.name}
                  quality={100}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </Box>
              <Box
                w="100%"
                bg="brand.secondary"
                borderRadius={10}
                py="4"
                color="brand.black"
                position="relative"
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mt="2"
                  position="absolute"
                  top="0"
                  right="2"
                >
                  <a href={team.instagram} target="_blank">
                    <InstagramIcon width={30} height={30} />
                  </a>
                </Box>
                <Text fontWeight="bold" fontSize="24">
                  {team.name}
                </Text>
                <Text fontWeight="semibold" fontSize="16">
                  {team.prodi}
                </Text>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
      <Box
        w="100%"
        mt="4"
        display={{
          base: "none",
          md: "block",
        }}
      >
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          showIndicators={true}
          showArrows={true}
          interval={4000}
        >
          {teamList.map((team) => (
            <Box
              px="4"
              w="100%"
              borderRadius={10}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              key={team.id}
            >
              <Image
                src={team.pic}
                alt={team.name}
                width={400}
                height={400}
                quality={100}
              />

              <Box
                w="100%"
                bg="brand.secondary"
                borderRadius={10}
                py="4"
                color="brand.black"
              >
                <Text fontWeight="bold" fontSize="24">
                  {team.name}
                </Text>
                <Text fontWeight="semibold" fontSize="16">
                  {team.prodi}
                </Text>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default TeamProfile;
