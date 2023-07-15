import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useColorModeValue, Button } from '@chakra-ui/react';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'download', 
    headerName: 'Download', 
    width: 130,
    type: 'action',
    renderCell: () => ( <Button
      bg={useColorModeValue("#E0E5F2", "#0b1437")}
      color={useColorModeValue("#0b1437", 'white')}
      borderRadius='15px'
      _hover={{ bg: "blue" }}
      _active={{ bg: 'white' }}
      _focus={{ bg: 'white' }}
      fontWeight='500'
      fontSize='14px'
      py='20px'
      px='27'
      me='38px'
    >
      Download
    </Button>)
  },
];

const rows = [
  { id: 1,  name: 'Qsv 201',  },
  { id: 2, name: 'Csp 201'},
  { id: 3, name: 'Qsv 203(PQ)'},
  { id: 4, name: 'Esm 201'},
  { id: 5,  name: 'Esm 205'},
  { id: 6,  name: 'Gns 203' },
  { id: 7,  name: 'Svg 201'},
  { id: 8,  name: 'Bdg 201(PQ)'},
  { id: 9,  name: 'Bdg 201'},
  { id: 10,  name: 'Bdg 205'},
  { id: 11,  name: 'Esm 201(PQ)'},
  { id: 12,  name: 'Svg 201(PQ)'},
];

export default function DataTable() {
	const textColor = useColorModeValue("#0b1437", 'white');
	const boxBg = useColorModeValue("#E0E5F2", "#0b1437");
	const shadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'none');

  const options = {
    jumpToPage: true,
    rowsPerPage:[3],
    rowsPerPageOptions: [5,7,9,11]
  }
  return (
    <div style={{ boxShadow: shadow, height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        sx={{
          background: boxBg,
          color: textColor,
          fontWeight:'600',
          fontSize: '16px'
        }}
        options={options}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}