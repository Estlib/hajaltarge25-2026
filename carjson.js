const minuJson = [
    {
        Car: {
            Colour: "Roosi roosa",
            "Tinted Windows": false,
            Seatcount: 6,
            Wheelcount: 4,
            "Boot capacity":35.5,
            "Add-ons": [
                {
                    Windows:"Shatterproof",
                    Roof:"Non-collapsible roof"
                }],
            Brand:"Bayerische MotorWagen",
            Regnum:"ABC 123"
        }
    }
]
document.getElementById("app").innerHTML = `
<div id="json">
<h1> Auto omadused NYOMMMM </h1>
<p>Tootjamark: ${minuJson[0].Car.Brand}</p>
<p>Värv: ${minuJson[0].Car.Colour}</p>
<p>Tumendatud aknad: ${minuJson[0].Car["Tinted Windows"]}</p>
<p>Istekohti: ${minuJson[0].Car.Seatcount}</p>
<p>Rattaid: ${minuJson[0].Car.Wheelcount}</p>
<p>Pakkiruumi maht: ${minuJson[0].Car["Boot capacity"]}</p>
<p>Lisandpaketi sisu: 
<ul>
<li>Aknad: ${minuJson[0].Car["Add-ons"][0].Windows}</li>
<li>Katus: ${minuJson[0].Car["Add-ons"][0].Roof}</li>
</ul>
<p>Numbrimärk ARKis: ${minuJson[0].Car.Regnum}</p>
</p>

</div>
`

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("bacon").innerHTML = this.responseText;
    }
    xhttp.open("GET","https://baconipsum.com/api/?type=all-meat")
    xhttp.send()
}