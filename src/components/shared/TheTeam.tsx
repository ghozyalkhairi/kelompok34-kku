import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import TeamPicture from "@/assets/png/theteam.png";
import LineDivider from "./LineDivider";

const TheTeam: FC = () => {
  return (
    <Box w="100%">
      <Image
        src={TeamPicture}
        alt="The Team"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <LineDivider />
    </Box>
  );
};

export default TheTeam;
