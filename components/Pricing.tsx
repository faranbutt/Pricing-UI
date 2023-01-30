import React from "react";
import { CheckIcon } from "@/Icons/Icons";
import { Flex, Box, Heading, Text, Button, HStack, StackProps, Icon, Stack} from "@chakra-ui/react";

export const ListItem = (props:StackProps) =>{
  const {children, ...rest} = props
  return (
   <HStack as="li" spacing={'20px'} {...rest} alignItems='start'>
    <Icon as={CheckIcon} w="22px" h={"22px"}/>
    <Text textAlign={['left', 'left', 'center']}>{children}</Text>
   </HStack>
  );
}

export default function Pricing() {
  return (
    <Box>
    <Box mx={{base:"6",lg:"auto"}} maxW="994px" mt={'-256px'} borderRadius='12px' overflow={'hidden'} boxShadow={"0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"}>
      <Flex direction={['column','column','row']}>
        <Box textAlign={'center'} bg="#F0EAFB" p={'60px'}>
          <Text fontSize='24px' fontWeight="940" color="#171923" >Premium PRO</Text>
          <Heading as="h3" font-style={'normal'} fontSize={['5xl', '5xl', "60px"]} fontWeight="extrabold" color="#171923" mt={"4"}>$329</Heading>
          <Text fontStyle={'normal'} fontWeight='medium' fontSize="18px" color="#171923" mt='2'>billed just once</Text>
          <Button bg={'#805AD5'} colorScheme={'purple'} size='lg' w={'282px'} mt={'24px'} fontWeight={700} textColor="#F7FAFC">Get Started</Button>
        </Box>
        <Box p={"60px"} fontSize="18px" fontWeight={'400'} bg="white">
          <Text color={'#2D3748'} textAlign="left">Access these features when you get this pricing package for your 
            business.
          </Text>
          <Stack as="ul" spacing={'16px'} pt={'24px'}>
            <ListItem color={'#2D3748'}>International calling and messaging API</ListItem>
            <ListItem color={'#2D3748'}>Additional phone numbers</ListItem>
            <ListItem color={'#2D3748'}>Automated messages via Zapier</ListItem>
            <ListItem color={'#2D3748'}>24/7 support and consulting</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
    </Box>
  );
}
