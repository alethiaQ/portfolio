import { Center, Grid, GridItem, Text } from '@chakra-ui/react';
import './App.css';
import AboutMe from './components/AboutMe';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

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
      <GridItem bg='blue.900' area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  )

}

export default App;