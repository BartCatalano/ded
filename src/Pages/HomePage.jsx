import style from "./HomePage.module.css";

function HomePage() {
  return(
  <>
  <section className={`${style.body}`} >
    {/* title section  */}
    <div className={`${style.titleLayout}`}>
      {/* <img className={`${style.imgTitle}`} src="../img/fireMage.png" alt="MagoFuoco" /> */}
    <div className={`${style.titleHome}`}>Fantasy Generator</div>
     {/* <div><img className={`${style.imgTitledue}`} src="../img/firetitle.jpg" alt="MagaFuoco" /></div> */}
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
  </div></section>
  </>
)}

export default HomePage;
