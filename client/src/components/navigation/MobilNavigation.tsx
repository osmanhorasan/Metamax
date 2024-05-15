import { HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons'
import { Flex, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, textDecoration } from '@chakra-ui/react'
import { useState } from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { DarkButton } from './DarkButton';
import { useAuth } from '../../providers/auth.provider';

export const MobilNavigation = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const { token } = useAuth();

    return (
        <Menu >
            <Flex align='center' justify='center' gap={3}>
                <DarkButton />
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    rounded={'50px'}
                    p={2}
                    icon={
                        <Flex align='center' justify='center' gap={'10px'}>
                            {
                                show ? <SmallCloseIcon boxSize={6} /> : <HamburgerIcon boxSize={6} />
                            }

                            <IoPersonCircleOutline size={24} />
                        </Flex>
                    }
                    onClick={handleClick}
                    variant='outline'
                />

            </Flex>
            <MenuList minW={'100vw'} minH={'calc(100vh - 80px)'} p={2} border={'none'}>
                <MenuItem rounded={'5px'} py={2}>
                    <Link fontWeight={'medium'} color={'gray.600'} href='/list' _hover={{
                        textDecoration: 'none',
                    }}>Market</Link>
                </MenuItem>
                <MenuItem rounded={'5px'} py={2}>
                    <Link fontWeight={'medium'} color={'gray.600'} href='/about-us' _hover={{
                        textDecoration: 'none',
                    }}>Hakkımızda</Link>
                </MenuItem>
                <MenuItem rounded={'5px'} py={2}>
                    <Link fontWeight={'medium'} color={'gray.600'} href='our-team' _hover={{
                        textDecoration: 'none',
                    }}>Ekibimiz</Link>
                </MenuItem>
                <MenuItem rounded={'5px'} py={2}>
                    <Link fontWeight={'medium'} color={'gray.600'} href='help' _hover={{
                        textDecoration: 'none',
                    }}>Yardım</Link>
                </MenuItem>
                {
                    !token
                        ? <>
                            <MenuItem rounded={'5px'} py={2}>
                                <Link fontWeight={'medium'} color={'gray.600'} href='/auth/login' _hover={{
                                    textDecoration: 'none',
                                }}>Giriş Yap</Link>
                            </MenuItem>
                            <MenuItem rounded={'5px'} py={2}>
                                <Link fontWeight={'medium'} color={'gray.600'} href='/auth/login' _hover={{
                                    textDecoration: 'none',
                                }}>Kaydol</Link>
                            </MenuItem>
                        </>
                        : <>

                            <MenuItem rounded={'5px'} py={2}>
                                <Link fontWeight={'medium'} color={'gray.600'} href='/profile' _hover={{
                                    textDecoration: 'none',
                                }}>Profile</Link>
                            </MenuItem>
                            <MenuItem rounded={'5px'} py={2}>
                                <Link fontWeight={'medium'} color={'gray.600'} href='/logout' _hover={{
                                    textDecoration: 'none',
                                }}>Çıkış Yap</Link>
                            </MenuItem>
                        </>
                }
            </MenuList>
        </Menu >
    )
}
