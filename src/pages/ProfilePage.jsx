import styled from "styled-components";

import { NavBar } from "../components/common/NavBar";
import UserProfile from "../components/common/UserProfile";
import { getProfile } from "../apiTest/profilePageAPI"; 
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [profileProps, setProfileProps] = useState({});

  useEffect(()=>{    
    const loadProfilePage = async()=>{
      const user = await getProfile(
        JSON.parse(sessionStorage.getItem('user')).UserAtom.accountname
      );
      setProfileProps({ ...profileProps, ...user.profile });
    }
    loadProfilePage()
  }, [])
  
  return (
    <ProfilePageStyle>
      <UserProfile profile={profileProps} />
      <NavBar />
    </ProfilePageStyle>
  );
}

const ProfilePageStyle = styled.section`
  width: var(--basic-width);
  background-color: var(--background-color);
`;

