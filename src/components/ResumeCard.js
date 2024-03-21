import { Document, Page } from 'react-pdf';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Code,
    Center,
    Heading,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Stack,
    Text
} from '@chakra-ui/react'
import { pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import { useDisclosure } from '@chakra-ui/react'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function ResumeCard() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const aboutMeBlurb = `First of all, thanks for checking out my page! I'll get straight to the point. I'm a fullstack developer with expertise in React, Angular, Java and Ruby on Rails, to name a few. I've worked professionally for 4 years as a software developer building large scale applications end to end. I also spent those 4 years in a hybrid environment, where a portion of my time was dedicated to DevOps work. So, I have the ability to thrive in high-stress environments and simultaneously build and design clean, moduler, and scalabe applications that fit the needs of users, are easy to maintain, and frankly, are nice to look at. Please check out my resume for a bit more!`;
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
                src='headshotOpt.jpeg'
                alt='Headshot'
            />
            <Stack>
                <CardBody>
                    <Heading size='md'>Welcome</Heading>
                    <Code>
                        {aboutMeBlurb}
                    </Code>
                </CardBody>
                <CardFooter>
                    <Button variant='outline' colorScheme='blue' onClick={onOpen}>
                        Resume
                    </Button>
                    <Modal isOpen={isOpen} onClose={onClose} size='full' bg="blue.300">
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>
                                <Text className="scale-font" fontSize="55px" color="blue.900"> Resume
                                </Text>
                                <Text className="scale-font" color="blue.300">
                                    (Email me for a copy!)
                                </Text>
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <Center>
                                    <Document file="AlethiaQuintero_Resume.pdf" onLoadError={console.error} style={{ width: '100vw', height: 'auto' }}>
                                        <Page pageNumber={1} renderTextLayer={false} />
                                    </Document>
                                </Center>

                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </CardFooter>
            </Stack>
        </Card>
    )
}
export default ResumeCard;