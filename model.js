model = 
{
    app: 
    {
        app: document.getElementById("app"),
        nyVare: 
        {
            navn: null,
            pris: null,
            antall: null,
        },
        utvalg:
        {
            varer:
            [
                {
                    navn: "banan",
                    pris: 15,
                },
                {
                    navn: "tomat",
                    pris: 30,
                },
                {
                    navn: "eple",
                    pris: 20,
                },
                {
                    navn: "gulrot",
                    pris: 40,
                },
            ]
        },
        handlekurv:
        {
            varer: []
        },
    }
}

let feilMelding = "";

function leggTilVare(vareNavn)
{
    let kurvinnhold = model.app.handlekurv.varer;
    let utvalg = model.app.utvalg.varer;
    for (let i = 0; i < kurvinnhold.length; i++)
    {
        if (kurvinnhold[i].navn == vareNavn)
            return;
    }
    let gyldigVare = null;
    for (let u = 0; u < utvalg.length; u++)
    {
        if (utvalg[u].navn == vareNavn)
            gyldigVare = utvalg[u];
    }
    if (!gyldigVare)
    {
        feilMelding = `varen finnes ikke!<br>`;
        updateView();
        return;
    }
    feilMelding = "";   // nullstill

    model.app.handlekurv.varer.push(gyldigVare);

    updateView();
}


function fjernVare(index)
{
    model.app.handlekurv.varer.splice(index, 1);
    updateView();
}
