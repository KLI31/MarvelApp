import { useState } from "react";
import { MagicCard } from "react-magic-motion";
import "react-magic-motion/card.css";

const Card = ({ name, img, info }) => {
    const [isCardExpanded, setIsCardExpanded] = useState(false);

    return (
        <MagicCard
            isCardExpanded={isCardExpanded}
            onBackgroundFadeClick={() => setIsCardExpanded(false)}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
            {img && (
                <div
                    style={{
                        width: isCardExpanded ? "40rem" : "350px",
                        gap: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        padding: "1.35rem 0",
                        color: isCardExpanded ? "white" : "currentColor",
                    }}
                    onClick={() => setIsCardExpanded(!isCardExpanded)}
                >
                    <div
                        style={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                        }}
                    ></div>
                    <div
                        style={{
                            overflowY: "auto",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "12px",
                            border: !isCardExpanded ? "2px solid #969992" : "none",
                            borderRadius: "8px",
                        }}
                    >
                        {!isCardExpanded && (
                            <h1 style={{ fontSize: "1.3em", fontWeight: 600 }}>{name}</h1>
                        )}
                        <img
                            style={{
                                width: isCardExpanded ? "24rem" : "350px",
                                height: isCardExpanded ? "24rem" : "350px",
                                objectFit: "cover",
                                borderRadius: "8px",
                            }}
                            alt="img"
                            src={img ? img : null}
                        />
                        {isCardExpanded && (
                            <section
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "1rem",
                                    marginTop: "1.8rem",
                                }}
                            >
                                <h1 style={{ fontSize: "2.2em", fontWeight: 700 }}>{name}</h1>
                                {!info && (
                                    <p>Este Personaje no tiene una descripción disponible</p>
                                )}
                                <p>{info}</p>
                            </section>
                        )}
                    </div>
                </div>
            )}
        </MagicCard>
    );
};

const CardDetails = ({ name, img, comic, movie }) => {
    return (
        <div className="border-solid border-2 border-red-400 rounded-md max-w-xs p-8 ">
            <div className="flex flex-col items-center justify-center h-80">
                <div className="mb-4 flex flex-col items-center">
                    <h1 className="text-xl font-semibold">Personaje</h1>
                    <h2 className="text-lg font-semibold">{name}</h2>
                </div>
                <div className="border-solid border-2 p-1 rounded-full border-rose-500 mb-5 ">
                    <img
                        src={img ? img : null}
                        alt="foto"
                        className="rounded-full object-cover w-40 h-40"
                    />
                </div>
                <div className="">
                    <div className="border-solid rounded-md border-2 max-w bg-red-200 p-4 px-20 flex items-center gap-2">
                        <span>Comics: </span>
                        <span>{comic.length}</span>
                    </div>
                    <div className="border-solid rounded-md border-2 max-w bg-red-200 p-4 px-20 flex items-center gap-2">
                        <span>Peliculas: </span>
                        <span>{movie.length}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Card, CardDetails };
