import ThemeProvider from '../../theme/ThemeProvider'
import AdminLayout from 'layouts/admin';
import { Box } from '@chakra-ui/react';
import ApplicationsMessenger from 'pages/applications/messenger';

export default function Chat() {
  return (
    <AdminLayout>
      <ThemeProvider>
          <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
            <ApplicationsMessenger />
          </Box>
      </ThemeProvider>
      </AdminLayout>
  );
};

