import { Alert, AlertIcon, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Input, InputGroup, Stack, Text } from "@chakra-ui/react"
import { useContext, useState } from "react"

import { LoginContext } from "../../../providers/login.provider";
import authService from '../../../services/auth.service';
import { useNavigate } from "react-router-dom";

export const AppylCode = () => {
    const navigate = useNavigate();
    const { loginData } = useContext(LoginContext);
    const [error, setError] = useState<string | undefined>(undefined);


    const [code, setCode] = useState<number | string>()
    const handleSubmit = () => {
        if (code && loginData) {
            authService.validateLogin({
                id: loginData.id,
                challengeId: loginData.challenges[0].id,
                pin: code
            }).then((data) => {
                navigate("/list", { replace: true })
            }
            )
        }
        else setError('Please fill in all fields. !');
    }



    return (
        <Card maxW='md' mx={'auto'} borderColor={'transparent'} shadow={'none'}>
            <CardHeader>
                <Stack mt='6' spacing='3'>
                    <Heading size='lg'>Oturum Aç</Heading>
                    <Text color={'gray.500'} fontSize={'medium'}>
                        {`${loginData.challenges[0].receiver} numarasına gönderilen 6 haneli doğrulama kodunuzu girin.`}
                    </Text>
                    {error
                        ? <Alert status='error'>
                            <AlertIcon />
                            {error}
                        </Alert>
                        : <></>
                    }
                </Stack>
            </CardHeader>
            <CardBody>
                <Flex direction={'column'} gap={5}>
                    <Flex direction={'column'} gap={1}>
                        <Text fontSize={'small'} fontWeight={'bold'}>Telefon Dogrulaması</Text>
                        <InputGroup >
                            <Input type='text' onChange={e => setCode(e.currentTarget.value)} fontWeight={'bold'} fontSize={'small'} rounded={'50px'} size={'md'} />
                        </InputGroup>
                    </Flex>
                </Flex>
            </CardBody>
            <CardFooter>
                <Button w={'100%'} onClick={handleSubmit} fontSize={'medium'} rounded={'50px'} type="submit" colorScheme='yellow'>Tekrar Gönder</Button>
            </CardFooter>
        </Card>
    )
}
