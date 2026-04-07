import { CloseIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Link,
  Flex,
  Button,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Image,
  Text,
  calc,
} from '@chakra-ui/react';
import { createPortal } from 'react-dom';
import checkmark from '../Assets/checkmark.svg';
import { AddCircle } from 'iconsax-react';

export const Success = ({ setDisplay, addedPayeeData }) => {
  const navigate = useNavigate();
  const beneficiary = JSON.parse(localStorage.getItem('beneficiary'));

  return (
    <Grid
      bg={'#FFF'}
      position={'fixed'}
      borderRadius={'8px'}
      templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
      templateRows={{ base: '1fr', md: 'repeat(8, 1fr)' }}
      top={{ base: calc('50vh').subtract('270px').toString(), md: '10%' }}
      left={{ base: '5%', md: '15%' }}
      zIndex={7}
      w={{ base: '90%', md: '70%' }}
    >
      <GridItem
        colStart={{ md: 2 }}
        rowStart={{ md: 1 }}
        rowEnd={{ md: 2 }}
        w={'100%'}
      >
        <HStack
          borderBottom={'1px solid #F4F5F7'}
          px={'16px'}
          py={'16px'}
          alignItems={'center'}
          justifyContent={'space-between'}
          gap={4}
        >
          <Text fontSize={{ base: '20px', md: '24px' }} fontWeight={700}>
            Payee details
          </Text>
          <IconButton
            bg={'#FFF'}
            icon={<CloseIcon />}
            onClick={() => setDisplay((prev) => !prev)}
          />
        </HStack>
      </GridItem>
      <GridItem
        display={'flex'}
        alignItems={'center'}
        colStart={{ md: 1 }}
        rowStart={{ md: 1 }}
        rowEnd={{ md: 9 }}
        colEnd={{ md: 2 }}
        bg={{ md: '#F4F5F7' }}
        w={'100%'}
      >
        <Box
          display={'flex'}
          mt={'20px'}
          w={'70%'}
          mx={'auto'}
          flexDirection={'column'}
          alignItems={'center'}
          pb={{ base: '40px', md: '0' }}
          textAlign={'center'}
        >
          <Image
            src={checkmark}
            w={{ base: '52px', md: '104px' }}
            h={{ base: '52px', md: '104px' }}
            alt="success icon"
          />
          <Text fontSize={'24px'} fontWeight={700}>
            Success!
          </Text>
          <Text fontSize={'14px'} color={'#4B525A'}>
            {`You’ve successfully added "${beneficiary?.name}" as a payee.`}
          </Text>
        </Box>
      </GridItem>
      <GridItem
        w={'100%'}
        px={'16px'}
        colStart={{ md: 2 }}
        rowStart={{ md: 2 }}
        rowEnd={{ md: 9 }}
      >
        <Text fontSize={'14px'} fontWeight={700} color={'#1B1E21'}>
          PAYEE INFORMATION
        </Text>
        <Box
          mt={'20px'}
          pb={'20px'}
          borderBottom="1px solid #F4F5F7"
          // templateColumns={'repeat(2, 1fr)'}
          // gap={2}
        >
          <HStack justifyContent={'space-between'}>
            <Text fontSize={'14px'} color="#4B525A">
              Recipient name:
            </Text>
            <Text
              textAlign={'end'}
              fontSize={'14px'}
              fontWeight={700}
              color="#1B1E21"
            >
              {beneficiary?.name}
            </Text>
          </HStack>
          <HStack mt={'16px'} justifyContent={'space-between'}>
            <Text fontSize={'14px'} color="#4B525A">
              Recipient nickname:
            </Text>
            <Text
              textAlign={'end'}
              fontSize={'14px'}
              fontWeight={700}
              color="#1B1E21"
            >
              {beneficiary?.nickName}
            </Text>
          </HStack>
        </Box>
        <Text
          display={{ base: 'none', md: 'block' }}
          mt="20px"
          fontSize={'14px'}
          fontWeight={700}
          color={'#1B1E21'}
        >
          BANK INFORMATION
        </Text>
        <Box
          display={{ base: 'none', md: 'grid' }}
          mt="20px"
          pb={'20px'}
          borderBottom="1px solid #F4F5F7"
          // templateColumns={'repeat(2, 1fr)'}
          // gap={2}
        >
          <HStack mt={'16px'} justifyContent={'space-between'}>
            <Text fontSize={'14px'} color="#4B525A">
              Bank name:
            </Text>
            <Text
              textAlign={'end'}
              fontSize={'14px'}
              fontWeight={700}
              color="#1B1E21"
            >
              {`${beneficiary?.bankName} ${beneficiary?.bankCountry || ''}`}
            </Text>
          </HStack>
          <HStack mt={'16px'} justifyContent={'space-between'}>
            <Text fontSize={'14px'} color="#4B525A">
              Account number:
            </Text>
            <Text
              textAlign={'end'}
              fontSize={'14px'}
              fontWeight={700}
              color="#1B1E21"
            >
              {beneficiary?.accountNumber}
            </Text>
          </HStack>
          <HStack mt={'16px'} justifyContent={'space-between'}>
            <Text fontSize={'14px'} color="#4B525A">
              Wire routing (ABA) number:
            </Text>
            <Text
              textAlign={'end'}
              fontSize={'14px'}
              fontWeight={700}
              color="#1B1E21"
            >
              {beneficiary?.routingNumber}
            </Text>
          </HStack>

          <HStack mt={'16px'} justifyContent={'space-between'}>
            <Text fontSize={'14px'} color="#4B525A">
              Payment method:
            </Text>
            <Text
              textAlign={'end'}
              fontSize={'14px'}
              fontWeight={700}
              color="#1B1E21"
            >
              {beneficiary?.transferType}
            </Text>
          </HStack>
        </Box>
        <Box
          display={{ base: 'none', md: 'flex' }}
          gap={3}
          mt={'16px'}
          borderBottom={'1px solid #F4F5F7'}
          py="12px"
          px="14px"
          color="#563600"
          bg={'#FEF5F6'}
          border="1px solid #F59B00"
          borderRadius={'8px'}
          fontSize={'14px'}
        >
          <WarningTwoIcon mt="7px" w={'16px'} h={'16px'} color="#F59B00" />
          <Text display={'inline-block'}>
            Verify payee details for accuracy when adding a new payee. We are
            not responsible for errors or consequences arising from incorrect
            information. Contact support if there are any issues.
          </Text>
        </Box>
        <Flex my="30px" alignItems={'center'} gap={4} bg={'#FFF'}>
          <Button
            py="16px"
            borderRadius="8px"
            fontSize="14px"
            px="40px"
            bg={'#0052CC'}
            color="#FFF"
            onClick={() => navigate('initializetransaction')}
          >
            Proceed
          </Button>
          <Link
            as={NavLink}
            gap="3px"
            w={'fit-content'}
            ml={'30px'}
            color={'#0052CC'}
            textDecoration="underline"
            to="/pay&transfer/wiretransfer"
            onClick={() => {
              setDisplay((prev) => !prev);
              localStorage.removeItem('transData');
            }}
          >
            <AddCircle />
            Add another payee
          </Link>
        </Flex>
      </GridItem>
    </Grid>
  );
};

const AddPayeeSuccess = ({ setDisplay }) => {
  const addedPayeeData = JSON.parse(localStorage.getItem('transData'));

  return createPortal(
    <Success setDisplay={setDisplay} addedPayeeData={addedPayeeData} />,
    document.getElementById('menu')
  );
};

export default AddPayeeSuccess;
