
import Head from 'next/head';
import ThemeProvider from '../../../theme/ThemeProvider'
import { useState } from 'react';
import { useColorModeValue } from '@chakra-ui/react';
// import SidebarLayout from 'src/layouts/SidebarLayout';
import {
  Box,
  styled,
  Divider,
  Drawer,
  IconButton,
  useTheme
} from '@mui/material';

import Scrollbar from '../../../components/Scrollbarzz'

import SidebarContent from '../../../components/Applications/Messenger/SidebarContent';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import TopBarContent from '../../../components/Applications/Messenger/TopBarContent';
import ChatContent from '../../../components/Applications/Messenger/ChatContent';
import BottomBarContent from '../../../components/Applications/Messenger/BottomBarContent';


const RootWrapper = styled(Box)(
  () => `
       height: calc(100vh - 80px);
       display: flex;
`
);

const Sidebar = styled(Box)(
  ({ theme }) => `
        width: 300px;
        background: #111633;
        border-right: #CBCCD2 solid 1px;
`
);

const ChatWindow = styled(Box)(
  () => `
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex: 1;
`
);

const ChatTopBar = styled(Box)(
  ({ theme }) => `
        background: ${useColorModeValue("#fff", 'secondaryGray.900')};
        border-bottom: #CBCCD2 solid 1px;
        padding: ${theme.spacing(2)};
        align-items: center;
`
);

const IconButtonToggle = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(4)};
  height: ${theme.spacing(4)};
  background: #111633;
`
);

const DrawerWrapperMobile = styled(Drawer)(
  () => `
    width: 340px;
    flex-shrink: 0;

  & > .MuiPaper-root {
        width: 340px;
        z-index: 3;
  }
`
);

export default function ApplicationsMessenger() {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
	const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');

  return (
    <>
    <ThemeProvider>
      <Head>
        <title>Messenger - Applications</title>
      </Head>
      <RootWrapper className="Mui-FixedWrapper">
        <DrawerWrapperMobile
          sx={{
            display: { lg: 'none', xs: 'inline-block' },
            backgroundColor: boxBg
          }}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
        >
          <Scrollbar>
            <SidebarContent />
          </Scrollbar>
        </DrawerWrapperMobile>
        <Sidebar
          sx={{
            display: { xs: 'none', lg: 'inline-block' },
            background: useColorModeValue("#fff", 'secondaryGray.900')
          }}
        >
          <Scrollbar>
            <SidebarContent />
          </Scrollbar>
        </Sidebar>
        <ChatWindow>
          <ChatTopBar
            sx={{
              display: { xs: 'flex',  lg: 'inline-block' }
            }}
          >
            <IconButtonToggle
              sx={{
                display: { lg: 'none', xs: 'flex' },
                mr: 2
              }}
              color="primary"
              onClick={handleDrawerToggle}
              size="small"
            >
              <MenuTwoToneIcon />
            </IconButtonToggle>
            <TopBarContent />
          </ChatTopBar>
          <Box flex={1}>
            <Scrollbar>
              <ChatContent />
            </Scrollbar>
          </Box>
          <Divider />
          <BottomBarContent />
        </ChatWindow>
      </RootWrapper>
      </ThemeProvider>
    </>
  );
}


