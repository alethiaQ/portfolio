import { Center, Grid, GridItem, Text, Link, Button, ButtonGroup } from '@chakra-ui/react';
import './App.css';
import AboutMe from './components/AboutMe';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <Grid
      templateAreas={`"header header"
                  "main aboutMeIMG"
                  "testimonials testimonials"
                  "footer footer"`}
      gridTemplateRows={'85px 710px 650px 105px'}
      gridTemplateColumns={'900px 1fr'}
      h='200px'
      color='blackAlpha.700'

    >
      <GridItem pl='2' bg='blue.900' area={'header'}>
        <Text className='scale-font' fontSize="35px" color="blue.300" align="center">
          Alethia Quintero || Full Stack Developer || Richmond, VA
        </Text>
      </GridItem>
      <GridItem pl='2' bg='blue.900' area={'aboutMeIMG'}>
        <Center>
          <Text className='scale-font' align="center" fontSize="120px" color="white" pt="40"> About me </Text>
        </Center>
      </GridItem>
      <AboutMe />
      <Testimonials />
      <GridItem pl='2' bg='blue.900' area={'footer'}>
        <Center>
        <ButtonGroup  variant='ghost' spacing='6'>
          <Button colorScheme="white" pt="12" >
            <Text align="center" color="white" className='scale-font'  fontSize="30px">
              <Link href='https://www.linkedin.com/in/alethia-quintero/' isExternal> LinkedIn </Link>
            </Text>
          </Button>
          <Button colorScheme="white" pt="12">
            <Text align="center" color="white" className='scale-font'  fontSize="30px">
              <Link href='https://github.com/alethiaQ?tab=repositories' isExternal> Github </Link>
            </Text>
          </Button>
          <Button colorScheme="white" pt="12">
            <Text align="center" color="white" className='scale-font' fontSize="30px">
              <Link href='mailto:alethiaq22@gmail.com?body=Hi, I saw your awesome website!' isExternal> Email </Link>
            </Text>
          </Button>
        </ButtonGroup>
        </Center>
       
      </GridItem>
    </Grid>
  )

}

export default App;
