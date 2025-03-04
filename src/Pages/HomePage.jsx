function HomePage() {
  const classiDettails = [
    { classe: "guerriero", attributo: "forza", bonus: 3 },
    { classe: "mago", attributo: "intelligenza", bonus: 3 },
    { classe: "ladro", attributo: "destrezza", bonus: 3 },
    { classe: "bardo", attributo: "carisma", bonus: 3 },
    { classe: "chierico", attributo: "saggezza", bonus: 3 },
    { classe: "druido", attributo: "saggezza", bonus: 3 }
  ];

  const razzaDettails = [
    { razza: "umano", attributi: { carisma: 1, forza: 1, destrezza: 1, intelligenza: 1, saggezza: 1 }, altezza: 120 },
    { razza: "elfo", attributi: { destrezza: 2, intelligenza: 1, saggezza: 1 }, altezza: 150 },
    { razza: "nano", attributi: { costituzione: 2, forza: 2 }, altezza: 50 },
    { razza: "mezzelfo", attributi: { carisma: 2, intelligenza: 1, saggezza: 1 }, altezza: 150 },
    { razza: "mezzorco", attributi: { forza: 2, costituzione: 1 }, altezza: 140 },
    { razza: "gnomo", attributi: { intelligenza: 2, destrezza: 1, carisma: 2 }, altezza: 40 }
  ];

  return (
    <div className="container">
      <div>
        <h2>Elenco Classi</h2>
        {classiDettails.map((curClasse, index) => 
          <p key={index}>{curClasse.classe}</p>
        )}

        <h2>Elenco Razze</h2>
        <div>
          {razzaDettails.map((curRazza, index) => (
            <div key={index}>
              <h2>{curRazza.razza}</h2>
              <ul>
                {Object.entries(curRazza.attributi).map(([stat, bonus], idx) => (
                  <li key={idx}>{stat}: +{bonus}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <h1>Home Page</h1>
    </div>
  );
}

export default HomePage;
