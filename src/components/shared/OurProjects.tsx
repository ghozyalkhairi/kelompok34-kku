import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import LineDivider from "./LineDivider";

const OurProjects: FC = () => {
  return (
    <Box w="100%" mt="4">
      <Text fontSize="5xl" fontWeight="bold" color="brand.secondary">
        OUR PROJECTS
      </Text>
      <LineDivider />
    </Box>
  );
};

export default OurProjects;
