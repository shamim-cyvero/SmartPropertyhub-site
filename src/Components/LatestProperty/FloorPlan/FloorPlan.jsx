import React from 'react'
import { Heading, Image, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import lgfloor from '../../../Assets/lowerground.jpg'
import uppergroundfloor from '../../../Assets/upperground.jpg'
import firstfloor from '../../../Assets/firstfloor.jpg'
import secondfloor from '../../../Assets/secondfloor.jpg'
import thirdfloor from '../../../Assets/3rdfloor.jpg'
import fourthfloor from '../../../Assets/4thfloor.jpg'
import fifthfloor from '../../../Assets/5thfloor.jpg'

const FloorPlan = () => {
  return (
   <>
        <Heading m={'2vmax 0'} textAlign={'center'} children={'FLOOR PLAN'} />
        <Tabs variant='unstyled' w={'90%'}  m={'2vmax auto'}>
            <TabList  display={'flex'} flexWrap={'wrap'} >
                <Tab flex={'1'} color={'black'} p={'1'} fontSize={'1vmax'} _selected={{ color: 'white', bg: '#00B98E' }}>LOWER GROUND FLOOR</Tab>
                <Tab flex={'1'} color={'black'} p={'1'} fontSize={'1vmax'} _selected={{ color: 'white', bg: '#00B98E' }}>GROUND FLOOR</Tab>
                <Tab flex={'1'} color={'black'} p={'1'} fontSize={'1vmax'} _selected={{ color: 'white', bg: '#00B98E' }}>FIRST FLOOR</Tab>
                <Tab flex={'1'} color={'black'} p={'1'} fontSize={'1vmax'} _selected={{ color: 'white', bg: '#00B98E' }}>SECOND FLOOR</Tab>
                <Tab flex={'1'} color={'black'} p={'1'} fontSize={'1vmax'} _selected={{ color: 'white', bg: '#00B98E' }}>THIRD FLOOR</Tab>
                <Tab flex={'1'} color={'black'} p={'1'} fontSize={'1vmax'} _selected={{ color: 'white', bg: '#00B98E' }}>FOURTH FLOOR</Tab>
                <Tab flex={'1'} color={'black'} p={'1'} fontSize={'1vmax'} _selected={{ color: 'white', bg: '#00B98E' }}>FIFTH FLOOR</Tab>
            </TabList>
            {/* <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' /> */}
            <TabPanels>
                <TabPanel>
                  <Image w={'100%'} src={lgfloor} alt={'lgfloor'} />
                </TabPanel>
                <TabPanel>
                  <Image w={'100%'} src={uppergroundfloor} alt={'uppergroundfloor'} />
                </TabPanel>
                <TabPanel>
                  <Image w={'100%'} src={firstfloor} alt={'firstfloor'} />
                </TabPanel>
                <TabPanel>
                  <Image w={'100%'} src={secondfloor} alt={'secondfloor'} />
                </TabPanel>
                <TabPanel>
                  <Image w={'100%'} src={thirdfloor} alt={'thirdfloor'} />
                </TabPanel>
                <TabPanel>
                  <Image w={'100%'} src={fourthfloor} alt={'fourthfloor'} />
                </TabPanel>                         
                <TabPanel>
                  <Image w={'100%'} src={fifthfloor} alt={'fifthfloor'} />
                </TabPanel>
            </TabPanels>
        </Tabs>
   </>
  )
}

export default FloorPlan