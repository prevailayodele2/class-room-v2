import React from 'react';
import Box from '@mui/material/Box'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Flex, useColorModeValue, Icon } from '@chakra-ui/react';
import IconBox from 'components/icons/IconBox'
import {
  RxTimer
} from 'react-icons/rx'
import Card  from 'components/card/Card';
import ThemeProvider from '../../../../theme/ThemeProvider'

const Recents = (props) => {
  
  const brandColor = useColorModeValue('brand.500', 'white')
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')

  const depositData = [
    {
      subtitle: '10am - 12pm(2 in 1B)',
      title: 'Gns 203',
      icon: <IconBox
      w='56px'
      h='56px'
      bg={boxBg}
      icon={
        <Icon
          w='32px'
          h='32px'
          as={RxTimer}
          color={brandColor}
        />
      } />
    },
    {
      title: 'Svg 201',
      subtitle: '1pm - 2pm (1000 cap)',
      icon: <IconBox
      w='56px'
      h='56px'
      bg={boxBg}
      icon={
        <Icon
          w='32px'
          h='32px'
          as={RxTimer}
          color={brandColor}
        />
      } />
    },
    {
      
      title: 'Bdg 205',
      subtitle: '2pm - 5pm(Bdg workshop obakekere)',
      icon: <IconBox
      w='56px'
      h='56px'
      bg={boxBg}
      icon={
        <Icon
          w='32px'
          h='32px'
          as={RxTimer}
          color={brandColor}
        />
      } />
    },
  ]
    const { ...rest } = props;
	const bg = useColorModeValue('white', '#1B254B')
	const shadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'none');
  return (
      <>
      <ThemeProvider>
        <Card alignItems='center' boxShadow={shadow}   w='80%' {...rest}>
     			<Flex align='center' sx={{ background:{bg}, borderRadius: '20px' }} >
              <Box sx={{ width: '100%' }}>
                <CardHeader
                  title="Today's Lectures"
                  sx={{ pt: 5.5, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
                  titleTypographyProps={{
                    variant: 'h2',
                    sx: { lineHeight: '1.6 !important',fontSize: 'xl', letterSpacing: '0.15px !important' }
                  }}
                />
                <CardContent sx={{ pb: theme => `${theme.spacing(5.5)} !important` }}>
                  {depositData.map((item, index) => {
                    return (
                      <Box
                        key={item.title}
                        sx={{ display: 'flex', alignItems: 'center', mb: index !== depositData.length - 1 ? 6 : 0 }}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                          {item.icon}
                        </Box>
                        <Box
                          sx={{
                            ml: 4,
                            width: '100%',
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                          }}
                        >
                          <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '0.975rem' }}>{item.title}</Typography>
                            <Typography sx={{ fontWeight: 400, fontSize: '15px' }}>{item.subtitle}</Typography>
                          </Box>
                        </Box>
                      </Box>
                    )
                  })}
                </CardContent>
              </Box>
          </Flex>
        </Card>
      </ThemeProvider>
      </>
  );
};

export default Recents;





