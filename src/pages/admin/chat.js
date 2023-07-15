import { Box } from '@chakra-ui/react';
import AdminLayout from 'layouts/admin';
import ApplicationsMessenger from 'pages/applications/messenger';
import ThemeProvider from '../../theme/ThemeProvider'

const Chat = () => {
  return (
    <AdminLayout>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <ThemeProvider>
        <ApplicationsMessenger />
      </ThemeProvider>
      </Box>
    </AdminLayout>
  );
};

export default Chat;
