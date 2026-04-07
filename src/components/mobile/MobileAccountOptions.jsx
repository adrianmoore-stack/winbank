// import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  HStack,
  Button,
  Text,
  Avatar,
  Box,
  Flex,
} from '@chakra-ui/react';
import logo from '../Assets/logo.svg';

const MobileAccountOptions = ({ width, my }) => {
  const accountType = localStorage.getItem('accountType') || 'business';

  return (
    <Flex as={'section'} my={my} justifyContent={'center'}>
      <Menu>
        <MenuButton
          w={width}
          h={'72px'}
          borderRadius={'16px'}
          as={Button}
        >
          <HStack gap={4}>
            <Avatar bg="white" size={'sm'} src={logo} />
            <Box>
              <Text
                color={'#1B1E21'}
                fontWeight={700}
                fontSize={'12px'}
                lineHeight={'16px'}
              >
                {accountType === 'undefined'
                  ? 'loading'
                  : accountType?.split(' ')[0]}
              </Text>
              <Text
                fontSize={'12px'}
                fontWeight={400}
                lineHeight={'16px'}
                color={'#A3A7AB'}
              >
                checking
              </Text>
            </Box>
          </HStack>
        </MenuButton>
      </Menu>
    </Flex>
  );
};

export default MobileAccountOptions;
