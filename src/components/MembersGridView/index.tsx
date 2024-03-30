//@ts-ignore
import React from "react"
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { kennyProfilePic } from "@assets/profile-pics";

const GridView = () => {
    // Sample data
    const people = [];

    for (let i = 0; i < 11; i++) {
        people.push(
            {
                name: 'John Doe',
                age: 22,
                description: 'A passionate software developer.',
                profilePicture: kennyProfilePic,
                links: {
                    linkedin: 'https://www.linkedin.com/in/johndoe',
                    instagram: 'https://www.instagram.com/johndoe',
                    twitter: 'https://twitter.com/johndoe',
                },
            },
        )
    }

    const card = (person: any) => {
        return (
            <div key={0} className="card">
                <div className="card-header">
                    <img src={person.profilePicture} alt={person.name} className="profile-pic"/>
                    <div>
                        <div className="card-name">{person.name}</div>
                        <div className="card-tagline">{person.age}, Student, EST</div>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-desc">{person.description}</p>
                    <div className="card-chips">
                        <div className="card-chip">Mobile Dev</div>
                        <div className="card-chip">TypeScript</div>
                        <a href={person.links.linkedin} className="card-chip">LinkedIn</a>
                        <a href={person.links.instagram} className="card-chip">Skool Profile</a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Container fluid={"xs"} className="grid-container">
            <Row>
                {people.map((person) =>
                    <Col md={6} lg={4}>
                        {card(person)}
                    </Col>
                )}
            </Row>
        </Container>
    );
};


export default GridView;
