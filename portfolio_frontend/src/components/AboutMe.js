import { GridItem } from '@chakra-ui/react';
import ResumeCard from './ResumeCard';
import ProjectsCard from './ProjectsCard';

function AboutMe() {

    return (
        <GridItem pl='2' area={'main'}>
            <ResumeCard />
            <ProjectsCard />
        </GridItem>
    )
}
export default AboutMe;