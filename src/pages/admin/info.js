
import React from 'react'

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Text,
  useColorModeValue,
  SimpleGrid,
  Link
} from '@chakra-ui/react'

// Custom components
import Banner from 'views/admin/marketplace/components/Banner'
import TableTopCreators from 'views/admin/marketplace/components/TableTopCreators'
import HistoryItem from 'views/admin/marketplace/components/HistoryItem'
import NFT from 'components/card/NFT'
import Card from 'components/card/Card'


// Assets
import Nft1 from 'img/nfts/Nft1.png'
import Nft2 from 'img/nfts/Nft2.png'
import Nft3 from 'img/nfts/Nft3.png'
import Nft4 from 'img/nfts/Nft4.png'
import Nft5 from 'img/nfts/Nft5.png'
import Nft6 from 'img/nfts/Nft6.png'
import Avatar1 from 'img/avatars/avatar1.png'
import Avatar2 from 'img/avatars/avatar2.png'
import Avatar3 from 'img/avatars/avatar3.png'
import Avatar4 from 'img/avatars/avatar4.png'
import tableDataTopCreators from 'views/admin/marketplace/variables/tableDataTopCreators.json'
import { tableColumnsTopCreators } from 'views/admin/marketplace/variables/tableColumnsTopCreators'
import AdminLayout from 'layouts/admin'
import { TableData } from 'views/admin/default/variables/columnsData'
import NextLink from 'next/link'

export default function Info () {
  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const textColorBrand = useColorModeValue('brand.500', 'white')
  return (
    <AdminLayout>
      <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
        {/* Main Fields */}
        <Grid
          mb='20px'
          gridTemplateColumns={{ xl: 'repeat(3, 1fr)', '2xl': '1fr 0.46fr' }}
          gap={{ base: '20px', xl: '20px' }}
          display={{ base: 'block', xl: 'grid' }}
        >
          <Flex
            flexDirection='column'
            gridArea={{ xl: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}
          >
            <Banner />
            <Flex direction='column'>
              <Flex
                mt='45px'
                mb='20px'
                justifyContent='space-between'
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'start', md: 'center' }}
              >
                <Text
                  color={textColor}
                  fontSize='2xl'
                  ms='24px'
                  fontWeight='700'
                >
                  Course-Mates
                </Text>
                <Flex
                  align='center'
                  me='20px'
                  ms={{ base: '24px', md: '0px' }}
                  mt={{ base: '20px', md: '0px' }}
                >
                  <NextLink href='#art' passHref>
                    <Link
                      color={textColorBrand}
                      fontWeight='500'
                      me={{ base: '34px', md: '44px' }}
                    >
                      See All
                    </Link>
                  </NextLink>
                </Flex>
              </Flex>
              <SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
                <NFT
                  name='Owoade Prevail'
                  author='Course rep: ESM 205'
                  image={Nft1}
                  download='#'
                />
                <NFT
                  name='Aluko Joseph'
                  author='Class Rep'
                  image={Nft2}
                  download='#'
                />
                <NFT
                  name='Sorungbe Olubunmi'
                  author='Asst Class rep'
                  image={Nft3}
                  download='#'
                />
              </SimpleGrid>
              <SimpleGrid
                columns={{ base: 1, md: 3 }}
                gap='20px'
                paddingTop ='10px'
                mb={{ base: '20px', xl: '0px' }}
              >
                <NFT
                  name='shobande Benjamin'
                  author='Member'
                  image={Nft4}
                  download='#'
                />
                <NFT
                  name='Richard Merit'
                  author='Member'
                  image={Nft5}
                  download='#'
                />
                <NFT
                  name='Alabi David'
                  author='Member'
                  image={Nft6}
                  download='#'
                />
              </SimpleGrid>
            </Flex>
          </Flex>
          <Flex
            flexDirection='column'
            gridArea={{ xl: '1 / 3 / 2 / 4', '2xl': '1 / 2 / 2 / 3' }}
          >
            <Card px='0px' mb='20px'>
              <TableTopCreators
                tableData={(tableDataTopCreators)}
                columnsData={tableColumnsTopCreators}
              />
            </Card>
            <Card p='0px'>
              <Flex
                align={{ sm: 'flex-start', lg: 'center' }}
                justify='space-between'
                w='100%'
                px='22px'
                py='18px'
              >
                <Text color={textColor} fontSize='xl' fontWeight='600'>
                  Lecturer
                </Text>
                <Button variant='action'>See all</Button>
              </Flex>

              <HistoryItem
                name='Mr Adeniyi'
                author='GNS Dept'
                image={Nft5}
              />
              <HistoryItem
                name='Mr Olubunmi'
                author='CSP Dept'
                image={Nft1}
              />
              <HistoryItem
                name='Mr Akinola'
                author='ARC Dept'
                image={Nft2}
              />
              <HistoryItem
                name='Mrs OLuniyi'
                author='BDG Dept'
                image={Nft4}
              />
              <HistoryItem
                name='Mr Olabanji'
                author='ESM Dept'
                image={Nft3}
              />
              <HistoryItem
                name='Mr Adejare'
                author='QSV Dept'
                image={Nft6}
              />
            </Card>
          </Flex>
        </Grid>
        {/* Delete Product */}
      </Box>
    </AdminLayout>
  )
}
