import React from 'react';

interface SectionHeadingProps {
    title: string;
}

const GeneralizedSectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
    return (
        <div className="section-heading-main last-winner-heading-main MuiBox-root css-0 recent-heading-main">
            <p className="MuiTypography-root MuiTypography-body1 section-heading css-1woqsuu" >
                {title}
            </p >
        </div >
    );
};

export default GeneralizedSectionHeading;
