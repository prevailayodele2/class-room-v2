
import {
    Box,
    useColorModeValue
} from '@chakra-ui/react';
import DataTable from '../../views/admin/default/components/Datatable';
import ThemeProvider from '../../theme/ThemeProvider'
import AdminLayout from 'layouts/admin';
  
  export default function Ebook () {

    const brandColor = useColorModeValue('brand.500', 'white')
    const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')
    return (
      
      
      <AdminLayout>
      <ThemeProvider>
        <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
          <DataTable />
        </Box>
      </ThemeProvider>
      </AdminLayout>
    )
  }
  