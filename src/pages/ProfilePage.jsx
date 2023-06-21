import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import UserProfile from "../components/common/UserProfile";
import UserPostList from '../components/UserPostList/UserPostList';
import BasicHeader from '../components/header/BasicHeader';
import { getProfile } from "../api/profilePageAPI"; 
import { getProfilePost } from "../api/profilePageAPI";
import { getSaleItem } from "../api/profilePageAPI";


export default function ProfilePage() {
  const { accountname } = useParams();
  const [profileProps, setProfileProps] = useState({});
  const [saleItemProps, setSaleItemProps] = useState([]);
  const [profilePostProps, setProfilePostProps] = useState([]);

  const [isMyAccount, setIsMyAccount] = useState(false);  
  const [profileLoading, setProfileLoading] = useState(false);
  const [postLoading, setPostLoading] = useState(false);

  const loadProfilePage = async () => {
    const user = await getProfile(accountname);
    setProfileProps({ ...user.profile });
    setProfileLoading(true);
  };

  const loadPosts = async() =>{
    const saleItems = await getSaleItem(accountname);
    const profilePosts = await getProfilePost(accountname);
    setSaleItemProps([...saleItems.product]);
    setProfilePostProps([...profilePosts.post]);
    setPostLoading(true);
  }

  useEffect(()=>{    
    setProfileLoading(false);
    setPostLoading(false);
    const myAccountName = JSON.parse(sessionStorage.getItem('user')).UserAtom.accountname;
    accountname === myAccountName ? setIsMyAccount(true) : setIsMyAccount(false)    

    loadProfilePage()
    loadPosts()
  }, [accountname])

  

  return (
    <ProfilePageStyle>
      <BasicHeader />
      {profileLoading && postLoading ? (
        <>
          <UserProfile
            profile={profileProps}
            isMyAccount={isMyAccount}
            loadProfilePage={loadProfilePage}
          />
          <UserPostList saleItem={saleItemProps} post={profilePostProps} />
        </>
      ) : (
        <div>로딩중</div>
      )}
    </ProfilePageStyle>
  );
}

const ProfilePageStyle = styled.section`
  height: calc(100vh - 60px);
`;
