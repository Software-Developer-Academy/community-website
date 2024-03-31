//@ts-ignore
import React from "react"
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import membersService, { Member } from "../../services/MemberService";

const GridView = () => {
    const members = membersService.getMembers();
    console.log(members);

    const card = (member: Member) => {
        return (
            <div key={0} className="card">
                <div className="card-header">
                    <img src={member.picture} alt={member.name} className="profile-pic"/>
                    <div>
                        <div className="card-name">{member.name}</div>
                        <div className="card-tagline">{member.age}, Student, EST</div>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-desc">{member.description}</p>
                    <div className="card-chips">
                        <div className="card-chip">Mobile Dev</div>
                        <div className="card-chip">TypeScript</div>
                        {/*<a href={member.links.linkedin} className="card-chip">LinkedIn</a>*/}
                        {/*<a href={member.links.instagram} className="card-chip">Skool Profile</a>*/}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Container fluid={"xs"} className="grid-container">
            <Row>
                {members.map((member) =>
                    <Col md={6} lg={4}>
                        {card(member)}
                    </Col>
                )}
            </Row>
        </Container>
    );
};


export default GridView;
