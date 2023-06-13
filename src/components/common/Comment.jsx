import styled from 'styled-components';

import { ProfileSm } from './Profile';

import IconMore from '../../assets/img/icon-more.svg'

export default function Comment() {
  return (
    <CommentContainerStyle>
        <ProfileSm url={''}/>
        <div className='commentContents'>
          <UserNameStyle>
            username
          </UserNameStyle>
          <TimeStyle>
            5분전
          </TimeStyle>
          <CommentStyle>나는 너랑하는 캠핑 너무좋아좋아좋아 또가자~</CommentStyle>
        </div>
        <button className="commentMoreButton" />
    
    </CommentContainerStyle>
  )
}

const CommentContainerStyle = styled.div`
    width: 358px;
    min-height: 58px;
    display: flex;
    position: relative;
    margin-bottom: 16px;

    .commentContents{
      padding: 6px 12px 0 12px;
      font-size: var(--font--size-md);
    }

    .commentMoreButton{
      position: absolute;
      top: 5px;
      right: 0;
      background-image: url(${IconMore});
      background-position: center;
      width: 20px;
      height: 20px;
    }
`;
const UserNameStyle = styled.span`
  display: inline-block;
  font-size: var(--font--size-md);
`;

const TimeStyle = styled.span`
  display: inline-block;
  color: var(--basic-color-7);
  font-size: 10px;
  margin-left: 10px;
  position: relative;
  
  &:before {
    content: '';
    display: inline-block;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: var(--basic-color-7);
    position: absolute;
    top: 50%;
    left: -5px;
  }
`;

const CommentStyle = styled.div`
  margin-top : 15px;
  color: #333333;
  padding-right: 15px;
  padding-bottom: 10px;
  font-size:var(--font--size-md);
  font-weight : var(--font--Regular);
`