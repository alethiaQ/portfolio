import { Box, Center, CardHeader, GridItem, Card, CardBody, Heading, Text, CardFooter, Button } from '@chakra-ui/react';
import '../App.css';
function Testimonials() {

    return (
        <GridItem pl='2' bg='blue.300' area={'testimonials'}>
        <Box position="relative" h="100vh" p={12}>
            <Center>
                <Card >
                    <CardHeader>
                        <Text className='scale-font' fontSize="50px">Testimonials</Text>
                    </CardHeader>
                    <CardBody>
                        Michael Grace, Technical Delivery Manager at Comcast Technology: <br />
                        <Text as='cite'>
                            "I had the privilege of working alongside Alethia on a critical project to develop a tool for identifying risks in our media processing system. Her expertise in interface design and implementation was pivotal in creating a user-friendly and effective solution. Alethia’s ability to translate complex designs into practical web interfaces significantly enhanced our system's performance and reliability. <br /><br />

                            Her communication skills and problem-solving approach were instrumental in the project's success. Alethia excelled in identifying key issues and collaborating with the team to find innovative solutions. Her commitment to user experience was evident in how she organized data, making it intuitive and actionable. <br /><br />

                            Beyond her technical acumen, Alethia's positive attitude made the collaboration enjoyable and productive. She is a team player whose presence I would seek in future projects. Her blend of skill, creativity, and teamwork makes her a standout professional. <br /><br />

                            Alethia is a remarkable talent in interface design and web development, whose contributions have a lasting impact. I wholeheartedly recommend her for her skills, teamwork, and positive influence on project outcomes."
                        </Text>

                    </CardBody>
                    <CardFooter>
                        {/* <Button colorScheme="blue" variant="outline" position="middle">Sign up</Button> */}
                    </CardFooter>
                </Card>
            </Center>

        </Box>
    </GridItem>)
}
export default Testimonials;