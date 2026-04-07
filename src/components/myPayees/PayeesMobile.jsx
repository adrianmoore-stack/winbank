import {
  Text,
  Card,
  CardBody,
  Avatar,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { More, Send2, Trash, User } from 'iconsax-react';
import { useNavigate } from 'react-router-dom';

const PayeesMobile = ({ payee, deleteModalHandler }) => {
  const navigate = useNavigate();

  const payBeneficiary = (path) => {
    navigate(`/pay&transfer/${path}transfer/initializetransaction`);
  };

  return (
    <Card boxShadow={'none'} mb={'16px'} py={'20px'} px={'16px'}>
      <HStack>
        <Avatar
          bg={'#F1F3F6'}
          size="md"
          icon={<User color={'#0052CC'} />}
          src={''}
        />
        <CardBody w={'200px'} p={0} pl={'5px'}>
          <Text
            sx={{
              fontWeight: 700,
              color: '#1B1E21',
            }}
          >
            {payee.name}
          </Text>
          <Text color={'#4B525A'} mt={'5px'}>
            {payee.bankName}
          </Text>
          <Text
            bg={'#F0F0F1'}
            mt={'5px'}
            w={'fit-content'}
            fontSize={'14px'}
            px={'8px'}
            py={'8px'}
            color={'#1B1E21'}
            borderRadius={'15px'}
          >
            {payee.transferType}
          </Text>
        </CardBody>
        <Menu>
          <MenuButton
            w={'50px'}
            h={'35px'}
            bg={'transparent'}
            borderRadius={'50px'}
            as={IconButton}
            transform={'rotate(90deg)'}
            icon={<More />}
          />
          <MenuList pl={'9px'}>
            <MenuItem
              fontSize={'14px'}
              color={'#4B525A'}
              h={'48px'}
              lineHeight={'20px'}
              onClick={() => {
                localStorage.setItem('beneficiary', JSON.stringify(payee));
                payBeneficiary(payee.transferType);
              }}
            >
              <Send2 />
              <Text ml={'10px'}>Make a transfer</Text>
            </MenuItem>
            <MenuItem
              fontSize={'14px'}
              color="#F03737"
              h={'48px'}
              lineHeight={'20px'}
              onClick={() => {
                localStorage.setItem('beneficiaryId', payee._id)
                deleteModalHandler((prev) => !prev);
              }}
            >
              <Trash />
              <Text ml={'10px'}>Delete</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Card>
  );
};

export default PayeesMobile;
