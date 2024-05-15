
import { Card, CardBody, CardHeader, Flex, Show, TabIndicator, Text } from '@chakra-ui/react'
import { Logo } from '../../components/logo/Logo'
import Navigation from '../../components/navigation/Navigation'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { List } from './components/List'
import { ListContext, ListProvider } from '../../providers/list.provider'
import { useContext, useEffect, useState } from 'react'
import productList from '../../services/list.service'
export const ListContainer = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { listData, setListData } = useContext(ListContext);
  useEffect(() => {
    productList({
      size: 1000,
      page: 0,
      sortField: 'createdAt',
      sortOrder: 'DESC',
    }).then((data) => {
      setListData(data)
      setLoading(false)
    })
  }, []);


  if (loading) return "Loading..."
  return (
    <Card width={{ base: '100%' }} height={'100vh'} rounded={0} backgroundColor={'white'}>
      <CardHeader>
        <Flex justify={'space-between'} align={'center'}>
          <Logo />
          <Show breakpoint='(min-width: 991px)'>
            <Navigation />
          </Show>
        </Flex>
      </CardHeader>
      <CardBody>
        <Tabs position='relative' variant='unstyled' h={'100%'}>
          <TabList>
            <Tab>One ({listData.results.length})</Tab>
            <Tab>Two</Tab>
          </TabList>
          <TabIndicator mt='-1.5px' height='2px' bg='yellow.400' borderRadius='1px' />
          <TabPanels pt={5} h={'100%'}>
            <TabPanel p={0}>
              <List />
            </TabPanel>
            <TabPanel p={0} h={'100%'}>
              <Flex direction={'column'} align={'center'} justify={'center'} h={'100%'}>
                <Text fontSize={'4xl'} fontWeight={'bold'} textAlign={'center'} color={'gray.500'}>Yatırım fırsatları için beklemede kalın!</Text>
                <Text fontSize={'xl'} color={'gray.500'}>Henüz satılmış ev bulunmamaktadır.</Text>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </CardBody>
    </Card>
  )
}
