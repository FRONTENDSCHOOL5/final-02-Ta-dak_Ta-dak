import styled from 'styled-components'

export function LoginButton ({contents}) {
  return (
    // contents : 로그인, 다음, 감귤마켓시작하기
  <LoginButtonStyle>
  {contents}
  </LoginButtonStyle> 
  )
}

export function FollowButton({contents}) {
  return (
    <FollowButtonStyle>
    {contents}
    </FollowButtonStyle>
  )
}

export function FollowButtonSm({contents}) {
  return (
    <FollowButtonSmStyle>
    {contents}
    </FollowButtonSmStyle>
  )
}

const LoginButtonStyle = styled.button`
  width: 322px;
  height: 44px;
  border-radius: 44px;
  font-size: var(--font--size-md);
  background-color: var(--basic-btn-color);
`

const FollowButtonStyle = styled.button`
  width: 120px;
  height: 34px;
  font-size: var(--font--size-md);
  background-color: var(--basic-btn-color); 
  border-radius: 30px;
`;

const FollowButtonSmStyle = styled.button`
  width: 56px;
  height: 28px;
  font-size: var(--font--size-sm);
  background-color: var(--basic-btn-color); 
  border-radius: 30px;
`;