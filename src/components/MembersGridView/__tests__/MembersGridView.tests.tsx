import React from 'react';
import { render } from '@testing-library/react';
import GridView from '../index';
import { Member } from '../../../services/MemberService';

describe('GridView', () => {
    const members: Member[] = [
        {
            name: 'John Doe',
            picture: 'john-doe.jpg',
            skoolHandle: '@johndoe',
            age: 25,
            role: 'Software Engineer',
            timezone: 'EST',
            description: 'A software engineer with 5 years of experience.',
            skills: ['React', 'Node.js'],
            links: [{ name: 'LinkedIn', url: 'https://www.linkedin.com/in/johndoe' }],
        },
        {
            name: 'Jane Doe',
            picture: 'jane-doe.jpg',
            skoolHandle: '@janedoe',
            age: 25,
            role: 'Software Engineer',
            timezone: 'EST',
            description: 'A software engineer with 5 years of experience.',
            skills: ['React', 'Node.js', 'TypeScript'],
            links: [{ name: 'LinkedIn', url: 'https://www.linkedin.com/in/janedoe' }],
        },
        {
            name: 'John Smith',
            picture: 'john-smith.jpg',
            skoolHandle: '@johnsmith',
            age: 25,
            role: 'Software Engineer',
            timezone: 'CST',
            description: 'A software engineer with 5 years of experience.',
            skills: ['React', 'Node.js', 'TypeScript'],
            links: [{ name: 'LinkedIn', url: 'https://www.linkedin.com/in/johnsmith' }],
        },
        // add more mock members:
        {
            name: 'Tom Smith',
            picture: '@tom-smith.jpg',
            skoolHandle: 'Tom Smith',
            age: 25,
            role: 'Software Engineer',
            timezone: 'CST',
            description: 'A software engineer with 3 years of experience.',
            skills: ['React', 'Node.js', 'TypeScript'],
            links: [{ name: 'LinkedIn', url: 'https://www.linkedin.com/in/janesmith' }],
        }
    ];

    it('should render cards', () => {
        const { container } = render(<GridView members={members}/>);
        const cards = container.querySelectorAll('.card');
        expect(cards.length).toBe(4);
    });

    it('should render member card data', function () {
        const { container } = render(<GridView members={members}/>);
        const card = container.querySelector('.card');
        const name = card?.querySelector('.card-name');
        const tagline = card?.querySelector('.card-tagline');
        const desc = card?.querySelector('.card-desc');
        const chips = card?.querySelectorAll('.card-chip');
        expect(name?.textContent).toBe('John Doe');
        expect(tagline?.textContent).toBe('25, Software Engineer, EST');
        expect(desc?.textContent).toBe('A software engineer with 5 years of experience.');
        expect(chips.length).toBe(3);
    });

    it('should render member count', () => {
        const { container } = render(<GridView members={members}/>);
        const memberCount = container.querySelector('.member-count');
        expect(memberCount?.textContent).toBe('Results: 4');
    });

});
