import { useEffect, useState } from "react";
import styled from "styled-components";

import { NavBar } from "../components/common/NavBar";
import UserProfile from "../components/common/UserProfile";
import UserPostList from '../components/UserPostList/UserPostList';
import BasicHeader from '../components/header/BasicHeader';
import { getProfile } from "../apiTest/profilePageAPI"; 
import { getProfilePost } from "../apiTest/profilePostAPI";
import { getSaleItem } from "../apiTest/profileSaleItemAPI";


export default function ProfilePage() {
  const [profileProps, setProfileProps] = useState({});
  const [saleItemProps, setSaleItemProps] = useState([]);
  const [profilePostProps, setProfilePostProps] = useState([]);
  

  useEffect(()=>{    
    const accountName = JSON.parse(sessionStorage.getItem('user')).UserAtom.accountname;

    const loadProfilePage = async()=>{
      const user = await getProfile(accountName);
      setProfileProps({...user.profile});
    }

    const loadSaleItem = async() => {
      const saleItems = await getSaleItem(accountName);
      setSaleItemProps([...saleItems.product])  
      // console.log(saleItems.product);
          
    }

    const loadProfilePost = async () => {
      const profilePosts = await getProfilePost(accountName);
      setProfilePostProps([...profilePosts.post])
      console.log(profilePosts.post)
    };

    loadProfilePage()
    loadSaleItem()
    loadProfilePost()
  }, [])
  
  return (
    <ProfilePageStyle>
      <BasicHeader />
      <UserProfile profile={profileProps} />
      <UserPostList saleItem={saleItemProps} post={profilePostProps}/>
      <NavBar />
    </ProfilePageStyle>
  );
}

const ProfilePageStyle = styled.section`
  width: var(--basic-width);
  background-color: var(--background-color);
`;

