import {
  Card,
  Box,
  HStack,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Text,
} from '@chakra-ui/react';

const Invest = ({ investing }) => {
  return (
    <Card boxShadow={'none'}>
      <CardHeader p="0">
        <Image
          src={`../../../images/${investing.image}`}
          w="100%"
          alt="images of investment"
        />
      </CardHeader>
      <CardBody p="0" mt={{ base: '8px', md: '12px' }}>
        <Text
          fontSize={{ base: '14px', md: '18px' }}
          color={'#4B525A'}
          fontWeight={700}
        >
          {investing.name}
        </Text>
        <Text fontSize={'12px'}>
          <Text as={'span'} color="#1DD435">
            {`${investing.profit}% `}
          </Text>
          {`returns in ${investing.duration} months`}
        </Text>
        <HStack gap={4} mt={'12px'}>
          <Box>
            <Text
              color={'#4B525A'}
              fontSize={{ base: '14px', md: '18px' }}
              fontWeight={700}
            >
              {`$${investing.price}`}
            </Text>
            <Text color={'#A3A7AB'} fontSize={'12px'}>
              Per unit
            </Text>
          </Box>
          <Box>
            <Text
              color={'#4B525A'}
              fontSize={{ base: '14px', md: '18px' }}
              fontWeight={700}
            >
              {investing.investors}
            </Text>
            <Text color={'#A3A7AB'} fontSize={'12px'}>
              Investors
            </Text>
          </Box>
        </HStack>
      </CardBody>
      <CardFooter p={'0'} mt={'16px'}>
        <Button
          fontSize={'14px'}
          p={'8px 12px'}
          bg={'#FCEEEE'}
          color={'#EF2020'}
        >
          {investing.availability}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Invest;
