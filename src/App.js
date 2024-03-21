import { Center, Grid, GridItem, Text } from '@chakra-ui/react';
import './App.css';
import AboutMe from './components/AboutMe';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const baseTempAreas = `"header" "aboutMeIMG" "main" "testimonials" "footer"`;
  const mdTempAreas = `"header header" "main aboutMeIMG" "testimonials testimonials" "footer footer"`;
  const headerText = "Alethia Quintero || Full Stack Developer || Richmond, VA";
  return (
    <Grid
      templateAreas={{ base: baseTempAreas, md: mdTempAreas}}
      gridTemplateRows={{ base: '1fr 2fr 6fr 6fr 4fr', md: '85px 710px 650px 105px' }}
      gridTemplateColumns={{ base: '4fr', md: '2fr 1fr' }}
      h='200px'
      color='blackAlpha.700'

    >
      <GridItem pl='2' bg='blue.900' area={'header'}>
        <Text className='scale-font' fontSize={{ base: "24px", md: "30px", lg: "40px" }} color="blue.300" align="center">
          {headerText}
        </Text>
      </GridItem>
      <AboutMe />
      <GridItem pl='2' bg='blue.900' area={'aboutMeIMG'}>
        <Center>
          <Text className='scale-font' align="center" fontSize={{ base: "40px", md: "80px", lg: "120px" }} color="white" pt={{ base: 4, md: 40 }}> About me </Text>
        </Center>
      </GridItem>

      <GridItem pl='2' bg='blue.300' area={'testimonials'}>
        <Testimonials />
      </GridItem>
      <GridItem bg='blue.900' area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  )

}

export default App;
