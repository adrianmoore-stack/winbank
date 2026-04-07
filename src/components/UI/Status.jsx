import { Text, Icon } from '@chakra-ui/react';

const Status = ({ children, bh, mh, color }) => {
  return (
    <Text
      bg={'#F1F8F2'}
      w={'fit-content'}
      h={{ base: bh, md: mh }}
      border={`1.5px solid ${color}`}
      fontSize={{ base: '12px', md: '14px' }}
      lineHeight={{ base: '16px', md: '25px' }}
      px={'12px'}
      py={{ base: '4px', md: '0' }}
      borderRadius={'30px'}
      color={color}
    >
      <Icon mb={{ base: '3px', md: '2px' }} viewBox="0 0 200 200" color={color}>
        <path
          fill="currentColor"
          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
        />
      </Icon>{' '}
      {children}
    </Text>
  );
};

export default Status;
