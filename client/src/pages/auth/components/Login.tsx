import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Link, Stack, Text } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useContext, useState } from "react"
import { LoginContext } from "../../../providers/login.provider";
import authService from '../../../services/auth.service';
export const Login = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const { setLoginData } = useContext(LoginContext);

    const [number, setNumber] = useState('+90')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        if (number && password) {
            authService.login({
                username: '+90' + number,
                password: password,
                scope: "WEB"
            }).then((data) => setLoginData(data))
        }
    }


    return (
        <Card maxW='md' mx={'auto'} borderColor={'transparent'} shadow={'none'}>
            <CardHeader>
                <Stack mt='6' spacing='3'>
                    <Heading size='lg'>Oturum Aç</Heading>
                    <Text color={'gray.500'} fontSize={'small'}>
                        Cihaz size ait değilse oturum açmak için tarayıcının Gizli Pencere özelliğini kullanabilirsiniz.
                    </Text>
                </Stack>
            </CardHeader>
            <CardBody>
                <Flex direction={'column'} gap={5}>
                    <Flex direction={'column'} gap={1}>
                        <Text fontSize={'small'} fontWeight={'bold'}>Telefon Numaranız</Text>
                        <Flex gap={3}>
                            <InputGroup >
                                <InputLeftElement pointerEvents='none'>
                                    <Text fontWeight={'bold'} fontSize={'small'}>+90</Text>
                                </InputLeftElement>
                                <Input type='tel' onChange={e => setNumber(e.currentTarget.value)} fontWeight={'bold'} fontSize={'small'} rounded={'50px'} size={'md'} />
                            </InputGroup>
                        </Flex>
                    </Flex>
                    <Flex direction={'column'} gap={1}>
                        <Flex justify={'space-between'} align={'center'}>
                            <Text fontSize={'small'} fontWeight={'bold'}>Şifreniz</Text>
                            <Link fontSize={'small'} fontWeight={'bold'} color={'yellow.400'}>Şifrenizimi Unuttunuz ?</Link>
                        </Flex>
                        <Flex gap={3}>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    rounded={'50px'}
                                    onChange={e => setPassword(e.currentTarget.value)}

                                />
                                <InputRightElement>
                                    <Button h='1.75rem' colorScheme='transparent' variant='ghost' size='sm' onClick={handleClick}>
                                        {show ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </Flex>
                    </Flex>
                </Flex>
            </CardBody>
            <CardFooter>
                <Flex direction={'column'} gap={5} align={'center'} w={'100%'}>
                    <Button w={'100%'} fontSize={'medium'} rounded={'50px'} type="submit" colorScheme='yellow' onClick={handleSubmit}>Giriş Yap</Button>
                    <Flex justify={'space-between'} align={'center'} w={'100%'} gap={5}>
                        <Divider orientation='horizontal' />
                        <Text color={'gray.400'} fontSize={'small'} >VEYA</Text>
                        <Divider orientation='horizontal' />
                    </Flex>
                    <Flex justify={'center'} align={'center'} gap={3}>
                        <Text fontSize={'small'} fontWeight={'bold'}>Hesabınız Yokmu ?</Text>
                        <Link fontSize={'small'} fontWeight={'bold'} color={'yellow.400'}>Kaydol</Link>
                    </Flex>
                </Flex>
            </CardFooter>
        </Card>
    )
}
