import React from 'react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Center, Divider, Flex, Link } from '@chakra-ui/react'
import { DarkButton } from './DarkButton'
import { useAuth } from '../../providers/auth.provider'
const Navigation = () => {
    const { token } = useAuth();


    return (
        <Flex gap={'20px'} align='start' justify='end' padding='10px'>
            <Link
                px={3} py={2}
                fontSize={'small'}
                rounded={'50px'}
                href='/list'
                _hover={{
                    textDecoration: 'none',
                    backgroundColor: 'gray.100'
                }}>Market</Link>
            <Link
                px={3} py={2}
                fontSize={'small'}
                rounded={'50px'}
                href='/about-us'
                _hover={{
                    textDecoration: 'none',
                    backgroundColor: 'gray.100'
                }}>Hakkımızda</Link>
            <Link
                px={3} py={2}
                fontSize={'small'}
                rounded={'50px'}
                href='/our-team'
                _hover={{
                    textDecoration: 'none',
                    backgroundColor: 'gray.100'
                }}>Ekibimiz</Link>
            <Link
                px={3} py={2}
                fontSize={'small'}
                rounded={'50px'}
                href='/help'
                _hover={{
                    textDecoration: 'none',
                    backgroundColor: 'gray.100'
                }}
                display='flex'
                gap={2}
                alignItems={'center'}
            >
                Yardım <ExternalLinkIcon />
            </Link>
            {
                !token
                    ? <>
                        <Link
                            px={3} py={2}
                            fontSize={'small'}
                            rounded={'50px'}
                            href='/auth/login'
                            _hover={{
                                textDecoration: 'none',
                                backgroundColor: 'gray.100'
                            }}>Giriş Yap</Link>
                        <Link
                            px={3} py={2}
                            fontSize={'small'}
                            rounded={'50px'}
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
            <Flex align='center' justify='center' gap={'10px'}>
                <Center height='35px'>
                    <Divider orientation='vertical' />
                </Center>
                <DarkButton />
            </Flex>
        </Flex >
    )
}

export default Navigation