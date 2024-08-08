import { Stack, Image, Card, CardBody, Heading, CardFooter, Button, Code, Link } from '@chakra-ui/react';
function ProjectsCard() {
    const projectBlurb = `I've completed a wide range of personal projects, from a Stranger Things Directory CLI Ruby Gem, A Single Page Application featuring the beloved Lorax and a menacing "Tree Gobbling" Snake game (JavaScript, Rails, SQL), to working in a small group leading React Development for an end-to-end Travel Buddy application (React, AWS, Java). Currently, I'm diving into React Native and plan on starting another project soon.`;
    return (
        <Card
            direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
            overflow='wrap'
            variant='outline elevated'
            p='2'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '100%', md: '200px' }}
                src='blue_lorax.jpeg'
                alt='Lorax Icon'
            />
            <Stack>
                <CardBody>
                    <Heading size='md'>Projects</Heading>
                    <Code>
                      {projectBlurb}
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