import { FC, PropsWithChildren } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box bg="brand.black" minH="100vh" w="100%" p="4">
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default MainLayout;
