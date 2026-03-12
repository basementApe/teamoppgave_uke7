function leggTilVare(vareNavn)
{
    let kurvinnhold = model.app.handlekurv.varer;
    let utvalg = model.app.utvalg.varer;
    for (let i = 0; i < kurvinnhold.length; i++)
    {
        if (kurvinnhold[i].navn == vareNavn)
        {
            kurvinnhold[i].antall += 1;
            updateView();
            return;
        }
    }
    let gyldigVare = null;
    for (let u = 0; u < utvalg.length; u++)
    {
        if (utvalg[u].navn == vareNavn)
            gyldigVare = utvalg[u];
    }
    if (!gyldigVare)
    {
        console.log("varen finnes ikke!");
        updateView();
        return;
    }

    model.app.handlekurv.varer.push({...gyldigVare});  // curlybraces og ... for å pushe en kopi. hvis ikke pusher vi objekt-referansen og da blir utvalg endret sammen med handlekurv!
    updateView();
}


function fjernVare(index)
{
    model.app.handlekurv.varer.splice(index, 1);
    updateView();
}

function reduserAntall(index)
{
    model.app.handlekurv.varer[index].antall -= 1;
    if (model.app.handlekurv.varer[index].antall <= 0)
        fjernVare(index);
    updateView();
}