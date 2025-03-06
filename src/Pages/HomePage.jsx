import style from "./HomePage.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const texts = ["Benvenuto!", "Preparati all'avventura!", "Crea Il Tuo Eroe!"];

function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    texts.forEach((_, i) => {
      setTimeout(() => {
        setIndex(i);
      }, i * 3000);
    });
  }, []);
  return(
  <>
  <section className={`${style.body}`} >
    {/* title section  */}
    <div className={`${style.titleLayout}`}>
    <div className={`${style.lavaText}`}>Fantasy Generator</div>
    </div> 
  <div className={`${style.bodyHome}`}>
    <p className={`${style.pergamena}`}>Fantasy Generator è nata per dare la possibilità a tutti i giocatori
      di ruolo di creare il proprio personaggio in modo semplice e veloce.
      cliccando sul pulsante Create Player potrai scegliere la razza, la classe, 
      l'allineamento e il sesso del tuo personaggio.
      Se invece clicchi sul pulsante info avrai accesso a tutti i bonus delle classi
      e delle razze disponibili.
      una volta creato il tuo nuovo eroe potrai salvarlo e stamparlo per averlo sempre con te.
    </p>
    <div className={style.textContainer}>
            <motion.h1 
              className={style.lavaText}
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {texts[index]}
      </motion.h1>
    </div>
  </div></section>
  </>
)}

export default HomePage;
