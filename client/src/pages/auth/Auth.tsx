import { Card, CardBody, CardFooter, CardHeader, Flex, Image, Show, Text } from '@chakra-ui/react'
import LoginContainer from './components/LoginContainer'
import { Logo } from '../../components/logo/Logo'
import { LoginProvider } from '../../providers/login.provider'
export default function Auth() {
    return (
        <LoginProvider>
            <Flex align='center' justify='center' w='100%' h='100%' wrap={'wrap'} backgroundColor={'orange.50'}>
                <Show breakpoint='(min-width: 991px)'>
                    <Card width={{ base: '100%', lg: '40%' }} height={'100vh'} rounded={0} backgroundColor={'transparent'} border={'none'} shadow={'none'} >
                        <CardHeader>
                            <Logo />
                        </CardHeader>
                        <CardBody display={'flex'} alignItems={'center'}>
                            <Image width={{ base: '425px', lg: '425px' }} margin={'0 auto'} src='/src/assets/auth_icon.svg' fallbackSrc='https://via.placeholder.com/150' />
                        </CardBody>
                        <CardFooter>
                            <Text color={'gray.500'} fontSize={'small'}>© 2024 Metamax Teknoloji A.Ş.</Text>
                        </CardFooter>
                    </Card>
                </Show>
                <LoginContainer />
            </Flex>
        </LoginProvider>

    )
}
