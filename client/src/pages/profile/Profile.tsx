import React, { useEffect, useState } from 'react'
import userInfo from '../../services/profile.service'
import { Flex, Text } from '@chakra-ui/react'
export const Profile = () => {

    const [user, setUser] = useState<any>()

    useEffect(() => {
        userInfo().then(data => setUser(data))
        console.log(user);

    }, [])

    return (

        <Flex align='center' justify='center' gap={3} height={'100vh'} direction={'column'} >
            <Text fontSize={'9xl'} color={'GrayText'}>Profil Page</Text>
        </Flex>
    )
}
