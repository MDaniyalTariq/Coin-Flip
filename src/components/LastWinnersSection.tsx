import { useState, useEffect } from "react";
import { fetchLastWinners } from "../api";
import { LastWinnerData } from "../types/apitypes";
import GeneralizedSectionHeading from "./GeneralizedSectionHeading";


const LastWinnersSection = () => {
    const [lastWinners, setLastWinners] = useState<LastWinnerData[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchLastWinners();
                setLastWinners(data);
            } catch {
                console.error("Error fetching last winners");
            }
        };

        fetchData();
    }, []);

    return (
        <section className="last-winner-section MuiBox-root css-0">
            <div className="container MuiBox-root css-0">
                <GeneralizedSectionHeading title="Last Winners" />
                <div className="last-winner-row MuiBox-root css-0">
                    {lastWinners.map((winner) => (
                        <LastWinner
                            key={winner.wallet}
                            percentage={winner.percentage}
                            imgSrc={winner.imgSrc}
                            wallet={winner.wallet}
                            sol={winner.sol}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

type LastWinnerProps = {
    percentage: string;
    imgSrc: string;
    wallet: string;
    sol: number | string;
};

const LastWinner: React.FC<LastWinnerProps> = ({ percentage, imgSrc, wallet, sol }) => {
    return (
        <div className="last-winner-col MuiBox-root css-0">
            <p className="MuiTypography-root MuiTypography-body1 last-winner-percentages css-1woqsuu">{percentage}</p>
            <img src={imgSrc} className="last-winner-img" alt="Winner" />
            <p className="MuiTypography-root MuiTypography-body1 last-winner-name css-1woqsuu">{wallet}</p>
            <p className="MuiTypography-root MuiTypography-body1 last-winner-text css-1woqsuu">Sol Received: {sol}</p>
        </div>
    );
};

export default LastWinnersSection;
