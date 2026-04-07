import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Grid,
  GridItem,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import chase from '../Assets/chase.svg';
import boa from '../Assets/boa.svg';
import citi from '../Assets/citi.svg';
import wood from '../Assets/wood.svg';
import pnc from '../Assets/pnc.svg';
import us from '../Assets/us.svg';
import { useNavigate } from 'react-router-dom';

const ChooseInstitution = () => {
  const navigate = useNavigate();

  return (
    <Box w={'100%'} mt={{ base: '24px', md: '60px' }}>
      <Text fontSize={'24px'} fontWeight={700}>
        Choose Institution
      </Text>
      <InputGroup mt={{ base: '16px', md: '24px' }}>
        <Input
          borderRadius={'24px'}
          padding={'12px 16px'}
          bg={'#FFF'}
          type="text"
          placeholder="Search for institution"
        />
        <InputRightElement>
          <Icon as={SearchIcon} />
        </InputRightElement>
      </InputGroup>
      <Box
        w="100%"
        mt={{ base: '24px', md: '32px' }}
        pt={{ base: '32px', md: '40px' }}
        pb={'32px'}
        bg="#FFF"
        borderBottom={'1px solid #F4F5F7'}
      >
        <Grid bg={'#FFF'} gap={4} mx="16px" templateColumns={'repeat(2, 1fr)'}>
          <GridItem
            border={'1px solid #DEDFE0'}
            borderRadius={'16px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            py={{ base: '40px', md: '97px' }}
          >
            <Image
              w="100%"
              h={{ base: '16px', md: '38px' }}
              src={chase}
              alt="chase bank"
            />
          </GridItem>
          <GridItem
            border={'1px solid #DEDFE0'}
            borderRadius={'16px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            py={{ base: '40px', md: '97px' }}
          >
            <Image
              w="100%"
              h={{ base: '16px', md: '38px' }}
              src={citi}
              alt="citi bank"
            />
          </GridItem>
          <GridItem
            border={'1px solid #DEDFE0'}
            borderRadius={'16px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            py={{ base: '40px', md: '97px' }}
          >
            <Image
              w="100%"
              h={{ base: '16px', md: '38px' }}
              src={pnc}
              alt="PNC bank"
            />
          </GridItem>
          <GridItem
            border={'1px solid #DEDFE0'}
            borderRadius={'16px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            py={{ base: '40px', md: '97px' }}
          >
            <Image
              w="100%"
              h={{ base: '16px', md: '38px' }}
              src={us}
              alt="US bank"
            />
          </GridItem>
          <GridItem
            border={'1px solid #DEDFE0'}
            borderRadius={'16px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            py={{ base: '40px', md: '97px' }}
          >
            <Image
              w="100%"
              h={{ base: '16px', md: '38px' }}
              src={boa}
              alt="bank of america"
            />
          </GridItem>
          <GridItem
            border={'1px solid #DEDFE0'}
            borderRadius={'16px'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            py={{ base: '40px', md: '97px' }}
          >
            <Image
              w="100%"
              h={{ base: '16px', md: '38px' }}
              src={wood}
              alt="wood forest bank"
            />
          </GridItem>
        </Grid>
        <Box mt={'32px'} pl={{ base: '16px', md: '112px' }}>
          <Button
            color={'#FFF'}
            fontSize={'14px'}
            bg="#0052CC"
            px={'40px'}
            py={'16px'}
            onClick={() => navigate('initializetransaction')}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ChooseInstitution;
