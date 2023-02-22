
// import useState für hook library 
// * 1 import
import { useState } from "react";


// import CSS
import "./VerarbeitenCode.scss"


const VerarbeitenCode = () => {

    // * 2 hook bauen   
    // ! muss in sfc rein 
    const [zählen, setZählen] = useState(0);
    //      soll  ,  Methode f     ist = 0


    // * 6 Funktion   und mit setZählen (Methode f) hook verbinden
    // ! muss in sfc rein 
    function berechnen(e) {                    // mit   e   den Butten value holen
        console.log(e)
        console.log(e.target.value)
        console.log((e.target.innerHTML))
        if (e.target.value != 0) {
            setZählen(zählen + (Number(e.target.value)))
        }
        else { setZählen(0) }
    }

    // ! Szenario_2 Objekt in dem Funktionen liegen
    const berechnenMethodenObjekt = {
        plusRechnen: function () {
            setZählen(zählen + 1)
        },
        minusRechnen: function () {
            setZählen(zählen - 1)
        },
        resetErgebnis: function () {
            setZählen(0)
        }

    }

    return (

        /* // * 0 bzw 4 html bauen */
        <section>

            {/* // * 5 html mit hook zählen (soll) verbinden */}
            <p>Ergebnis {zählen}</p>

            <article>
                {/* // * 7 onClick  */}
                <button onClick={berechnen} value={+1}> + </button>

                {/* // * 8 onClick */}
                <button onClick={berechnen} value={-1}> - </button>

                <button onClick={berechnenMethodenObjekt.resetErgebnis} value={0}> Reset </button>
            </article>

        </section>


    );
}

export default VerarbeitenCode;