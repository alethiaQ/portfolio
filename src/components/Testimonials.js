import { Box, CardHeader, Card, CardBody, Text, CardFooter } from '@chakra-ui/react';
import '../App.css';
function Testimonials() {

    return (
        <Box p={[2, 2, 12]} >
            <Card
                overflow='hidden'
                variant='outline elevated'
                py='2'
            >
                <CardHeader>
                    <Text className='scale-font' fontSize={{ base: "40px", md: "40px", lg: "50px" }}>Testimonials</Text>
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
                    {/* kept for automatic padding */}
                </CardFooter>
            </Card>
        </Box>
    )

}
export default Testimonials;