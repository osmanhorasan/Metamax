import { HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons'
import { Flex, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, textDecoration } from '@chakra-ui/react'
import { useState } from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { DarkButton } from './DarkButton';

export const MobilNavigation = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

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
                    <Link fontWeight={'medium'} color={'gray.600'} _hover={{
                        textDecoration: 'none',
                    }}>Market</Link>
                </MenuItem>
                <MenuItem rounded={'5px'} py={2}>
                    <Link fontWeight={'medium'} color={'gray.600'} _hover={{
                        textDecoration: 'none',
                    }}>Hakkımızda</Link>
                </MenuItem>
                <MenuItem rounded={'5px'} py={2}>
                    <Link fontWeight={'medium'} color={'gray.600'} _hover={{
                        textDecoration: 'none',
                    }}>Ekibimiz</Link>
                </MenuItem>
                <MenuItem rounded={'5px'} py={2}>
                    <Link fontWeight={'medium'} color={'gray.600'} _hover={{
                        textDecoration: 'none',
                    }}>Yardım</Link>
                </MenuItem>
                <MenuItem rounded={'5px'} py={2}>
                    <Link fontWeight={'medium'} color={'gray.600'} _hover={{
                        textDecoration: 'none',
                    }}>Canlı Destek</Link>
                </MenuItem>
                <MenuItem rounded={'5px'} py={2}>
                    <Link fontWeight={'medium'} color={'gray.600'} _hover={{
                        textDecoration: 'none',
                    }}>Giriş Yap</Link>
                </MenuItem>
                <MenuItem rounded={'5px'} py={2}>
                    <Link fontWeight={'medium'} color={'gray.600'} _hover={{
                        textDecoration: 'none',
                    }}>Kaydol</Link>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
