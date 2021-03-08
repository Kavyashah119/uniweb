import React from 'react';
import {RecruitersContainer, RecruitersH1, RecruitersWrapper, RecruitersCard, RecruitersIcon,
RecruitersH2, RecruitersP} from './Recruiters_list';
import Icon1 from '../../Images/samsung-logo-1993.jpg';
import Icon2 from '../../Images/byjus.png';
import Icon3 from '../../Images/apple.png';

const Recruiters = () => {
    return (
        <RecruitersContainer id="recruiters">
            <RecruitersH1>Major Recruiters</RecruitersH1>
                <RecruitersWrapper>

                    <RecruitersCard>
                        <RecruitersIcon src={Icon1}/>
                        <RecruitersH2>Byju's</RecruitersH2>
                        <RecruitersP>6 LPA</RecruitersP>
                    </RecruitersCard>

                    <RecruitersCard>
                        <RecruitersIcon src={Icon2}/>
                        <RecruitersH2>Samsung</RecruitersH2>
                        <RecruitersP>6.6 LPA</RecruitersP>
                    </RecruitersCard>

                    <RecruitersCard>
                        <RecruitersIcon src={Icon3}/>
                        <RecruitersH2>Apple</RecruitersH2>
                        <RecruitersP>6.2 LPA</RecruitersP>
                    </RecruitersCard>

                </RecruitersWrapper>
            
        </RecruitersContainer>
    )
}

export default Recruiters
