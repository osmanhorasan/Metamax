import { Flex, Image, Show } from '@chakra-ui/react'
import React from 'react'
import { MobilNavigation } from '../navigation/MobilNavigation'

export const Logo = () => {
    return (
        <>
            <Show breakpoint='(max-width: 991px)'>
                <Flex justify={'space-between'} align={'center'} width={'100%'}>
                    <Image width={{ base: '145px', lg: '200px' }} src='/src/assets/logo.svg' fallbackSrc='https://via.placeholder.com/150' />
                    <MobilNavigation />
                </Flex>
            </Show>
            <Show breakpoint='(min-width: 991px)'>
                <Flex justify={'space-between'} align={'center'}>
                    <Image width={{ base: '145px', lg: '200px' }} src='/src/assets/logo.svg' fallbackSrc='https://via.placeholder.com/150' />
                </Flex>
            </Show>
        </>
    )
}
