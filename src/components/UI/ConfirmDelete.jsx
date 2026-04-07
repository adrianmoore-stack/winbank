import {
  Box,
  Text,
  HStack,
  IconButton,
  Image,
  calc,
  Button,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import deletePic from '../Assets/delete.svg';

const ConfirmDelete = ({ toggleDeleteHandler, deleteBeneficiaryHandler }) => {
  const beneficiaryId = localStorage.getItem('beneficiaryId');

  return (
    <Box
      as="section"
      w={{ base: '90%', md: '50%' }}
      top={{
        base: calc('50vh').subtract('250px').toString(),
        md: calc('50vh').subtract('345px').toString(),
      }}
      left={{ base: '5%', md: '25%' }}
      bg={'#FFF'}
      position={'fixed'}
      zIndex={7}
    >
      <HStack
        p={'24px 24px'}
        borderBottom="1px Solid #F4F5F7"
        justifyContent={'space-between'}
      >
        <Text fontSize={'24px'} fontWeight={700} color={'#1B1E21'}>
          Delete
        </Text>
        <IconButton
          onClick={() => {
            localStorage.removeItem('beneficiaryId');
            toggleDeleteHandler((prev) => !prev);
          }}
          bg={'transparent'}
          icon={<CloseIcon />}
        />
      </HStack>
      <Box as="section" mt="24px" pb={{ base: '40px', md: '56px' }} bg={'#FFF'}>
        <Box pt={{ base: '42px', md: '64px' }}>
          <Box
            mx={'auto'}
            display="flex"
            justifyContent={'center'}
            alignItems={'center'}
            bg="#F4F5F7"
            borderRadius={'50%'}
            w={{ base: '90px', md: '178px' }}
            h={{ base: '90px', md: '178px' }}
          >
            <Image w={'100%'} h={'100%'} src={deletePic} alt="delete logo" />
          </Box>
        </Box>
        <Box
          mx={'auto'}
          mt={{ base: '24px', md: '43px' }}
          w={{ base: '90%', md: '70%' }}
          textAlign={'center'}
        >
          <Text
            color={'#06060B'}
            fontSize={{ base: '20px', md: '24px' }}
            fontWeight={700}
            lineHeight={'32px'}
          >
            Are you sure you want to delete payee?
          </Text>
          <Text
            mt="8px"
            fontSize={{ base: '12px', md: '14px' }}
            fontWeight={400}
            lineHeight={{ base: '16px', md: '24px' }}
            color={'#666481'}
          >
            You can always re-add the payee anytime you wish
          </Text>
        </Box>
        <Box mt="40px" mx={{ base: '10%', md: '64px' }}>
          <Button
            fontSize={'14px'}
            color={'#FFF'}
            bg={'#EF2020'}
            w="100%"
            py={'16px'}
            onClick={() => deleteBeneficiaryHandler(beneficiaryId)}
          >
            Yes, Delete
          </Button>
          <Button
            bg="#FFF"
            border="1px solid #F4F5F7"
            fontSize={'14px'}
            mt="20px"
            w="100%"
            py={'16px'}
            onClick={() => {
              localStorage.removeItem('beneficiaryId');
              toggleDeleteHandler((prev) => !prev);
            }}
          >
            No, Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ConfirmDelete;
