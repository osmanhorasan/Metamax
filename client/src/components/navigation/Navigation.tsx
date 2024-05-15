import React from 'react'
import { ExternalLinkIcon, SunIcon } from '@chakra-ui/icons'
import { Button, Center, Divider, Flex, Link } from '@chakra-ui/react'
import { DarkButton } from './DarkButton'
const Navigation = () => {
    return (
        <Flex gap={'20px'} align='start' justify='end' padding='10px'>
            <Link
                px={3} py={2}
                fontSize={'small'}
                rounded={'50px'}
                _hover={{
                    textDecoration: 'none',
                    backgroundColor: 'gray.100'
                }}>Market</Link>
            <Link
                px={3} py={2}
                fontSize={'small'}
                rounded={'50px'}
                _hover={{
                    textDecoration: 'none',
                    backgroundColor: 'gray.100'
                }}>Hakkımızda</Link>
            <Link
                px={3} py={2}
                fontSize={'small'}
                rounded={'50px'}
                _hover={{
                    textDecoration: 'none',
                    backgroundColor: 'gray.100'
                }}>Ekibimiz</Link>
            <Link
                px={3} py={2}
                fontSize={'small'}
                rounded={'50px'}
                _hover={{
                    textDecoration: 'none',
                    backgroundColor: 'gray.100'
                }} href='https://chakra-ui.com' isExternal
                display='flex'
                gap={2}
                alignItems={'center'}
            >
                Yardım <ExternalLinkIcon />
            </Link>
            <Flex align='center' justify='center' gap={'10px'}>
                <Center height='35px'>
                    <Divider orientation='vertical' />
                </Center>
                <DarkButton />
            </Flex>
        </Flex>
    )
}

export default Navigation