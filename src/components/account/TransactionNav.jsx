import { Grid, GridItem, Text, HStack, Button } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const TransactionNav = ({
  children,
  setPageNumber,
  numberOfPages,
  pageNumber,
}) => {
  return (
    <Grid
      templateColumns="repeat(7, 1fr)"
      gap={4}
      w="100%"
      alignItems={'center'}
    >
      <GridItem colSpan={5}>
        <Text
          textAlign={'start'}
          fontWeight={400}
          fontSize="14px"
          color={'#717171'}
        >
          {children}
        </Text>
      </GridItem>
      <GridItem colSpan={2}>
        <HStack gap={2} visibility={numberOfPages > 1 ? 'visible' : 'hidden'}>
          <Button
            onClick={() => setPageNumber((prev) => prev - 1)}
            leftIcon={<ArrowBackIcon />}
            isDisabled={pageNumber === 1}
          ></Button>
          <Button
            onClick={() => setPageNumber((prev) => prev + 1)}
            rightIcon={<ArrowForwardIcon />}
            isDisabled={pageNumber === numberOfPages}
          ></Button>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default TransactionNav;
