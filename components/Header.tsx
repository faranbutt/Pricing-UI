import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box pb={'28'} as="section">
    <Box
      as="section"
      textAlign={['left',"left","center"]}
      color="gray.50"
      bg={"purple.600"}
      pt={"90px"}
      pb={"198px"}
      px="8"
    >
      <Heading fontStyle={"normal"} fontWeight="extrabold" fontSize={["3xl", "3xl", "5xl"]}>
        Simple pricing for your business
      </Heading>
      <Text fontStyle={"normal"} fontWeight="medium" fontSize={["lg", "lg","2xl"]} pt="4">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
    </Box>
  );
}
