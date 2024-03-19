import { Box, Center, CardHeader, Grid, GridItem, Stack, Image, Card, CardBody, Heading, Text, CardFooter, Button, Code } from '@chakra-ui/react';
function AboutMe() {
    return (
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
                            Thanks for peaking at my page, I'll get straight to the point. I'm a fullstack developer with expertise in React, Angular, Java and Ruby on Rails, to name a few. I've worked professionally for 4 years as a software developer building large scale applications end to end. I also spent those 4 years in a hybrid environment, where a portion of my time was dedicated to DevOps work. So, I have the ability to thrive in high-stress environments and simultaneously build and design clean, moduler, and scalabe applications that fit the needs of users, easy to maintain, and frankly, are nice to look at. Please check out my resume for a bit more!
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
    )
}
export default AboutMe;