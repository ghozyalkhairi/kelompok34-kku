import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import LineDivider from "./LineDivider";

const Hero: FC = () => {
  return (
    <Box w="100%" mt="4">
      <Text fontSize="4xl" fontWeight="bold" color="brand.secondary">
        KELOMPOK 34
      </Text>
      <Text fontSize="4xl" fontWeight="bold" color="brand.secondary">
        KKU 2023
      </Text>
      <Text fontSize="2xl" color="brand.primary" fontStyle="italic">
        THE DOCUMENTARY
      </Text>
      <LineDivider />
    </Box>
  );
};

export default Hero;
