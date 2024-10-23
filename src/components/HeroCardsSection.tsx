import React, { useEffect, useState } from 'react';
import { fetchTotalSolDistributed, fetchTotalParticipants } from '../api/index';

const HeroCardsSection = () => {
    const [totalParticipants, setTotalParticipants] = useState<number | null>(null);
    const [totalSolDistributed, setTotalSolDistributed] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); 
            try {
                const [participantsData, solData] = await Promise.all([
                    fetchTotalParticipants(),
                    fetchTotalSolDistributed()
                ]);
                setTotalParticipants(participantsData.totalParticipants);
                setTotalSolDistributed(solData.totalSolDistributed);
            } catch (error) {
                setError((error as Error).message); 
            } finally {
                setLoading(false); 
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <section className="hero-card-section MuiBox-root css-0">
            <div className="container MuiBox-root css-0">
                <div className="hero-cards-main MuiBox-root css-0">
                    <HeroCard digit="loading..." title="Total Participants" />
                    <HeroCard digit="loading..." title="Total SoL" />
                </div>
            </div>
        </section>
    }

    if (error) {
        return <section className="hero-card-section MuiBox-root css-0">
            <div className="container MuiBox-root css-0">
                <div className="hero-cards-main MuiBox-root css-0">
                    <HeroCard digit={error} title="Total Participants" />
                    <HeroCard digit={error} title="Total SoL" />
                </div>
            </div>
        </section>
    }

    return (
        <section className="hero-card-section MuiBox-root css-0">
            <div className="container MuiBox-root css-0">
                <div className="hero-cards-main MuiBox-root css-0">
                    <HeroCard digit={totalParticipants} title="Total Participants" />
                    <HeroCard digit={totalSolDistributed} title="Total SoL" />
                </div>
            </div>
        </section>
    );
};

type HeroCardProps = {
    digit: string | number | null;
    title: string;
};

const HeroCard: React.FC<HeroCardProps> = ({ digit, title }) => {
    return (
        <div className="hero-cards MuiBox-root css-0">
            <p className="MuiTypography-root MuiTypography-body1 hero-card-digit css-1woqsuu">{digit !== null ? digit : 'N/A'}</p>
            <p className="MuiTypography-root MuiTypography-body1 hero-card-digit-title css-1woqsuu">{title}</p>
        </div>
    );
};

export default HeroCardsSection;
