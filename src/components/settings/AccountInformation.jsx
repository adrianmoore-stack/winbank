import {
  Box,
  Text,
  Grid,
  GridItem,
  Accordion,
  AccordionButton,
  HStack,
  Button,
  AccordionPanel,
  AccordionIcon,
  AccordionItem,
} from '@chakra-ui/react';
import InputElement from '../UI/InputElement';
import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

const AccountInformation = () => {
  const { storedUser, updateMe, LogoutHandler } = useOutletContext();
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const uploadHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const updateUser = async (val) => {
    const formData = new FormData();
    formData.append('photo', val);
    try {
      await updateMe(formData);
    } catch (error) {
      if (error.message === 401) {
        LogoutHandler(navigate);
      }
    }
  };

  return (
    <Box mt={'24px'} bg={'#FFF'} pt={'32px'} pb={'80px'} px={'16px'}>
      <Grid
        gap={{ base: 6, md: 4 }}
        borderBottom={'1px solid #F4F6F7'}
        templateColumns={{ base: '1fr', md: 'repeat(5, 1fr)' }}
      >
        <GridItem colSpan={2}>
          <Text
            fontWeight={700}
            lineHeight={'20px'}
            fontSize={'14px'}
            color={'#0F1011'}
          >
            All my checking accounts
          </Text>
          <Text mt={'10px'} lineHeight={'24px'}>
            Easily update your physical address for your business checking
            account.
          </Text>
        </GridItem>
        <GridItem colSpan={3}>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" fontWeight={700} flex="1" textAlign="left">
                    Update residential address
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <InputElement placeholder={`${storedUser.address}`}>
                  New Address
                </InputElement>
                <Box mt={'20px'}>
                  <Text mb={'8px'}>Photo upload</Text>
                  <input type="file" onChange={(e) => uploadHandler(e)} />
                  {/* <InputElement
                    onChange={(e) => setFile(e.target.files[0])}
                    type={'file'}
                  >
                    Profile Photo
                  </InputElement> */}
                </Box>
                <HStack mt={'16px'} justifyContent={'flex-end'}>
                  <Button
                    p={'16px 40px'}
                    fontSize={'12px'}
                    bg={'#0052CC'}
                    color={'#FDFDFD'}
                    onClick={() => updateUser(image)}
                  >
                    Save changes
                  </Button>
                </HStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default AccountInformation;
