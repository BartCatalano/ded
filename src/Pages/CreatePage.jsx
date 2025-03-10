import { useNavigate } from "react-router-dom";
import { useState } from "react";
import style from "./CreatePage.module.css";
// scheda personaggio vuota
const Player = {
  nome: "",
  razza: "",
  classe: "",
  sesso: "",
  statistiche: {
    forza: 0,
    destrezza: 0,
    costituzione: 0,
    intelligenza: 0,
    saggezza: 0,
    carisma: 0
  },
  caratteristiche: {
    altezza: 0,
    peso: 0,
    background: "",

  }
};
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
  umano: { carisma: 1, forza: 1, destrezza: 1, intelligenza: 1, saggezza: 1, altezza: 120, peso: 50 },
  Elfo: { destrezza: 2, intelligenza: 1, saggezza: 1, altezza: 150, peso: 40 },
  nano: { costituzione: 2, forza: 2, altezza: 50, peso: 50 },
  Mezzelfo: { carisma: 2, intelligenza: 1, saggezza: 1, altezza: 150, peso: 40 },
  Orco: { forza: 2, costituzione: 1, altezza: 140, peso: 50 },
  gnomo: { intelligenza: 2, destrezza: 1, carisma: 2, altezza: 40, peso: 25 },
};

function CreatePage() {

  const [nameHero, setNameHero] = useState("");
  const [classe, setClasse] = useState("");
  const [caratteristiche, setcaratteristiche] = useState({});
  const [razza, setRazza] = useState();
  const [newPlayer, setNewPlayer] = useState(Player);
  const [sesso, setSesso] = useState("");
  const navigate = useNavigate();


  const createNewPlayer = () => {
    // prendo i bonus della classe scelta
    const bonus = classBonuses[classe] || {};
    const razzaBonus = razzaBonuses[razza] || {};
    const newPlayer = {
      nome: nameHero,
      sesso: sesso,
      razza: razza,
      classe: classe,
      statistiche: {
        forza: (Math.floor(Math.random() * 6) + 1) + (bonus.forza || 0) + (razzaBonus.forza || 0),
        destrezza: (Math.floor(Math.random() * 6) + 1) + (bonus.destrezza || 0) + (razzaBonus.destrezza || 0),
        costituzione: (Math.floor(Math.random() * 6) + 1) + (bonus.costituzione || 0) + (razzaBonus.costituzione || 0),
        intelligenza: (Math.floor(Math.random() * 6) + 1) + (bonus.intelligenza || 0) + (razzaBonus.intelligenza || 0),
        saggezza: (Math.floor(Math.random() * 6) + 1) + (bonus.saggezza || 0) + (razzaBonus.saggezza || 0),
        carisma: (Math.floor(Math.random() * 6) + 1) + (bonus.carisma || 0) + (razzaBonus.carisma || 0),
      },
      caratteristiche: {
        allineamento: caratteristiche,
        altezza: Math.floor(Math.random() * 100) + razzaBonus.altezza,
        peso: Math.floor(Math.random() * 100) + razzaBonus.peso,
      }
    };
    navigate("/stampa", { state: { newPlayer } })
  }



  // creo la funzione di salvataggio nome
  const creazioneNome = (e) => {
    setNameHero(e.target.value);
  }
  // funzione per la selezioneClasse
  const selezioneClasse = (e) => {
    setClasse(e.target.value);
  }
  // funzione per la creazione delle caratteristiche
  const creazioneCaratteristiche = (e) => {
    setcaratteristiche(e.target.value);
  }
  // funzione per la selezione della razza
  const selezioneRazza = (e) => {
    setRazza(e.target.value);
  }
  // funzione per il sesso
  const selezioneSesso = (e) => {
    setSesso(e.target.value);
  }

  return (
    <>
      <div className={`${style.body}`}>
        <div className={`${style.bodyCreate}`}>
          {/* form creativo */}
          <section className={`${style.formCreazione}`}>
            <div className={`${style.titoloPergamena}`}>Pergamena di creazione</div>
            {/* inserisco l'input di nome e la selezione di razza classe allineamento */}
            {/* nome eroe */}
            <label htmlFor="Hero">Nome Eroe:</label>
            <input className={`${style.inputCompilativo}`} type="text" value={nameHero} onChange={creazioneNome} name="Hero" id="Hero" />

            {/* inserimento caratteristiche */}
            {/* selezione razza */}
            <div className={`${style.formCreazione}`} >

              <label htmlFor="dropdown">
                La razza del tuo eroe:
              </label>
              <select
                id="dropdown"
                value={razza}
                onChange={selezioneRazza}
              >
                <option value="">Razza</option>
                <option value="umano">Umano</option>
                <option value="elfo">Elfo</option>
                <option value="nano">Nano</option>
                <option value="MezzElfo">Mezzelfo</option>
                <option value="Orco">Orco</option>
                <option value="gnomo">Gnomo</option>
              </select>

            </div>
            {/* selezione sesso */}
            <div className={`${style.formCreazione}`}>
              <label htmlFor="dropdown">
              Il sesso del tuo Eroe:
              </label>
              <select
                id="dropdown"
                value={sesso}
                onChange={selezioneSesso}
              >
                <option value="">Sesso</option>
                <option value="Uomo">Uomo</option>
                <option value="Donna">Donna</option>
              </select>
            </div>
            {/* selezione classe */}
            <div className={`${style.formCreazione}`} >

              <label htmlFor="dropdown">
                La classe del tuo Eroe:
              </label>
              <select
                id="dropdown"
                value={classe}
                onChange={selezioneClasse}
              >
                <option value="">Classe</option>
                <option value="guerriero">Guerriero</option>
                <option value="mago">Mago</option>
                <option value="ladro">Ladro</option>
                <option value="bardo">Bardo</option>
                <option value="chierico">Chierico</option>
                <option value="druido">Druido</option>
              </select>
              {/* inserimento allineamento */}
              <div className={`${style.formCreazione}`}>
                <label htmlFor="dropdown">
                  Allineamento Eroe:
                </label>
                <select
                  id="allineamento"
                  value={caratteristiche.allineamento}
                  onChange={creazioneCaratteristiche}
                >
                  <option value="">Allineamento</option>
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
            <button className={`${style.buttonCreation}`} onClick={createNewPlayer}>Crea il Tuo Eroe</button>
          </section>
        </div></div>
    </>
  );
}
export default CreatePage;



