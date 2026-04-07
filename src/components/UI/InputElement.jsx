import { Text, Input } from '@chakra-ui/react';

const InputElement = ({
  children,
  placeholder,
  onChange,
  value,
  required,
  type,
}) => {
  return (
    <>
      <Text
        position={'relative'}
        // mt={'5px'}
        fontWeight={400}
        fontSize="14px"
        color={'#4B525A'}
      >
        {children}
        <Text color={'#EF2020'} position={'absolute'} as={'span'}>
          {required ? '*' : ''}
        </Text>
      </Text>
      <Input
        mt={'8px'}
        type={type || 'text'}
        color={'#4B525A'}
        w={'100%'}
        bg={'#F4F5F7'}
        borderRadius={'16px'}
        padding="16px"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default InputElement;
