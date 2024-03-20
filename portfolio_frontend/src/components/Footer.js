import { Center, Text, Link, Button, ButtonGroup } from '@chakra-ui/react';
function Footer() {

    return (
        <Center>
            <ButtonGroup variant='ghost' spacing='6'>
                <Button colorScheme="white" pt="12" >
                    <Text align="center" color="white" className='scale-font' fontSize="30px">
                        <Link href='https://www.linkedin.com/in/alethia-quintero/' isExternal> LinkedIn </Link>
                    </Text>
                </Button>
                <Button colorScheme="white" pt="12">
                    <Text align="center" color="white" className='scale-font' fontSize="30px">
                        <Link href='https://github.com/alethiaQ' isExternal> Github </Link>
                    </Text>
                </Button>
                <Button colorScheme="white" pt="12">
                    <Text align="center" color="white" className='scale-font' fontSize="30px">
                        <Link href='mailto:alethiaq22@gmail.com?body=Hi, I saw your awesome website!' isExternal> Email </Link>
                    </Text>
                </Button>
            </ButtonGroup>
        </Center>

    )
}
export default Footer;