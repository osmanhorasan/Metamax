import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const About = () => {
  return (
    <Flex align='center' justify='center' gap={3} height={'100vh'} direction={'column'} >
      <Text fontSize={'9xl'} color={'GrayText'}>About Page</Text>
    </Flex>
  )
}
