import {
  Box,
  Flex,
  Button,
  Text,
  HStack,
  Icon,
  Heading,
  StackProps,
  Stack,
} from "@chakra-ui/react";

import { CheckIcons } from "../Icons/Icons";

export const ListItems = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as={"li"} spacing={"20px"} {...rest}>
      <Icon as={CheckIcons} w={"2px"} h={"2"} />
      <Text>{children}</Text>
    </HStack>
  );
};

export function Pricing() {
  return (
    <Box mx={"6"}>
      <Box
        maxW="994px"
        margin="auto"
        mt="-200px"
        bg="white"
        borderRadius="12px"
        overflow="hidden"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box
            bg={"#F0EAFB"}
            p={"30px"}
            alignItems={"center"}
            textAlign={"center"}
            h={"xs"}
          >
            <Text fontSize={"24px"} fontWeight={"800"}>
              Premium PRO
            </Text>
            <Heading as={"h3"} fontSize={"50px"} mt={"2px"}>
              $329
            </Heading>
            <Text
              color={"#171923"}
              fontSize={"18px"}
              fontWeight={500}
              mt={"10px"}
            >
              billed just once
            </Text>
            <Button colorScheme="purple" size={"lg"} w={"282px"} mt={"30px"}>
              Get Started
            </Button>
          </Box>
          <Box p="60px" fontSize={"18px"} textAlign={"left"}>
            <Text>
              Access these features when you buy this promotion package with
              exclusive featueres
            </Text>
            <Stack as={"ul"} mt={"15px"}>
              <ListItems>Product Scraping and Reviews Integration</ListItems>
              <ListItems>Product Scraping and Reviews Integration</ListItems>
              <ListItems>Product Scraping and Reviews Integration</ListItems>
              <ListItems>Product Scraping and Reviews Integration</ListItems>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
