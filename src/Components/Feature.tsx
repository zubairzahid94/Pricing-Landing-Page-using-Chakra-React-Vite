import { HStack, Text, Icon, StackProps, Box } from "@chakra-ui/react";
import { ElementType } from "react";
import {
  MoneyBackIcon,
  HassleFreeIcon,
  MonthlySubscriptionIcon,
} from "../Icons/Icons";

interface FeatureProps extends StackProps {
  icons: ElementType;
}

function Feature(props: FeatureProps) {
  const { icons, children, ...rest } = props;
  return (
    <HStack {...rest} spacing={"24px"}>
      <Icon as={icons} boxSize={"48px"}></Icon>
      <Text fontSize={"18px"} fontWeight={"600"}>
        {children}
      </Text>
    </HStack>
  );
}

export function Features() {
  return (
    <Box maxW={"1024px"} m={"auto"} pt={"24px"}>
      <HStack
        px={"48px"}
        // spacing={"20px"}
        flexDirection={["column", "column", "row"]}
        alignItems={["center", "center", "flex-start"]}
        alignContent={["center", "center", "flex-start"]}
      >
        <Feature icons={MoneyBackIcon}>
          30 Days Back Money Back Gurantee
        </Feature>
        <Feature icons={HassleFreeIcon}>
          No Setup free 100 % Hassle free
        </Feature>
        <Feature icons={MonthlySubscriptionIcon}>
          30 Days Back Money Back Gurantee
        </Feature>
      </HStack>
    </Box>
  );
}
