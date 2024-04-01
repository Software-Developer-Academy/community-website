//@ts-ignore
import React from "react"
import './styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Member } from "../../services/MemberService";

interface Props {
    members: Member[];
}

const GridView = (props: Props) => {
    const { members } = props;
    const card = (member: Member) => {
        return (
            <div key={0} className="card">
                <div className="card-header">
                    <img src={'/community-website/profile-pics/' + member.picture} alt={member.name} className="profile-pic"/>
                    <div>
                        <div className="card-name">{member.name}</div>
                        <div className="card-tagline">{member.age}, {member.role}, EST</div>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-desc">{member.description}</p>
                    <div className="card-chips">
                        {member.skills.map((skill) => <div className="card-chip">{skill}</div>)}
                        {member.links.map((link) => <a href={link.url} className="card-chip">{link.name}</a>)}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Container fluid={"xs"} className="grid-container">
            <Row>
                {members.map((member) =>
                    <Col key={member.skoolHandle} md={6} lg={4}>
                        {card(member)}
                    </Col>
                )}
            </Row>
        </Container>
    );
};


export default GridView;
