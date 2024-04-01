import membersService from "../MemberService";

describe('MemberService', () => {
    // Each member should include: name, skoolHandle, age, role, timezone, description, skills, and links
    // links should contain at a minimum a link to the Skool Profile
    test('getMembers are members valid', () => {
        const members = membersService.getMembers();
        members.forEach((member) => {
            expect(member).toHaveProperty('name');
            expect(member).toHaveProperty('picture');
            expect(member).toHaveProperty('skoolHandle');
            expect(member).toHaveProperty('age');
            expect(member).toHaveProperty('role');
            expect(member).toHaveProperty('timezone');
            expect(member).toHaveProperty('description');
            expect(member).toHaveProperty('skills');
            expect(member).toHaveProperty('links');

            expect(member.name.length).toBeGreaterThan(0);
            expect(member.age).toBeGreaterThan(0);
            expect(member.description.length).toBeLessThan(300);
            expect(member.name.length).toBeGreaterThan(0);

            if (member.skoolHandle !== "@kenneth-gunderman-1771") {
                expect(member.role === 'Software Developer' || member.role === 'Student').toBeTruthy();
            }

            const hasSkoolProfileLink = member.links.find((link) => link.name === 'Member Profile');
            expect(hasSkoolProfileLink).toBeTruthy();
        });
    });
});
