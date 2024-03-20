import { Center, Grid, GridItem, Text } from '@chakra-ui/react';
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
      gridTemplateRows={'85px 710px 650px 100px'}
      gridTemplateColumns={'900px 1fr'}
      h='200px'
      color='blackAlpha.700'

    >
      <GridItem pl='2' bg='blue.900' area={'header'}>
        <Text className='scale-font' fontSize="40px" color="blue.300" align="center">
          Alethia Quintero || Full Stack Developer
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
        Footer
      </GridItem>
    </Grid>
  )

}

export default App;
