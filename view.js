updateView();
function updateView()
{
    let html = "";
    // html = visVare() + visUtvalg() + feilMelding + visHandlekurv();
    html = visUtvalg() + feilMelding + visHandlekurv();
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
            <div class="class_utvalg">
                <span class="utvalg_item">
                    ${utvalg[i].navn}
                    ${utvalg[i].pris}
                    <button onclick="leggTilVare('${_navn.replace(/'/g, "\\'")}')">-&gt;</button>
                </span>
            </div>
        `;
    }
    return html;
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
                    ${handlekurv[i].navn}
                    ${handlekurv[i].pris}
                    <button onclick="fjernVare(${i})">X</button>
                </span>
            </div>
        `;
        totalpris += handlekurv[i].pris;
    }
//    html += `<div id="id_totalpris">Totalpris: ${totalpris} kroner</div>`
//    return html;
    return `<div id="cart_container">${html}<div id="id_totalpris">Totalpris: ${totalpris} kroner</div></div>`;
}

