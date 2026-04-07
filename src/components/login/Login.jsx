import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import { context } from '../../store/store';
import LoadingAnimation from '../UI/LoadingAnimation';

const Login = () => {
  const ctx = useContext(context);
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (token) navigate('/dashboard/transactionhistory', { replace: true });
  }, [navigate, token]);

  const login = async () => {
    const response = await ctx.loginHandler();
    if (response?.data?.accessToken)
      navigate('/dashboard/transactionhistory', { replace: true });
  };

  return (
    <>
      {ctx.isLoading && <LoadingAnimation />}
      <Box
        as="section"
        mt={{ base: '24px', md: '' }}
        w="100%"
        bg={'#FFF'}
        px={'16px'}
        pt={'32px'}
        // pb={'40px'}
      >
        <Text
          color={'#0F1011'}
          fontWeight={700}
          fontSize={'24px'}
          lineHeight={'32px'}
        >
          Welcome back
        </Text>
        <Text mt={'4px'} fontSize={'12px'} color={'#4B525A'}>
          Sign into your account
        </Text>
        <Stack mt="40px" spacing={6}>
          <Box>
            <Text>Email</Text>
            <Input
              fontSize={'14px'}
              bg="#F4F5F7"
              p={'14px 12px'}
              color={'#A3A7AB'}
              borderRadius={'4px'}
              type="email"
              placeholder="Your email"
              value={ctx.emailState.value}
              onChange={(e) => ctx.emailInput(e.target.value)}
            />
          </Box>
          <Box>
            <Text>Password</Text>
            <InputGroup>
              <Input
                fontSize={'14px'}
                bg="#F4F5F7"
                p={'14px 12px'}
                color={'#A3A7AB'}
                borderRadius={'4px'}
                type={showPassword ? 'text' : 'password'}
                placeholder="Password (min of 8 characters)"
                value={ctx.passwordState.value}
                onChange={(e) => ctx.passwordInput(e.target.value)}
              />
              <InputRightElement
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <ViewOffIcon /> : <ViewIcon />}
              </InputRightElement>
            </InputGroup>
          </Box>
        </Stack>
        <Text mt="16px" fontSize={'14px'}>
          Forgot your password?{' '}
          <Text color="#0052CC" as="span">
            Reset it here
          </Text>
        </Text>
        <Button
          w="100%"
          mt="32px"
          py={'13px'}
          color={'#FFF'}
          _hover={{ bg: '#0052CC' }}
          bg={'#0052CC'}
          isDisabled={!ctx.formIsValid}
          onClick={() => login()}
        >
          Log in to your account
        </Button>
        <Text
          mt="16px"
          mx={'auto'}
          textAlign={'center'}
          w={'75%'}
          fontSize={'14px'}
          color={'#4B525A'}
        >
          Don’t have an account with Wincres Trust?{' '}
          <Text as="span" color="#0052CC">
            Create an account today
          </Text>
        </Text>
        <Text color={'red'} textAlign={'center'}>
          {ctx.error || ''}
        </Text>
      </Box>
    </>
  );
};

export default Login;
