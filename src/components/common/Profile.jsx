import React from "react";
import styled from "styled-components";
import BasicProfile from '../../assets/img/basic-profile.svg'

export function ProfileLg({ url = false }) {
    return (
        <ProfileLgStyle src={url ? url : BasicProfile} alt="" />
    )
}

export function ProfileMd({ url = false }) {
    return (
        <ProfileMdStyle src={url ? url : BasicProfile} alt="" />
    )
}

export function ProfileSm({ url = false }) {
    return (
        <ProfileSmStyle src={url ? url : BasicProfile} alt="" />
    )
}

const ProfileLgStyle = styled.img`
    width: 110px;
    height: 110px;
`

const ProfileMdStyle = styled.img`
    width: 50px;
    height: 50px;
`

const ProfileSmStyle = styled.img`
    width: 36px;
    height: 36px;
`