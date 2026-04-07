import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Grid,
  GridItem,
  Box,
  Text,
  HStack,
  Button,
  FormControl,
  FormLabel,
  Switch,
} from '@chakra-ui/react';
import InputElement from '../UI/InputElement';

const SecurityPreference = () => {
  const { updatePassword } = useOutletContext();
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const updatePasswordHandler = async () => {
    try {
      await updatePassword({ currentPassword, password, passwordConfirm });
      setCurrentPassword('');
      setPassword('');
      setPasswordConfirm('');
    } catch (error) {
      console.log(error);
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
            Security preferences
          </Text>
          <Text mt={'10px'} lineHeight={'24px'}>
            Enhance your account protection by easily adjusting your security
            settings to suit your needs.
          </Text>
        </GridItem>
        <GridItem colSpan={3}>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" fontWeight={700} flex="1" textAlign="left">
                    Change password
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <InputElement
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  value={currentPassword}
                  placeholder={'******'}
                >
                  Current password
                </InputElement>
                <Box mt={'20px'}>
                  <InputElement
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder={'******'}
                  >
                    New password
                  </InputElement>
                  <Text fontSize={'14px'}>
                    Your new password must be greater or equal to 8 characters
                  </Text>
                </Box>
                <Box mt={'20px'}>
                  <InputElement
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    value={passwordConfirm}
                    placeholder={'******'}
                  >
                    Confirm password
                  </InputElement>
                  <Text fontSize={'14px'}>Password must be the same</Text>
                </Box>
                <HStack mt={'16px'} justifyContent={'flex-end'}>
                  <Button
                    p={'16px 40px'}
                    fontSize={'12px'}
                    bg={'#0052CC'}
                    color={'#FDFDFD'}
                    onClick={() => updatePasswordHandler()}
                  >
                    Save changes
                  </Button>
                </HStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </GridItem>
      </Grid>
      <Grid
        gap={{ base: 6, md: 4 }}
        mt={'20px'}
        alignItems={'center'}
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
            Passcode
          </Text>
          <Text mt={'10px'} lineHeight={'24px'}>
            Set up a strong and personalized passcode to ensure the utmost
            security for your account.
          </Text>
        </GridItem>
        <GridItem colSpan={3}>
          <HStack border={'1px solid #F4F6F7'} py={'20px'} px={'20px'}>
            <FormControl
              display="flex"
              alignItems="center"
              justifyContent={'space-between'}
            >
              <FormLabel htmlFor="email-alerts" mb="0">
                Passcode
              </FormLabel>
              <Switch colorScheme="blue" id="email-alerts" />
            </FormControl>
          </HStack>
        </GridItem>
      </Grid>
      <Grid
        gap={{ base: 6, md: 4 }}
        mt={'20px'}
        alignItems={'center'}
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
            Touch ID
          </Text>
          <Text mt={'10px'} lineHeight={'24px'}>
            Enable Touch ID for a seamless and secure login experience.
          </Text>
        </GridItem>
        <GridItem colSpan={3}>
          <HStack border={'1px solid #F4F6F7'} py={'20px'} px={'20px'}>
            <FormControl
              display="flex"
              alignItems="center"
              justifyContent={'space-between'}
            >
              <FormLabel htmlFor="email-alerts" mb="0">
                Touch ID
              </FormLabel>
              <Switch colorScheme="blue" id="email-alerts" />
            </FormControl>
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default SecurityPreference;
