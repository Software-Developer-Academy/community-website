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
    public getMembers(): Member[] {
        return memberData;
    }
}


const membersService = new MemberService();
export default membersService;
