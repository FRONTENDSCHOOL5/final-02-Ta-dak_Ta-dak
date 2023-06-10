import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as IconHome } from '../../assets/img/icon-home.svg';
import { ReactComponent as IconHeart } from '../../assets/img/icon-heart.svg';
import { ReactComponent as IconMessage } from '../../assets/img/icon-message.svg';
import { ReactComponent as IconEdit } from '../../assets/img/icon-edit.svg';
import { ReactComponent as IconUser } from '../../assets/img/icon-user.svg';

export function NavBar() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  const navItems = [
    { to: '/home', component: IconHome, label: '홈' },
    { to: '/recommend', component: IconHeart, label: '추천게시글' },
    { to: '/chat', component: IconMessage, label: '채팅' },
    { to: '/editpost', component: IconEdit, label: '게시물 작성' },
    { to: '/profile', component: IconUser, label: '프로필' },
  ];

  return (
    <NavBarStyle>
      <article>
        {navItems.map((item) => (
          <StyledLink
            key={item.to}
            to={item.to}
            onClick={() => handleIconClick(item.component)}
          >
            <item.component
              stroke={selectedIcon === item.component ? '#4E683F' : '#767676'}
              fill={selectedIcon === item.component ? '#4E683F' : '#B9D6A3'}
            />
            <span>{item.label}</span>
          </StyledLink>
        ))}
      </article>
    </NavBarStyle>
  );
}

const NavBarStyle = styled.nav`
  transition: all 0.3s;

  width: 390px;
  background-color: var(--basic-color-2);

  article {
    display: flex;
    height: 60px;
  }
`;

const StyledLink = styled(Link)`
  padding: 10px;
  text-align: center;
  width: calc(100% / 5);
  height: 100%;
  transition: background-color 0.3s;

  span {
    display: block;
    font-size: 0.6em;
    color: #767676;
    line-height: 1.5;
  }

  &:hover {
    background-color: #fdf5b9;
  }
`;
