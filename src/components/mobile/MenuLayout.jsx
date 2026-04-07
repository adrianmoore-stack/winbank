import { createPortal } from 'react-dom';
import { Box, Grid, GridItem, IconButton, Image, Text } from '@chakra-ui/react';
import logo from '../Assets/logo.svg';
import { CloseIcon } from '@chakra-ui/icons';
import MobileNav from './MobileNav';
import MobileProfile from './MobileProfile';
import MobileAccountOptions from './MobileAccountOptions';

export const Backdrop = () => {
  return createPortal(
    <Box
      w={'100%'}
      position={'fixed'}
      zIndex={'5'}
      h={'100vh'}
      bg={'rgba(0, 82, 204, 0.17)'}
    ></Box>,
    document.getElementById('overlay')
  );
};

export const Modal = ({ display }) => {
  return (
    <Grid
      position={'fixed'}
      zIndex="10"
      height={'100vh'}
      overflowY={'scroll'}
      top="0"
      w={'100%'}
      gap={10}
      bg={'#FFF'}
      pb={'60px'}
    >
      <GridItem>
        <Grid
          borderBottom={'2px solid #F4F5F7'}
          templateColumns={'repeat(4, 1fr)'}
          py={'28px'}
          px={'24px'}
        >
          <GridItem colSpan={3} display={'flex'} gap={2} alignItems={'center'}>
            <Image src={logo} alt="apex logo" />
            <Text
              color={'#1B1E21'}
              fontWeight="700"
              _after={{ content: `"Trust"`, color: '#0052CC' }}
            >
              Wincres{' '}
            </Text>
          </GridItem>
          <GridItem textAlign={'end'}>
            <IconButton
              bg={'transparent'}
              icon={<CloseIcon />}
              onClick={() => display()}
            />
          </GridItem>
        </Grid>
      </GridItem>
      <MobileAccountOptions w={'50%'} />
      <MobileNav p={'0 24px'} display={display} />
      <MobileProfile mt={'150px'} pl={'10px'} px={'6px'} display={display} />
    </Grid>
  );
};

const MenuLayout = ({ display }) => {
  return createPortal(
    <Modal display={display} />,
    document.getElementById('menu')
  );
};

export default MenuLayout;
