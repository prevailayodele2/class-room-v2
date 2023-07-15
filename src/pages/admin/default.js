
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
// Assets
// Custom components
import MiniCalendar from 'components/calendar/MiniCalendar'
import MiniStatistics from 'components/card/MiniStatistics'
import IconBox from 'components/icons/IconBox'
import {
  BiSolidUser
} from 'react-icons/bi'
import Recents from 'views/admin/default/components/Recents'
import CheckTable from 'views/admin/default/components/CheckTable'
import ComplexTable from 'views/admin/default/components/ComplexTable'
import DailyTraffic from 'views/admin/default/components/DailyTraffic'
import PieCard from 'views/admin/default/components/PieCard'
import Tasks from 'views/admin/default/components/Tasks'
import TotalSpent from 'views/admin/default/components/TotalSpent'
import WeeklyRevenue from 'views/admin/default/components/WeeklyRevenue'
import {
  columnsDataCheck,
  columnsDataComplex,
  TableData
} from 'views/admin/default/variables/columnsData'
import tableDataCheck from 'views/admin/default/variables/tableDataCheck.json'
import tableDataComplex from 'views/admin/default/variables/tableDataComplex.json'
import { isWindowAvailable } from 'utils/navigation'
import AdminLayout from 'layouts/admin'
import { Image } from 'components/image/Image'
import Usa from 'img/dashboards/usa.png'

export default function UserReports () {
  // Chakra Color Mode

  const brandColor = useColorModeValue('brand.500', 'white')
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')

  return (
    <AdminLayout>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }}
            gap='20px'
            mb='20px'
          >
            <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg={boxBg}
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={BiSolidUser}
                      color={brandColor}
                    />
                  }
                />
              }
              name='Vice Chancellor'
              value='Mrs Olaniyan'
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg={boxBg}
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={BiSolidUser}
                      color={brandColor}
                    />
                  }
                />
              }
              name='SET School Officer'
              value='Mr Olaniyan'
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg={boxBg}
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={BiSolidUser}
                      color={brandColor}
                    />
                  }
                />
              }
              name='Head of Department'
              value='Mr Adeniyi'
            />
            <MiniStatistics 
             startContent={
              <IconBox
                w='56px'
                h='56px'
                bg={boxBg}
                icon={
                  <Icon
                    w='32px'
                    h='32px'
                    as={BiSolidUser}
                    color={brandColor}
                  />
                }
              />
             }
             name='Gen. Secetary'
             value='Mrs Oladele'
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg={boxBg}
                  icon={
                    <Icon
                      w='32px'
                      h='32px'
                      as={BiSolidUser}
                      color={brandColor}
                    />
                  }
                />
              }
              name="SET President "
              value='Max'
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w='56px'
                  h='56px'
                  bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
                  icon={<Icon w='28px' h='28px' as={BiSolidUser} color='white' />}
                />
              }
              name="SET'26 Govonor"
              value='Maximum'
            />
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
            <TotalSpent />
            <WeeklyRevenue />
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='14px'>
            <Recents />
            {/* <CheckTable
              columnsData={columnsDataCheck}
              tableData={(tableDataCheck)}
            /> */}
            {/* <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
              <DailyTraffic />
              <Upgrade />
              <PieCard />
            </SimpleGrid> */}
          </SimpleGrid>
          {/* <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
            <ComplexTable
              columnsData={columnsDataComplex}
              tableData={(tableDataComplex)}
            />
            <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
              <Tasks />
              <MiniCalendar h='100%' minW='100%' selectRange={false} />
            </SimpleGrid>
          </SimpleGrid> */}
        </>
      </Box>
    </AdminLayout>
  )
}
