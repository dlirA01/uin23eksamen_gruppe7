import {React, useEffect} from 'react';
import { favorites } from "./Favorites";
import MyGameCard from "./MyGameCard";

function MyFavorites() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {

    }, [favorites]);

    return (
        <>
            <main className="main">
                <header className="header">
                    <div className="header-inner-2">
                        <img className="background-blur" src="https://images3.alphacoders.com/106/1065466.png" alt="" />
                        <div className="header-left">
                            <div className="header-left-wrapper">
                                <div className="header-left-wrapper-profile">
                                    <div className="header-left-wrapper-profile-image">
                                        <img className="header-left-wrapper-profile-image-inner" src="https://images.unsplash.com/photo-1634448635949-31a5e8b9fd5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" alt="" />
                                    </div>
                                    <div className="header-left-wrapper-profile-details">
                                        <h1 className="header-left-wrapper-profile-details-name">ThunderBelle37</h1>
                                        <div className="header-left-wrapper-profile-details-items">
                                            <p className="header-left-wrapper-profile-details-items-item">Level <span>52</span></p>
                                            <p className="header-left-wrapper-profile-details-items-item">Badges <span>10</span></p>
                                            <p className="header-left-wrapper-profile-details-items-item">Friends <span>17</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-left-wrapper-background">
                                    <img className="header-left-wrapper-background-image" src="https://images3.alphacoders.com/106/1065466.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="game-scroller myscroller">
                    <h2 className="game-scroller-title">My Favorite Games</h2>
                    <div className="game-scroller-inner">
                        {favorites.map(game => (
                            <MyGameCard favorites={favorites} game={game} gameId={game.id} gameName={game.name} gameImage={game.background_image}></MyGameCard>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

export default MyFavorites;