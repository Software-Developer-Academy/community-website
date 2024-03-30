//@ts-ignore
import React from "react"
import Navbar from "@components/Navbar";
import FloatingSearchBar from "@components/FloatingSearchBar";
import MembersGridView from "@components/MembersGridView";

function MemberDirectoryPage() {
    return (
        <div>
            <Navbar/>
            <FloatingSearchBar />
            <MembersGridView />
        </div>
    );
}

export default MemberDirectoryPage;
