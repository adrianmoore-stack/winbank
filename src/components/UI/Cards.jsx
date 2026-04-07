import { Checkbox, Text, GridItem, Flex } from '@chakra-ui/react';

const Cards = ({ children, number, isChecked }) => {
  return (
    <Flex
      bg={'#FFF'}
      py={'24px'}
      px={{ base: '16px', md: '32px' }}
      borderRadius={{ base: '0', md: '16px' }}
      w={'100%'}
      justifyContent={'space-between'}
      gap={4}
      flexDirection={{ base: 'column', md: 'row-reverse' }}
    >
      <GridItem display={'flex'} justifyContent={'center'}>
        <Checkbox size={'md'} isChecked={isChecked} />
        {/* <input
          type='checkbox'
          style={{
            accentColor: '#1DD435',
            backgroundColor: '#FFF',
            width: '24px',
            height: '24px',
            color: 'white',
            position: 'relative',
            border: '1px solid white',
            borderRadius: '100px',
          }}
        /> */}
      </GridItem>
      <GridItem
        display={'flex'}
        gap={2}
        flexDirection={'column'}
        justifyContent="center"
      >
        <Text
          display={{ base: 'none', md: 'block' }}
          fontSize={'14px'}
          fontWeight={700}
          color={'#A3A7AB'}
        >
          Step {number}
        </Text>
        <Text
          color={'#1B1E21'}
          fontSize={{ base: '12px', md: '18px' }}
          fontWeight={400}
          textAlign={'center'}
        >
          {children}
        </Text>
      </GridItem>
    </Flex>
  );
};

export default Cards;
