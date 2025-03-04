import { useState } from "react";
// scheda personaggio vuota
const Player ={
nome:"",
razza:"",
classe:"",
statistiche:{
    forza:0,
    destrezza:0,
    costituzione:0,
    intelligenza:0,
    saggezza:0,
    carisma:0
},
caratteristiche:{
    altezza:0,
    peso:0,
    background:"",
    
}};
// creo ogetto con bonus di classe
const classBonuses = {
  guerriero: { forza: 3 },
  mago: { intelligenza: 3 },
  ladro: { destrezza: 3 },
  bardo: { carisma: 3 },
  chierico: { saggezza: 3 },
  druido: { saggezza: 3 },
};
// creo il bonus per la razza scelta
const razzaBonuses = {
  umano: { carisma: 1, forza: 1, destrezza: 1, intelligenza: 1, saggezza: 1, altezza: 120 },
  elfo: { destrezza: 2, intelligenza: 1, saggezza: 1,altezza: 150 },
  nano: { costituzione: 2, forza: 2, altezza: 50 },
  mezzelfo: { carisma: 2, intelligenza: 1, saggezza: 1,altezza: 150 },
  mezzorco: { forza: 2, costituzione: 1, altezza: 140 },
  gnomo: { intelligenza: 2, destrezza: 1, carisma: 2, altezza: 40 },
};

function CreatePage() {

const [nameHero,setNameHero] = useState("");
const [classe,setClasse] = useState("");
const [caratteristiche,setcaratteristiche] = useState({});
const [razza,setRazza] = useState();
const [newPlayer,setNewPlayer] = useState(Player);



const createNewPlayer = () => {
  // prendo i bonus della classe scelta
  const bonus = classBonuses[classe] || {};
  const razzaBonus = razzaBonuses[razza] || {};
    setNewPlayer({
        nome:nameHero,
        razza:razza,
        classe:classe,
        statistiche:{
          forza: (Math.floor(Math.random() * 6) + 1) + (bonus.forza || 0) + (razzaBonus.forza || 0),
          destrezza: (Math.floor(Math.random() * 6) + 1) + (bonus.destrezza || 0) + (razzaBonus.destrezza || 0),
          costituzione: (Math.floor(Math.random() * 6) + 1) + (bonus.costituzione || 0) + (razzaBonus.costituzione || 0),
          intelligenza: (Math.floor(Math.random() * 6) + 1) + (bonus.intelligenza || 0) + (razzaBonus.intelligenza || 0),
          saggezza: (Math.floor(Math.random() * 6) + 1) + (bonus.saggezza || 0) + (razzaBonus.saggezza || 0),
          carisma: (Math.floor(Math.random() * 6) + 1) + (bonus.carisma || 0) + (razzaBonus.carisma || 0),
        },
        caratteristiche:{
            allineamento:caratteristiche,
            altezza:Math.floor(Math.random()*100) + razzaBonus.altezza,
            peso:Math.floor(Math.random()*100)+30,
        }
    });
}



// creo la funzione di salvataggio nome
const creazioneNome = (e) => {
    setNameHero(e.target.value);}
// funzione per la selezioneClasse
const selezioneClasse = (e) => {
    setClasse(e.target.value);}
// funzione per la creazione delle caratteristiche
const creazioneCaratteristiche = (e) => {
    setcaratteristiche(e.target.value);}
// funzione per la selezione della razza
    const selezioneRazza = (e) => {
        setRazza(e.target.value);}


  return (
    <>
    <div className="container">
      <h1>Create Page</h1>
{/* inserisco l'input di nome e la selezione di razza classe allineamento */}
{/* nome eroe */}
<label htmlFor="Hero">Nome Eroe:</label>
<input type="text" value={nameHero} onChange={creazioneNome} name="Hero" id="Hero" />

{/* inserimento caratteristiche */}
{/* selezione razza */}
<div >

      <label htmlFor="dropdown">
        Scegli La tua razza:
      </label>
      <select
        id="dropdown"
        value={razza}
        onChange={selezioneRazza}
      >
        <option value="">Seleziona...</option>
        <option value="umano">Umano</option>
        <option value="elfo">Elfo</option>
        <option value="nano">Nano</option>
        <option value="mezzelfo">Mezzelfo</option>
        <option value="mezzorco">Mezzorco</option>
        <option value="gnomo">Gnomo</option>
      </select>

    </div>
{/* selezione classe */}
<div >

      <label htmlFor="dropdown">
        Scegli La tua classe:
      </label>
      <select
        id="dropdown"
        value={classe}
        onChange={selezioneClasse}
      >
        <option value="">Seleziona...</option>
        <option value="guerriero">Guerriero</option>
        <option value="mago">Mago</option>
        <option value="ladro">Ladro</option>
        <option value="bardo">Bardo</option>
        <option value="chierico">Chierico</option>
        <option value="druido">Druido</option>
      </select>
      {/* inserimento allineamento */}
     <div>
     <label htmlFor="dropdown">
        Scegli il tuo allineamento:
        </label>
        <select
            id="allineamento"
            value={caratteristiche.allineamento}
            onChange={creazioneCaratteristiche}
        >
            <option value="">Seleziona...</option>
            <option value="legale buono">Legale Buono</option>
            <option value="neutrale buono">Neutrale Buono</option>
            <option value="caotico buono">Caotico Buono</option>
            <option value="legale neutrale">Legale Neutrale</option>
            <option value="neutrale puro">Neutrale Puro</option>
            <option value="caotico neutrale">Caotico Neutrale</option>
            <option value="legale malvagio">Legale Malvagio</option>
            <option value="neutrale malvagio">Neutrale Malvagio</option>
            <option value="caotico malvagio">Caotico Malvagio</option>
        </select>
     </div>
    </div>
     {/* creazione del personaggio */}
    <div>
        <button onClick={createNewPlayer}>Crea il Tuo Eroe</button>
        <div>
            <h2>{newPlayer.nome}</h2>
            <h3>{newPlayer.razza}</h3>
            <h3>{newPlayer.classe}</h3>
            <h3>Statistiche</h3>
            <p>Forza: {newPlayer.statistiche.forza}</p>
            <p>Destrezza: {newPlayer.statistiche.destrezza}</p>
            <p>Costituzione: {newPlayer.statistiche.costituzione}</p>
            <p>Intelligenza: {newPlayer.statistiche.intelligenza}</p>
            <p>Saggezza: {newPlayer.statistiche.saggezza}</p>
            <p>Carisma: {newPlayer.statistiche.carisma}</p>
            <h3>Caratteristiche</h3>
            <p>Allineamento: {newPlayer.caratteristiche.allineamento}</p>
            <p>Altezza: {newPlayer.caratteristiche.altezza}</p>
            <p>Peso: {newPlayer.caratteristiche.peso}</p>
            </div>
    </div>
    </div>
        </>
  );
}
export default CreatePage;


  
