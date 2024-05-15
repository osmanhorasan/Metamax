
import { Card, CardBody, CardHeader, Flex, Image, Show } from '@chakra-ui/react'
import Navigation from '../../../components/navigation/Navigation'
import { Login } from './Login'
import { MobilNavigation } from '../../../components/navigation/MobilNavigation'
import { useContext } from 'react'
import { AppylCode } from './ApplyCode'
import { LoginContext } from '../../../providers/login.provider'


const LoginContainer = () => {
    const { loginData } = useContext(LoginContext);
    return (
        <Card width={{ base: '100%', lg: '60%' }} height={'100vh'} rounded={0} backgroundColor={'white'} border={'none'} shadow={'none'}>
            <CardHeader>
                <Show breakpoint='(max-width: 991px)'>
                    <Flex justify={'space-between'} align={'center'}>
                        <Image width={{ base: '145px', lg: '200px' }} src='/src/assets/logo.svg' fallbackSrc='https://via.placeholder.com/150' />
                        <MobilNavigation />
                    </Flex>
                </Show>
                <Show breakpoint='(min-width: 991px)'>
                    <Navigation />
                </Show>
            </CardHeader>
            <CardBody display={'flex'} alignItems={'center'}>
                {loginData
                    ? <AppylCode />
                    : <Login />
                }
            </CardBody>
        </Card>
    )
}

export default LoginContainer