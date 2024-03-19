import { Box, Center, CardHeader, Grid, GridItem, Stack, Image, Card, CardBody, Heading, Text, CardFooter, Button, Code } from '@chakra-ui/react';
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
      gridTemplateRows={'80px 710px 650px 100px'}
      gridTemplateColumns={'900px 1fr'}
      h='200px'
      // gap='1'
      color='blackAlpha.700'

    >
      <GridItem pl='2' bg='blue.900' area={'header'}>
        Header
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
    </Grid>)

}

export default App;
