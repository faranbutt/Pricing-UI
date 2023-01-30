import { HStack, Text, Icon, StackProps, Box, Flex } from "@chakra-ui/react";
import React, { ElementType } from "react";
import {
  MoneyBackGuranteeIcon,
  SetupFeesIcon,
  NoMonthlySubIcon,
} from "@/Icons/Icons";

export default function Features() {
  return (
    <Box margin="auto" maxW={"1024px"} pt="60px" pb="32px" px={'48px'}>
        <Flex direction={{base:"column", md:"row",lg:"row"}} pl="10px">
          <HStack spacing={"24px"} mb={"20px"}>
            <Icon as={MoneyBackGuranteeIcon} boxSize="48px" />
            <Text>30 days money back Guarantee</Text>
          </HStack>
          <HStack spacing={"24px"} mb={"20px"}>
            <Icon as={SetupFeesIcon} boxSize="48px"/>
            <Text>No setup fees 100% hassle-free</Text>
          </HStack>
          <HStack spacing={"24px"}>
            <Icon as={NoMonthlySubIcon} boxSize="48px"/>
            <Text>No monthly subscription Pay once and for all</Text>
          </HStack>
          </Flex>
    </Box>
  );
}
