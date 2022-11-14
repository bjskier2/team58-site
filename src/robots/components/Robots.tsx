import { Flex, Heading } from 'theme-ui';
import { Card } from '../../cards/Card';
import { CardContainer } from '../../cards/CardContainer';
import { Container } from '../../home/components/Container';

export default function  Team() {
    const robots = [
        {
          "key": "frc58_2006",
          "robot_name": "Sir Launch-A-Lot",
          "team_key": "frc58",
          "year": 2006
        },
        {
          "key": "frc58_2015",
          "robot_name": "Goddard",
          "team_key": "frc58",
          "year": 2015
        },
        {
          "key": "frc58_2016",
          "robot_name": "Guinnevere",
          "team_key": "frc58",
          "year": 2016
        },
        {
          "key": "frc58_2017",
          "robot_name": "Faraday",
          "team_key": "frc58",
          "year": 2017
        },
        {
          "key": "frc58_2018",
          "robot_name": "P. I. D. iddy",
          "team_key": "frc58",
          "year": 2018
        },
        {
          "key": "frc58_2020",
          "robot_name": "P. I. D. iddy",
          "team_key": "frc58",
          "year": 2020
        },
        {
          "key": "frc58_2022",
          "robot_name": "Becky",
          "team_key": "frc58",
          "year": 2022
        }
    ].sort((left, right) => left.year < right.year ? 1 : -1);

    return (
        <Container id="team">
            <Heading variant='h3'>Team 58</Heading>
             <p>Team Robots</p>
            <Flex sx={{ maxWidth: 1400, justifyContent: 'center', margin: 'auto' }}>
                <CardContainer>
                    {robots.map((robot) => (
                        <Card
                            bottomColor="grey"
                            key={robot.key}
                        >
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

