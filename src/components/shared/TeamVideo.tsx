import { Box } from "@chakra-ui/react";
import { FC } from "react";
import LineDivider from "./LineDivider";

const TeamVideo: FC = () => {
  return (
    <>
      <Box
        w="100%"
        mt="4"
        display={{
          base: "none",
          md: "block",
        }}
      >
        <iframe
          width="100%"
          height="500px"
          src="https://www.youtube.com/embed/EwT1HYNuy4E?si=I-aQ7l6CgSGANfcG"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <LineDivider />
      </Box>
      <Box
        w="100%"
        mt="4"
        display={{
          base: "block",
          md: "none",
        }}
      >
        <iframe
          width="100%"
          height="300px"
          src="https://www.youtube.com/embed/EwT1HYNuy4E?si=I-aQ7l6CgSGANfcG"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <LineDivider />
      </Box>
    </>
  );
};

export default TeamVideo;
