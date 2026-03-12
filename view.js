updateView();
function updateView()
{
    let html = "";
    // html = visVare() + visUtvalg() + feilMelding + visHandlekurv();
    html = visUtvalg() + visHandlekurv();
    model.app.app.innerHTML = /*HTML*/ `
        <main>${html}</main>
    `;
}


function visVare()
{
    return /*HTML*/ `
        <div>
            <input type="text" placeholder="vare" onchange="leggTilVare(this.value)">
        </div>
    `;
}


function visUtvalg()
{
    let html = ``;
    let utvalg = model.app.utvalg.varer;
    for (let i = 0; i < utvalg.length; i++)
    {
        let _navn = utvalg[i].navn;
        html += /*HTML*/ `
            <tr>
                <td>${utvalg[i].navn}</td>
                <td>${utvalg[i].pris} kroner</td>
                <td>antall: ${utvalg[i].antall}</td>
                <td><button onclick="leggTilVare('${_navn.replace(/'/g, "\\'")}')">+</button></td>
            </tr>
        `;
    }
    return /*HTML*/ `
        <table id="id_tabell">
            <thead>
                <tr class="class_tabell_header">
                    <th>Vare</th>
                    <th>Pris</th>
                    <th>Antall</th>
                    <th>Legg til</th>
                </tr>
            </thead>
            <tbody>
                ${html}
            </tbody>
        </table>
    `;
}


function visHandlekurv()
{
    let html = ``;

    let handlekurv = model.app.handlekurv.varer;
    let totalpris = 0;
    for (let i = 0; i < handlekurv.length; i++)
    {
        html += /*HTML*/ `
            <div class="class_kurv">
                <span class="kurv_item">
                    ${handlekurv[i].navn} - 
                    ${handlekurv[i].pris} kroner - antall: 
                    ${handlekurv[i].antall}
                    <button onclick="reduserAntall(${i})">-</button>
                    <button onclick="fjernVare(${i})">X</button>
                </span>
            </div>
        `;
        totalpris += handlekurv[i].pris * handlekurv[i].antall;
    }
//    html += `<div id="id_totalpris">Totalpris: ${totalpris} kroner</div>`
//    return html;
    return `
        <div id="cart_container">
            ${html}
            <div id="id_totalpris">
                Totalpris: ${totalpris} kroner
            </div>
        </div>
    `;
}

