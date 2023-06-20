import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import UserProfile from "../components/common/UserProfile";
import UserPostList from '../components/UserPostList/UserPostList';
import BasicHeader from '../components/header/BasicHeader';
import { getProfile } from "../apiTest/profilePageAPI"; 
import { getProfilePost } from "../apiTest/profilePostAPI";
import { getSaleItem } from "../apiTest/profileSaleItemAPI";


export default function ProfilePage() {
  const { accountname } = useParams();

  const [profileProps, setProfileProps] = useState({});
  const [saleItemProps, setSaleItemProps] = useState([]);
  const [profilePostProps, setProfilePostProps] = useState([]);

  const [isMyAccount, setIsMyAccount] = useState(false);  

  const loadProfilePage = async () => {
    const user = await getProfile(accountname);
    setProfileProps({ ...user.profile });
  };

  const loadSaleItem = async () => {
    const saleItems = await getSaleItem(accountname);
    setSaleItemProps([...saleItems.product]);
  };

  const loadProfilePost = async () => {
    const profilePosts = await getProfilePost(accountname);
    setProfilePostProps([...profilePosts.post]);
  };    

  useEffect(()=>{    
    const myAccountName = JSON.parse(sessionStorage.getItem('user')).UserAtom.accountname;
    accountname === myAccountName ? setIsMyAccount(true) : setIsMyAccount(false)    

    loadProfilePage()
    loadSaleItem()
    loadProfilePost()
  }, [])

  

  return (
    <ProfilePageStyle>
      <BasicHeader />
      <UserProfile profile={profileProps} isMyAccount={isMyAccount} loadProfilePage={loadProfilePage} />
      <UserPostList saleItem={saleItemProps} post={profilePostProps} />
    </ProfilePageStyle>
  );
}

const ProfilePageStyle = styled.section`
  height: calc(100vh - 60px);
`;
