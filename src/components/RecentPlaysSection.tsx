import GeneralizedSectionHeading from "./GeneralizedSectionHeading";

const RecentPlaysSection = () => {
    return (
        <section className="recent-plays-section MuiBox-root css-0">
            <div className="container MuiBox-root css-0">
                <GeneralizedSectionHeading title="Recent Plays" />
                <div className="recent-plays-main MuiBox-root css-0">
                    <RecentPlay
                        imgSrc="/assets/recent1-DohOBNo9.svg"
                        wallet="44hfArGSmuGJkY3ReJxvMjVPtU9byz1effLbCV6R33qZ"
                        time="21 days ago"
                    />
                    <RecentPlay
                        imgSrc="/assets/recent2-qJRBE_AL.svg"
                        wallet="GRMrotHQvsHmrVKdZSHeUVEjnVaD9k7NnsZcMcTTk7QP"
                        time="20 days ago"
                    />
                    <RecentPlay
                        imgSrc="/assets/recent3-zZN6hm4F.svg"
                        wallet="44hfArGSmuGJkY3ReJxvMjVPtU9byz1effLbCV6R33qZ"
                        time="19 days ago"
                    />
                    <RecentPlay
                        imgSrc="/assets/recent4-ymaJsBM2.svg"
                        wallet="44hfArGSmuGJkY3ReJxvMjVPtU9byz1effLbCV6R33qZ"
                        time="19 days ago"
                    />
                    <RecentPlay
                        imgSrc="/assets/recent5-B-3JVRYw.svg"
                        wallet="44hfArGSmuGJkY3ReJxvMjVPtU9byz1effLbCV6R33qZ"
                        time="19 days ago"
                    />
                </div>
            </div>
        </section>
    );
};

type RecentPlayProps = {
    imgSrc: string;
    wallet: string;
    time: string;
};

const RecentPlay: React.FC<RecentPlayProps> = ({ imgSrc, wallet, time }) => {
    return (
        <div className="recent-plays-row MuiBox-root css-0">
            <div className="recent-flex-main MuiBox-root css-0">
                <div className="recent-left-content-main MuiBox-root css-0">
                    <img src={imgSrc} alt="Recent Plays" className="recent-img" />
                    <p className="MuiTypography-root MuiTypography-body1 recent-text css-1woqsuu">
                        <span>Wallet:</span> {wallet}  made a wish
                    </p>
                </div>
                <div className="recent-right-content-main MuiBox-root css-0">
                    <p className="MuiTypography-root MuiTypography-body1 recent-time-text css-1woqsuu">{time}</p>
                </div>
            </div>
        </div>
    );
};


export default RecentPlaysSection;
