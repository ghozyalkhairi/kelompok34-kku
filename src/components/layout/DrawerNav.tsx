import { FC } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Divider,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import Logo from "@/assets/jpg/logo.jpg";
import { Link } from "@chakra-ui/next-js";

interface DrawerNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const DrawerNav: FC<DrawerNavProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full">
      <DrawerOverlay />
      <DrawerContent
        bg="rgba(10, 10, 10, 0.4)"
        backdropFilter="blur(8px)"
        color="brand.primary"
      >
        <DrawerCloseButton />
        <DrawerHeader>
          <Box w="100%" display="flex" justifyContent="center">
            <Image
              src={Logo}
              alt="Study Image"
              width={60}
              height={60}
              style={{
                borderRadius: "100%",
              }}
            />
          </Box>
        </DrawerHeader>

        <DrawerBody>
          <Link href="/" onClick={onClose}>
            <Text fontSize="17" my="2">
              HOME
            </Text>
            <Divider />
          </Link>
          <Link href="/projects" onClick={onClose}>
            <Text fontSize="17" my="2">
              PROJECTS
            </Text>
            <Divider />
          </Link>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerNav;
