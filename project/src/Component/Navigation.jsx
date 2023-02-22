import React from 'react';
import { Box, Flex, Image, Input, InputGroup, InputRightElement, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
//import {useHistory} from "react-router-dom";

function Navigation() {
  // const history = useHistory();

  // const handleSignInClick = () => {
  //   history.push('/signin');
  // }

  return (
    <Flex as="nav" alignItems="center" justify="space-between" wrap="wrap" p="6" bg="black" color="white">
      <Flex alignItems="center" mr="5">
        <Image src="unwieldy-neck-928\project\src\Component\SHOP MART.png" alt="Logo" boxSize="40px" maxW="40px" />
        {/* <Box ml="3">My Site</Box> */}
      </Flex>
      <Box display={{ base: 'none', md: 'block', color:"white" }}>
        <InputGroup >
          <Input placeholder="Search" />
          <InputRightElement>
            <Button colorScheme="teal"  size="sm" aria-label="Search" color="white">
              <FaSearch />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
      <Box display={{ base: 'none', md: 'block' }}>
        <Button colorScheme="teal"  variant="outline" mr="4" >Sign In</Button>
        <Button colorScheme="teal" color="white" variant="outline">Sign Up</Button>
      </Box>
      <Box display={{ base: 'block', md: 'none' }}>
        <Menu>
          <MenuButton as={Button} variant="ghost" mr="2">
            Menu
          </MenuButton>
          <MenuList>
            <MenuItem>Sign In</MenuItem>
            <MenuItem>Sign Up</MenuItem>

          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}

export default Navigation;
