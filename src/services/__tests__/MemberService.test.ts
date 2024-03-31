import membersService from "../MemberService";

describe('MemberService', () => {
    // Each member should include: name, skoolHandle, age, timezone, description, skills, and links
    // links should contain at a minimum a link to the Skool Profile
    test('getMembers are members valid', () => {
        const members = membersService.getMembers();
        members.forEach((member) => {
            expect(member).toHaveProperty('name');
            expect(member).toHaveProperty('picture');
            expect(member).toHaveProperty('skoolHandle');
            expect(member).toHaveProperty('age');
            expect(member).toHaveProperty('timezone');
            expect(member).toHaveProperty('description');
            expect(member).toHaveProperty('skills');
            expect(member).toHaveProperty('links');

            const hasSkoolProfileLink = member.links.find((link) => link.name === 'Skool Profile');
            expect(hasSkoolProfileLink).toBeTruthy();
        });
    });
});
