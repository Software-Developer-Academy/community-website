//@ts-ignore
import React, { useEffect, useState } from "react"
import Navbar from "@components/Navbar";
import FloatingSearchBar from "@components/FloatingSearchBar";
import MembersGridView from "@components/MembersGridView";
import membersService, { Member } from "../../services/MemberService";

function MemberDirectoryPage() {
    const [members, setMembers] = useState<Member[]>([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        setMembers(membersService.getMembers(filter));
    }, [filter]);

    return (
        <div>
            <Navbar/>
            <FloatingSearchBar onSearch={(searchText) => setFilter(searchText)} />
            <MembersGridView members={members}/>
        </div>
    );
}

export default MemberDirectoryPage;
