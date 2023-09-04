import { Box, Heading, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Box pb={"115px"} as="section">
      <Box
        color={"gray.50"}
        bg={"purple.600"}
        pt={"50px"}
        pb={"100px"}
        textAlign="center"
        userSelect={"none"}
      >
        <Heading fontWeight={"800"} fontSize={["2xl", "2xl", "5xl"]}>
          Simple pricing for your business
        </Heading>
        <Text fontWeight={"500"} fontSize={["lg", "lg", "2xl"]}>
          Plans that are carefully crafted to suit your business
        </Text>
      </Box>
    </Box>
  );
}

export default Header;
