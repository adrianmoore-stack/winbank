import {
  Box,
  Grid,
  GridItem,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { Check, User } from 'iconsax-react';

const Notes = () => {
  return (
    <Box
      bg={'#FAFAFA'}
      px={{ base: '16px', md: '8%' }}
      py={{ base: '40px', md: '96px' }}
      marginBottom={'115px'}
    >
      <Text color={'#0052CC'} fontSize={'14px'} fontWeight={700}>
        THINGS TO KNOW:
      </Text>
      <Grid
        gap={4}
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        mt={'29px'}
      >
        <GridItem>
          <Text fontWeight={700} fontSize={'20px'}>
            Avoid scams and frauds
          </Text>
          <UnorderedList py={'16px'} ml={0} listStyleType={'none'}>
            <ListItem display={'flex'} gap={6} mb={'18px'}>
              <Check />
              <Box>
                <Text lineHeight={'24px'} color={'#4B525A'}>
                  Be cautious of suspicious communications
                </Text>
              </Box>
            </ListItem>
            <ListItem display={'flex'} gap={6} mb={'18px'}>
              <Check />
              <Box>
                <Text lineHeight={'24px'} color={'#4B525A'}>
                  Verify the source
                </Text>
              </Box>
            </ListItem>
            <ListItem display={'flex'} gap={6} mb={'18px'}>
              <Check />
              <Box>
                <Text lineHeight={'24px'} color={'#4B525A'}>
                  Protect your personal information
                </Text>
              </Box>
            </ListItem>
            <ListItem display={'flex'} gap={6} mb={'18px'}>
              <User />
              <Box>
                <Text lineHeight={'24px'} color={'#4B525A'}>
                  Be cautious of public Wi-Fi
                </Text>
              </Box>
            </ListItem>
            <ListItem display={'flex'} gap={6} mb={'18px'}>
              <Box>
                <Text
                  textDecoration={'underline'}
                  lineHeight={'24px'}
                  color={'#121212'}
                >
                  see more
                </Text>
              </Box>
            </ListItem>
          </UnorderedList>
        </GridItem>
        <GridItem>
          <Text fontWeight={700} fontSize={'20px'}>
            Personal safety tips
          </Text>
          <UnorderedList py={'16px'} ml={0} listStyleType={'none'}>
            <ListItem display={'flex'} gap={6} mb={'18px'}>
              <Check />
              <Box>
                <Text lineHeight={'24px'} color={'#4B525A'}>
                  Educate yourself
                </Text>
              </Box>
            </ListItem>
            <ListItem display={'flex'} gap={6} mb={'18px'}>
              <Check />
              <Box>
                <Text lineHeight={'24px'} color={'#4B525A'}>
                  Keep personal information private
                </Text>
              </Box>
            </ListItem>
            <ListItem display={'flex'} gap={6} mb={'18px'}>
              <Check />
              <Box>
                <Text lineHeight={'24px'} color={'#4B525A'}>
                  secure your online accounts
                </Text>
              </Box>
            </ListItem>
            <ListItem display={'flex'} gap={6} mb={'18px'}>
              <User />
              <Box>
                <Text lineHeight={'24px'} color={'#4B525A'}>
                  Be mindful of what you share online
                </Text>
              </Box>
            </ListItem>
            <ListItem display={'flex'} gap={6} mb={'18px'}>
              <Box>
                <Text
                  textDecoration={'underline'}
                  lineHeight={'24px'}
                  color={'#121212'}
                >
                  see more
                </Text>
              </Box>
            </ListItem>
          </UnorderedList>
        </GridItem>
        <GridItem>
          <Text fontWeight={700} fontSize={'20px'}>
            Investments and Insurance Products are:
          </Text>
          <UnorderedList py={'16px'} ml={0}>
            <ListItem display={'flex'} gap={6} mb={'18px'}>
              <Box>
                <Text lineHeight={'24px'} color={'#4B525A'}>
                  Not insured by the FDIC or any Federal Government Agency
                </Text>
              </Box>
            </ListItem>
            <ListItem display={'flex'} gap={6} mb={'18px'}>
              <Box>
                <Text lineHeight={'24px'} color={'#4B525A'}>
                  Not a deposit or other Obligation of, or guaranteed by the
                  bank or any bank affiliate
                </Text>
              </Box>
            </ListItem>
            <ListItem display={'flex'} gap={6} mb={'18px'}>
              <Box>
                <Text lineHeight={'24px'} color={'#4B525A'}>
                  Subject to investment risks, including possible loss of the
                  Principal amount invested
                </Text>
              </Box>
            </ListItem>
            <ListItem display={'flex'} gap={6} mb={'18px'}>
              <Box>
                <Text
                  textDecoration={'underline'}
                  lineHeight={'24px'}
                  color={'#121212'}
                >
                  see more
                </Text>
              </Box>
            </ListItem>
          </UnorderedList>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Notes;
