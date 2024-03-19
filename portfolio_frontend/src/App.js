import { Box, Center, CardHeader, Grid, GridItem, Stack, Image, Card, CardBody, Heading, Text, CardFooter, Button, Code } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      templateAreas={`"header header"
                  "main main"
                  "testimonials testimonials"
                  "footer footer"`}
      gridTemplateRows={'80px 550px 650px 100px'}
      gridTemplateColumns={'250px 1fr'}
      h='200px'
      gap='1'
      color='blackAlpha.700'

    >
      <GridItem pl='2' bg='blue.300' area={'header'}>
        Header
      </GridItem>
      {/* <GridItem pl='2' bg='pink.300' area={'nav'}>
        Nav
      </GridItem> */}
      <GridItem pl='2' area={'main'}>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline elevated'
          py='2'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
            alt='Caffe Latte'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>Hello!</Heading>

              <Code>
                Thanks for peaking at my page, I'll try to get straight to the point. I'm a fullstack developer with expertise in React, Angular, Java and Ruby on Rails to name a few. I've worked professionally for 4 years as a software developer building large scale applications end to end. I also spent those 4 years in a hybrid environment, where a portion of my time was dedicated to DevOps work. So, I have the ability to thrive in high-stress environments and simultaneously build and design clean, moduler, and scalabe applications that fit the needs of our customers. Please check out my resume for a bit more.
              </Code>
            </CardBody>

            <CardFooter>
              <Button variant='outline' colorScheme='blue'>
                Resume
              </Button>
            </CardFooter>
          </Stack>
        </Card>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline elevated'
          py='2'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
            alt='Caffe Latte'
          />

          <Stack>
            <CardBody>
              <Heading size='md'>Projects</Heading>

              <Code>
                I've completed a wide range of personal projects, from a Stranger Things Directory CLI Ruby Gem, A Single Page Application featuring the beloved Lorax and a menacing "Tree Gobbling" Snake game (JavaScript, Rails, SQL), to working in a small group leading React Development for an end-to-end Travel Buddy application (React, AWS, Java). Although, there is a gap of activity on my Github from when I was at my previous role, it's still a great place to check out my code and see what I'm up to today.
              </Code>
            </CardBody>

            <CardFooter>
              <Button variant='outline' colorScheme='blue'>
                Github
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </GridItem>
      <GridItem pl='2' bg='blue.900' area={'testimonials'}>
        <Box position="relative" h="100vh" p={12}>
          <Center>
            <Card >
              <CardHeader>
                <Heading>Testimonials</Heading>
              </CardHeader>
              <CardBody>
                Michael Grace, Technical Delivery Manager at Comcast Technology: <br/>
                <Text as='cite'>
                  "I had the privilege of working alongside Alethia on a critical project to develop a tool for identifying risks in our media processing system. Her expertise in interface design and implementation was pivotal in creating a user-friendly and effective solution. Alethia’s ability to translate complex designs into practical web interfaces significantly enhanced our system's performance and reliability. <br/><br/>

                  Her communication skills and problem-solving approach were instrumental in the project's success. Alethia excelled in identifying key issues and collaborating with the team to find innovative solutions. Her commitment to user experience was evident in how she organized data, making it intuitive and actionable. <br/><br/>

                  Beyond her technical acumen, Alethia's positive attitude made the collaboration enjoyable and productive. She is a team player whose presence I would seek in future projects. Her blend of skill, creativity, and teamwork makes her a standout professional. <br/><br/>

                  Alethia is a remarkable talent in interface design and web development, whose contributions have a lasting impact. I wholeheartedly recommend her for her skills, teamwork, and positive influence on project outcomes."
                </Text>

              </CardBody>
              <CardFooter>
                <Button colorScheme="blue.900">Sign up</Button>
              </CardFooter>
            </Card>
          </Center>

        </Box>
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
      </GridItem>
    </Grid>)

}

export default App;
