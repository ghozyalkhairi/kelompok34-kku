import { FC } from "react";
import { Box, Text, Divider } from "@chakra-ui/react";

const Footer: FC = () => {
  return (
    <Box w="100%" mt="4">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p="4"
      >
        <Text color="brand.fadedWhite" fontSize="14" textAlign="center">
          © KKU 2023 Kelompok 34 | UM Pontianak
        </Text>
        <Text color="brand.fadedWhite" fontSize="14" textAlign="center">
          Designed and Coded with ❤️ by Ghozy Alkhairi
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
