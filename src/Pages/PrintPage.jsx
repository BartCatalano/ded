import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PrintPage = () => {
    const location = useLocation();
    const newPlayer = location.state?.newPlayer;

    useEffect(() => {
        window.print();
    }, []);

    if (!newPlayer) {
        return <p>Nessun personaggio trovato!</p>;
    }

    return (
        <div className="print-container">
            <h1>{newPlayer.nome}</h1>
            <p>Razza: {newPlayer.razza}</p>
            <p>Classe: {newPlayer.classe}</p>
            <p>Sesso: {newPlayer.sesso}</p>
            <p>Forza: {newPlayer.statistiche.forza}</p>
            <p>Destrezza: {newPlayer.statistiche.destrezza}</p>
            <p>Costituzione: {newPlayer.statistiche.costituzione}</p>
            <p>Intelligenza: {newPlayer.statistiche.intelligenza}</p>
            <p>Saggezza: {newPlayer.statistiche.saggezza}</p>
            <p>Carisma: {newPlayer.statistiche.carisma}</p>
            <p>Altezza: {newPlayer.caratteristiche.altezza} cm</p>
            <p>Peso: {newPlayer.caratteristiche.peso} kg</p>
            <p>Allineamento: {newPlayer.caratteristiche.allineamento}</p>
        </div>
    );
};

export default PrintPage;
