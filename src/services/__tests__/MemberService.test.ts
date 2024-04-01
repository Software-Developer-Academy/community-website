import membersService from "../MemberService";
import memberData from "../../data/member-data.json";

describe('MemberService', () => {
    // Each member should include: name, skoolHandle, age, role, timezone, description, skills, and links
    // links should contain at a minimum a link to the Skool Profile
    test('getMembers contains valid members', () => {
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

            expect(member.description.length).toBeLessThan(300);
            if (member.skoolHandle !== "@kenneth-gunderman-1771" || member.skoolHandle !== "@kevin-naughton-6281") {
                expect(member.role === 'Software Developer' || member.role === 'Student').toBeTruthy();
            }

            const hasSkoolProfileLink = member.links.find((link) => link.name === 'Member Profile');
            expect(hasSkoolProfileLink).toBeTruthy();
        });
    });

    test('getMembers returns all members when no filter is provided', () => {
        const members = membersService.getMembers();
        expect(members.length).toBe(memberData.length);
    });

    test('getMembers returns all members when an empty filter is provided', () => {
        const members = membersService.getMembers('');
        expect(members.length).toBe(memberData.length);
    });

    test('getMembers filters members by name', () => {
        const members = membersService.getMembers('Kenny Gunderman');
        expect(members.length).toBe(1);
        expect(members[0].name).toBe('Kenny Gunderman');
    });
});
