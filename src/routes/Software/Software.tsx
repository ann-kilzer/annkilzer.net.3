import { FC } from 'react';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from '@mui/material/Link';


const Software: FC = () => {
    return <Container>
        <Stack spacing={2}>
            <Typography variant="h2">Software</Typography>

            <Typography variant="h3">Personal Projects</Typography>
            <Typography variant="body1">Check out my
                <Link href="https://github.com/ann-kilzer" target="_blank">
                    GitHub page</Link> to see my hobby projects.
            </Typography>

            <Typography variant="h3">Publications & Presentations</Typography>
            <List>
                <ListItem>
                    &ldquo;Canary in a coal mine: Building infrastructure resiliency with canary data reloads.&rdquo; Velocity. San Jose, California. June 22, 2017.
                </ListItem>
                <ListItem>
                    Joseph A. Calandrino, Ann Kilzer, Arvind Narayanan, Edward W. Felten, Vitaly Shmatikov. &ldquo;You Might Also Like: Privacy Risks of Collaborative Filtering.&rdquo; S&P.
                    Oakland, CA: IEEE, May 2011. Press: The Economist Blog June 15, 2011.
                </ListItem>
                <ListItem>
                    Indrajit Roy, Srinath T.V. Setty, Ann Kilzer, Vitaly Shmatikov, Emmett Witchel.
                    &ldquo; Airavat: Security and Privacy for MapReduce.&rdquo;
                    NSDI. San Jose, CA: USENIX, April 2010.
                </ListItem>
                <ListItem>
                    James Horey, Jean-Charles Tournier, Patrick Widener, Arthur B. Maccabe, Ann Kilzer.
                    &ldquo;A Filesystem Interface for Sensor Networks.&rdquo;
                    HotEmNets. Charlottesville, Virginia: ACM, June 2008.
                </ListItem>
            </List>

            <Typography variant="h3">Selected Work Experiences</Typography>
            <List>
                <ListItem>Slalom Build: Software Architect (November 2022 - Present)</ListItem>
                <ListItem>Mercari: Software Engineer (October 2020 - November 2022)</ListItem>
                <ListItem>Curvegrid: Lead Software Engineer (March 2018 - July 2020)</ListItem>
                <ListItem>Indeed: Software Engineer (September 2014 to July 2017)</ListItem>
                <ListItem>Boundary: Software Engineer (June 2013 to August 2014)</ListItem>
                <ListItem>Telogis: Software Engineer (February 2012 to May 2013)</ListItem>
                <ListItem>The University of Texas at Austin: Research Assistant (August 2009 to August 2011)</ListItem>
                <ListItem>Google: Software Engineering Intern (May - August 2009)</ListItem>
                <ListItem>Google: Platforms Software Engineering Intern (May - August 2008)</ListItem>
                <ListItem>Scalable Systems Lab at The University of New Mexico, Albuquerque, New Mexico: Research Assistant (June - August 2007)</ListItem>
                <ListItem>Department of Mathematics at California State University, San Bernardino: NSF Research Experience for Undergraduates (July - August 2006)</ListItem>
            </List>

            <Typography variant="h3">Volunteering</Typography>
            <List>
                <ListItem>
                    Women Who Code: Senior Director, APAC (volunteer) (August 2023 - Present)
                </ListItem>
                <ListItem>
                    Women Who Code Tokyo: Director (volunteer) (October 2020 - July 2023)
                </ListItem>
                <ListItem>
                    Find a Doc, Japan (Summer 2021)
                </ListItem>
                <ListItem>
                    Austin Pets Alive! Cat Rescue Evaluator (August 2011 - November 2016)
                </ListItem>
            </List>
        </Stack>
    </Container >
}

export default Software
