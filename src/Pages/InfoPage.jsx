import style from "./InfoPage.module.css";


function InfoPage() {
  const classiDettails = [
    { classe: "Guerriero", attributo: "forza", bonus: 3 },
    { classe: "Mago", attributo: "intelligenza", bonus: 3 },
    { classe: "Ladro", attributo: "destrezza", bonus: 3 },
    { classe: "Bardo", attributo: "carisma", bonus: 3 },
    { classe: "Chierico", attributo: "saggezza", bonus: 3 },
    { classe: "Druido", attributo: "saggezza", bonus: 3 }
  ];

  const razzaDettails = [
    { razza: "Umano", attributi: { carisma: 1, forza: 1, intelligenza: 1, saggezza: 1 }, altezza: 120 },
    { razza: "Elfo", attributi: { destrezza: 2, intelligenza: 1, saggezza: 1 }, altezza: 150 },
    { razza: "Nano", attributi: { costituzione: 2, forza: 2 }, altezza: 50, peso: 50 },
    { razza: "Elfo", attributi: { carisma: 2, intelligenza: 1, saggezza: 1 }, altezza: 150 },
    { razza: "Orco", attributi: { forza: 2, costituzione: 1 }, altezza: 140 },
    { razza: "Gnomo", attributi: { intelligenza: 2, destrezza: 1, carisma: 2 }, altezza: 40 }
  ];

  return (
    <section className={`${style.body}`}>
      
      <div className={`${style.bodyInfo}`}>
        <div>
            <p className={`${style.pergamena}`}>
              In questa sezione troverai tutte le informazioni necessarie per creare il tuo personaggio per i giochi di ruolo.
              Potrai scegliere tra diverse classi e razze, ognuna con i propri bonus.
              andando sul pulsante create player potrai scegliere la tua classe e la tua razza e ottenere i bonus corrispondenti. 
              Potrai salvare il tuo personaggio e stamparlo per averlo sempre con te durante le sessioni di gioco.
            </p>
          </div>
        <div>
        <h2 className={`${style.titleBody}`}>Elenco Classi</h2>
  <div className={`${style.containerCard}`}>
    {classiDettails.map((curClasse, index) => (
      <div className={`${style.cardClasse}`} key={index}>
        <h3 >{curClasse.classe}</h3>
        <p>{curClasse.attributo} +3 </p>
      </div>
            ))}
          </div>
          <h2 className={`${style.titleBody}`}>Elenco Razze</h2>
          <div className={`${style.containerCard}`} >
            {razzaDettails.map((curRazza, index) => (
              <div className={`${style.cardRazza}`} key={index}>
                <div className={`${style.titleRazza}`}>{curRazza.razza}</div>
                <ul>
                  {Object.entries(curRazza.attributi).map(([stat, bonus], indexx) => (
                    <li className={`${style.bonusRazza}`} key={indexx}>{stat}: +{bonus}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
export default InfoPage;