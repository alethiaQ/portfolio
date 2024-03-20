import { GridItem, Stack, Image, Card, CardBody, Heading, CardFooter, Button, Code, Link, Text, Center, AbsoluteCenter } from '@chakra-ui/react';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
function AboutMe() {
    const { isOpen, onOpen, onClose } = useDisclosure();
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
                    src='headshotOpt.jpeg'
                    alt='Headshot'
                />
                <Stack>
                    <CardBody>
                        <Heading size='md'>Welcome</Heading>
                        <Code>
                            First of all, thanks for checking out my page! I'll get straight to the point. I'm a fullstack developer with expertise in React, Angular, Java and Ruby on Rails, to name a few. I've worked professionally for 4 years as a software developer building large scale applications end to end. I also spent those 4 years in a hybrid environment, where a portion of my time was dedicated to DevOps work. So, I have the ability to thrive in high-stress environments and simultaneously build and design clean, moduler, and scalabe applications that fit the needs of users, are easy to maintain, and frankly, are nice to look at. Please check out my resume for a bit more!
                        </Code>
                    </CardBody>
                    <CardFooter>
                        <Button variant='outline' colorScheme='blue' onClick={onOpen}>
                            Resume
                        </Button>
                        <Modal isOpen={isOpen} onClose={onClose} size='full'>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>
                                    <Text className="scale-font" fontSize="45px"> Resume
                                    </Text>
                                </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Center>
                                        <Document file="AlethiaQuintero_Resume.pdf" onLoadError={console.error} style={{ width: '100vw', height: 'auto' }}>
                                            <Page pageIndex={0} />
                                        </Document>
                                    </Center>

                                </ModalBody>
                            </ModalContent>
                        </Modal>
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
        </GridItem>
    )
}
export default AboutMe;