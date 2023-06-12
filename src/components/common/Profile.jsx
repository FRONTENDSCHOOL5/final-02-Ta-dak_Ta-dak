import React from "react";
import styled from "styled-components";
import {ReactComponent as BasicProfile} from '../../assets/img/basic-profile.svg'

export function Profile() {
    return (
        <div>
            <BasicProfile />
        </div>
    )
}

const BasicProfilestyle = styled(BasicProfile)`
    width: 110px;
    height: 110px;
`