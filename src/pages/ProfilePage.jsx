import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { IsLogin, UserAtom } from '../recoil/AtomUserState';
import { getProfile } from "../api/profilePageAPI"; 
import { getProfilePost } from "../api/profilePageAPI";
import { getSaleItem } from "../api/profilePageAPI";
import useModalControl from "../hooks/useModalControl";
import useAlertControl from "../hooks/useAlertControl";

import BasicHeader from '../components/header/BasicHeader';
import UserProfile from "../components/common/UserProfile";
import UserPostList from '../components/UserPostList/UserPostList';
import { Modal } from './../components/common/Modal';
import Alert from './../components/common/Alert';
import Loader from "../Loader/Loader";
import { useSetRecoilState } from "recoil";


export default function ProfilePage() {
  const { accountname } = useParams();
  const navigate = useNavigate();
  const [profileProps, setProfileProps] = useState({});
  const [saleItemProps, setSaleItemProps] = useState([]);
  const [profilePostProps, setProfilePostProps] = useState([]);
  const {openModal, ModalComponent} = useModalControl();
  const { openAlert, AlertComponent } = useAlertControl();

  const [isMyAccount, setIsMyAccount] = useState(false);  
  const [profileLoading, setProfileLoading] = useState(false);
  const [postLoading, setPostLoading] = useState(false);

  const setUserValue = useSetRecoilState(UserAtom);
  const setIsLogin = useSetRecoilState(IsLogin);

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

  const handleLogout = (event) =>{
    if (event.target.textContent === '로그아웃') {
      setUserValue({})
      setIsLogin(false)
      sessionStorage.removeItem('user')
      navigate('/');
    } 
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
    <>
      <ProfilePageStyle>
        {isMyAccount ? <BasicHeader isButton={true} handleFunc={openModal} /> : <BasicHeader isButton={false}/>}
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
          <Loader />
        )}
      </ProfilePageStyle>
      <AlertComponent>
        <Alert alertMsg={'로그아웃 하시겠습니까?'} choice={['취소', '로그아웃']} handleFunc={handleLogout} />
      </AlertComponent>
      <ModalComponent>
        <Modal contents={['로그아웃']} handleFunc={openAlert}/>
      </ModalComponent>
    </>
  );
}

const ProfilePageStyle = styled.section`
  height: calc(100vh - 60px);
`;
