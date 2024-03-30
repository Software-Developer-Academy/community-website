//@ts-ignore
import React from "react"
import {kennyProfilePic} from "@assets/profile-pics";
import './styles.css';

const GridView = () => {
    // Sample data
    const people = [
    ];

    for (let i = 0; i < 5; i++) {
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

    // Managing this with raw CSS media queries sucks, we should probably just use bootstraps grid system:
    // https://getbootstrap.com/docs/4.0/layout/grid/
    return (
        <div className="grid-container">
            {people.map((person, index) => (
                <div key={index} className="card">
                    <div className="card-header">
                        <img src={person.profilePicture} alt={person.name} className="profile-pic" />
                        <div>
                            <div className="card-name">{person.name}</div>
                            <div className="card-tagline">{person.age}, Student, EST</div>
                        </div>
                    </div>
                    <p className="card-desc">{person.description}</p>
                    <div className="card-chips">
                        <div className="card-chip">Mobile Dev</div>
                        <div className="card-chip">TypeScript</div>
                        <a href={person.links.linkedin} className="card-chip">LinkedIn</a>
                        <a href={person.links.instagram} className="card-chip">Skool Profile</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GridView;
