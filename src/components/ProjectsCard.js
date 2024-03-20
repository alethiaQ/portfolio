import { Stack, Image, Card, CardBody, Heading, CardFooter, Button, Code, Link } from '@chakra-ui/react';
function ProjectsCard() {

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline elevated'
            py='2'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='blue_lorax.jpeg'
                alt='Lorax Icon'
            />
            <Stack>
                <CardBody>
                    <Heading size='md'>Projects</Heading>
                    <Code>
                        I've completed a wide range of personal projects, from a Stranger Things Directory CLI Ruby Gem, A Single Page Application featuring the beloved Lorax and a menacing "Tree Gobbling" Snake game (JavaScript, Rails, SQL), to working in a small group leading React Development for an end-to-end Travel Buddy application (React, AWS, Java). Although, there is a gap of activity on my Github from while I was at my former company, it's still a great place to check out my code and see what I'm up to today. Currently, I'm diving into React Native and plan on starting another project soon.
                    </Code>
                </CardBody>

                <CardFooter>
                    <Button variant='outline' colorScheme='blue'>
                        <Link href='https://github.com/alethiaQ?tab=repositories' isExternal>
                            Github
                        </Link>
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    )
}
export default ProjectsCard;