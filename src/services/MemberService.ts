import memberData from './../data/member-data.json';


interface MemberLink {
    name: string;
    url: string;
}

export interface Member {
    name: string;
    picture: string;
    skoolHandle: string;
    age: number;
    role: string;
    timezone: string;
    description: string;
    skills: string[];
    links: MemberLink[];
}

class MemberService {
    public getMembers(nameFilter?: string): Member[] {
        const members = memberData;
        if (!nameFilter || nameFilter === '') {
            return members;
        } else {
            return members.filter((member) => member.name.includes(nameFilter));
        }
    }
}


const membersService = new MemberService();
export default membersService;
