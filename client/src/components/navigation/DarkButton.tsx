import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'

export const DarkButton = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
        <Button borderRadius={'50px'} colorScheme='gray' variant='ghost' onClick={handleClick}>
            {
                show ? <MoonIcon /> : <SunIcon />
            }
        </Button>
    )
}
