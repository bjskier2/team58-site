import { Flex, Heading } from 'theme-ui';
import { Card } from '../../cards/Card';
import { CardContainer } from '../../cards/CardContainer';
import { CardImage } from '../../cards/CardImage';
import beckyImg from '../images/becky.jpg';
import fuzzyImg from '../images/fuzzyLumkins.jpg';
import guinnevereImg from '../images/guinnevere.jpg';
import pdiddyImg from '../images/pdiddy.jpg';
import { Container } from './Container';


export default function  Team() {
    const robots = [
        {
          key: "frc58_2006",
          robot_name: "Sir Launch-A-Lot",
          team_key: "frc58",
          year: 2006,
          img: fuzzyImg
        },
        {
          key: "frc58_2015",
          robot_name: "Goddard",
          team_key: "frc58",
          year: 2015,
          img: fuzzyImg
        },
        {
          key: "frc58_2016",
          robot_name: "Guinnevere",
          team_key: "frc58",
          year: 2016,
          img: guinnevereImg
        },
        {
          key: "frc58_2017",
          robot_name: "Faraday",
          team_key: "frc58",
          year: 2017,
          img: fuzzyImg
        },
        {
          key: "frc58_2018",
          robot_name: "P. I. D. iddy",
          team_key: "frc58",
          year: 2018,
          img: pdiddyImg
        },
        {
          key: "frc58_2020",
          robot_name: "P. I. D. iddy",
          team_key: "frc58",
          year: 2020,
          img: fuzzyImg
        },
        {
          key: "frc58_2022",
          robot_name: "Becky",
          team_key: "frc58",
          year: 2022,
          img: beckyImg
        }
    ].sort((left, right) => left.year < right.year ? 1 : -1);

    return (
        <Container id="team">
            <Heading variant='h3'>Collection of Really Cool Robots!</Heading>
            <Flex sx={{ maxWidth: 1400, justifyContent: 'center', margin: 'auto' }}>
                <CardContainer>
                    {robots.map((robot) => (
                        <Card
                            bottomColor="grey"
                            key={robot.key}
                            height={400}
                        >
                        <CardImage src={robot.img} />
                        <Flex sx={{ flex: '1 1 auto', flexDirection: 'column', padding: '1rem' }}>
                          <Heading variant="h3">{robot.robot_name}</Heading>
                          <Heading variant="h4">{robot.year}</Heading>
                  </Flex>
                </Card>
              ))}
            </CardContainer>
          </Flex>
        </Container>
      );
}

