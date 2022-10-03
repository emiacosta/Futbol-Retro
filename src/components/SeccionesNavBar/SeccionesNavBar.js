import { Button, Stack } from '@chakra-ui/react'
import "./SeccionesNavBar.css"

const SeccionesNavBar = () => {
    return (
    <Stack spacing={5} direction='row' align='center'>
            <Button colorScheme='teal' size='md'>
              Camisetas
            </Button>
            <Button colorScheme='teal' size='md'>
              Shorts
            </Button>
            <Button colorScheme='teal' size='md'>
              Buzos
            </Button>
            <Button colorScheme='teal' size='md'>
              Botines
            </Button>
          </Stack>
          )
}

export default SeccionesNavBar