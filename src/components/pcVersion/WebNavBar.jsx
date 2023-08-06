import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as IconHome } from '../../assets/img/icon-web-home.svg';
import { ReactComponent as IconHeart } from '../../assets/img/s-icon-heart.svg';
import { ReactComponent as IconMessage } from '../../assets/img/icon-message.svg';
import { ReactComponent as IconEdit } from '../../assets/img/icon-edit.svg';
import { ReactComponent as IconUser } from '../../assets/img/icon-user.svg';
import { ReactComponent as IconDarkmode } from '../../assets/img/icon-darkmode.svg';
import { ReactComponent as IconLogout } from '../../assets/img/icon-logout.svg';

export default function WebNavBar() {

  const location = useLocation();
  const accountname = sessionStorage.getItem('user') === null?'':JSON.parse(sessionStorage.getItem('user')).UserAtom.accountname

  const navItems = [
    { to: '/feed', component: IconHome, label: '홈' },
    { to: '/recommendfeed', component: IconHeart, label: '추천게시글' },
    { to: '/chat', component: IconMessage, label: '채팅' },
    { to: '/upload', component: IconEdit, label: '게시물 작성' },
    { to: `/profile/${accountname}`, component: IconUser, label: '프로필' },
  ];

  const [selectedIcon, setSelectedIcon] = useState(IconHome);
  const [settingIcon, setSettingIcon] = useState(true);

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  useEffect(() => {
    const item = navItems.find((item) => item.to === location.pathname);
    if (item) {
      setSelectedIcon(item.component);
    }
  }, [location.pathname, selectedIcon]);

  return (
    <WebNavBarStyle>
      <NavBarStyle>
        {navItems.map((item) => (
          <NavBarItemStyle
            to={item.to}
            key={item.to}
            onClick={() => handleIconClick(item.component)}
            selected={selectedIcon === item.component}
            style={{ background: selectedIcon === item.component ? 'var(--basic-color-1)' : 'var(--background-color)' }}
          >
            <item.component
              width={30}
              height={30}
              stroke={selectedIcon === item.component ? '#fff' : 'var(--text-color-2)'}
            />
            <span style={{ color: selectedIcon === item.component ? '#fff' : 'var(--text-color-2)' }}>
              {item.label}</span>
          </NavBarItemStyle>
        ))}
      </NavBarStyle>
      <SettingStyle>
        <SettingItemStyle>
          <IconDarkmode/>
            <span>다크모드</span>
          </SettingItemStyle>
        <SettingItemStyle
          onMouseEnter={() => setSettingIcon(Prev => !Prev)} 
          onMouseLeave={() => setSettingIcon(Prev => !Prev)} 
        >
          <IconLogout 
            stroke={ settingIcon ? 'var(--text-color-2)' : '#FE0000' }
            fill={ settingIcon ? 'var(--text-color-2)' : '#FE0000' }
          />
            <strong style={{ color: settingIcon ? 'var(--text-color-2)' : '#FE0000' }}>로그아웃</strong>
        </SettingItemStyle>
      </SettingStyle>
    </WebNavBarStyle>
  )
}

const SettingStyle = styled.div`
  margin-top: 29px;
  padding: 23px;
  width: 220px;
  height: 180px;
  background-color: var(--background-color);
  border: 2px solid var(--basic-color-1);
  border-radius: 30px;
`;

const WebNavBarStyle = styled.div`
  width: 220px;
  height: 594px;
`;

const NavBarStyle = styled.div`
  width: 220px;
  height: 385px;
  padding: 25px 23px;
  background-color: var(--background-color);
  border: 2px solid var(--basic-color-1);
  border-radius: 30px;
`

const NavBarItemStyle = styled(Link)`
  padding: 15px;
  width: 174px;
  height: 60px;
  border-radius: 15px;
  margin-bottom: 8px;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  gap: 20px;

  &:last-child {
  margin-bottom: 0px;
  }

  span {
    font-size: 16px;
    line-height: 1.5;
    padding-top: 3px;
    color: var(--text-color-2);
  }
`;

const SettingItemStyle = styled(NavBarItemStyle)`

  strong {
    color: var(--text-color-2);
    padding-top: 3px;
  }
`;