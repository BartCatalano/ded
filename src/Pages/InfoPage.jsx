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
    { razza: "umano", attributi: { carisma: 1, forza: 1, destrezza: 1, intelligenza: 1, saggezza: 1 }, altezza: 120 },
    { razza: "elfo", attributi: { destrezza: 2, intelligenza: 1, saggezza: 1 }, altezza: 150 },
    { razza: "nano", attributi: { costituzione: 2, forza: 2 }, altezza: 50, peso: 50 },
    { razza: "mezzelfo", attributi: { carisma: 2, intelligenza: 1, saggezza: 1 }, altezza: 150 },
    { razza: "mezzorco", attributi: { forza: 2, costituzione: 1 }, altezza: 140 },
    { razza: "gnomo", attributi: { intelligenza: 2, destrezza: 1, carisma: 2 }, altezza: 40 }
  ];

  return (
    <section className={`${style.body}`}>
      <div className={`${style.bodyInfo}`}>
        <div>
        <h2 className={`${style.titleBody}`}>Elenco Classi</h2>
  <div className={`${style.containerCard}`}>
    {classiDettails.map((curClasse, index) => (
      <div className={`${style.cardClasse}`} key={index}>
        <h3>{curClasse.classe}</h3>
        <p>{curClasse.attributo} +3 </p>
      </div>
            ))}
          </div>
          <h2 className={`${style.titleBody}`}>Elenco Razze</h2>
          <div>
            {razzaDettails.map((curRazza, index) => (
              <div key={index}>
                <h2>{curRazza.razza}</h2>
                <ul>
                  {Object.entries(curRazza.attributi).map(([stat, bonus], indexx) => (
                    <li key={indexx}>{stat}: +{bonus}</li>
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