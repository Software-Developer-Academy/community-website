import fs from 'fs';
import path from 'path';

interface MemberLink {
    name: string;
    link: string;
}

export interface Member {
    name: string;
    picture: string;
    skoolHandle: string;
    age: number;
    timezone: string;
    description: string;
    skills: string[];
    links: MemberLink[];
}

class MemberService {
    public getMembers(): Member[] {
        const filePath = path.join(__dirname, '..', 'data', 'member-data.json');

        try {
            // Synchronously read the file
            const rawData = fs.readFileSync(filePath, { encoding: 'utf8' });

            // Parse the JSON data
            return JSON.parse(rawData);
        } catch (error) {
            console.error('Error reading the JSON file:', error);
            return [];
        }
    }
}


const membersService = new MemberService();
export default membersService;
