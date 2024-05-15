import React from 'react'
import { useAuth } from '../../providers/auth.provider';
import { Flex, Link } from '@chakra-ui/react';

export const Home = () => {
  const { token } = useAuth();
  return (
    <Flex align='center' justify='center' gap={3} height={'100vh'} direction={'column'} bg={'yellow.50'}>
      {
        !token
          ? <>
            <Link
              px={10} py={5}
              fontSize={'small'}
              rounded={'50px'}
              border={'1px solid'}
              borderColor={'GrayText'}
              href='/auth/login'
              _hover={{
                textDecoration: 'none',
                backgroundColor: 'gray.100'
              }}>Giriş Yap</Link>
            <Link
              px={10} py={5}
              fontSize={'small'}
              rounded={'50px'}
              border={'1px solid'}
              borderColor={'GrayText'}
              href='/auth/login'
              _hover={{
                textDecoration: 'none',
                backgroundColor: 'gray.100'
              }}>Kaydol</Link>
          </>
          : <>
            <Link
              px={3} py={2}
              fontSize={'small'}
              rounded={'50px'}
              href='/profile'
              _hover={{
                textDecoration: 'none',
                backgroundColor: 'gray.100'
              }}>Profile</Link>
            <Link
              px={3} py={2}
              fontSize={'small'}
              rounded={'50px'}
              href='/logout'
              _hover={{
                textDecoration: 'none',
                backgroundColor: 'gray.100'
              }}>Çıkış Yap</Link>
          </>

      }
    </Flex>
  )
}
