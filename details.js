var factoredLoad = parseFloat(localStorage.getItem("factoredLoad"))
var lengthTension = parseFloat(localStorage.getItem("lengthTension"))
var slenderness = parseFloat(localStorage.getItem("slenderness"))
var steelUTS = parseFloat(localStorage.getItem("steelUTS"))
var yieldStressSteel = parseFloat(localStorage.getItem("yieldStressSteel"))
var ym1 = parseFloat(localStorage.getItem("ym1"))
var ym0 = parseFloat(localStorage.getItem("ym0"))
var boltUTS = parseFloat(localStorage.getItem("boltUTS"))
var pitch = parseFloat(localStorage.getItem("pitch"))
var endDistance = parseFloat(localStorage.getItem("endDistance"))
var boltDiameter = parseFloat(localStorage.getItem("boltDiameter"))
var safetyFactor = parseFloat(localStorage.getItem("safetyFactor"))
var type = localStorage.getItem("type")
document.getElementById("fl").innerHTML = factoredLoad
document.getElementById("tml").innerHTML = lengthTension
document.getElementById("slr").innerHTML = slenderness
document.getElementById("steel-uts").innerHTML = steelUTS
document.getElementById("ys").innerHTML = yieldStressSteel
document.getElementById("ym1").innerHTML = ym1
document.getElementById("ym0").innerHTML = ym0
document.getElementById("uts-bolt").innerHTML = boltUTS
document.getElementById("dia").innerHTML = boltDiameter
document.getElementById("pitch").innerHTML = pitch
document.getElementById("ed").innerHTML = endDistance
document.getElementById("sf").innerHTML = safetyFactor
document.getElementById("type-section").innerHTML = `${type} with connected leg larger`

var info = [
    [[20,20,3], 112],
    [[20,20,4],145],
    [[25,25,3],141],
    [[25,25,4],184],
    [[25,25,5],225],
    [[30,30,3],173],
    [[30,30,4],226],
    [[30,30,5],277],
    [[35,35,3],203],
    [[35,35,4],266],
    [[35,35,5],327],
    [[35,35,6],286],
    [[40,40,3],234],
    [[40,40,4],307],
    [[40,40,5],378],
    [[40,40,6],447],
    [[45,45,3],264],
    [[45,45,4],347],
    [[45,45,5],428],
    [[45,45,6],507],
    [[50, 50, 3],295],
    [[50, 50, 4],388],
    [[50, 50, 5],479],
    [[50, 50, 6],568],
    [[55, 55, 5],527],
    [[55, 55, 6],626],
    [[55, 55, 8],818],
    [[55, 55, 10],1002],
    [[60, 60, 5],575],
    [[60, 60, 6],684],
    [[60, 60, 8],896],
    [[60, 60, 10],1100],
    [[65, 65, 5],625],
    [[65, 65, 6],744],
    [[65, 65, 8],976],
    [[65, 65, 10], 1200],
    [[70, 70, 5], 677],
    [[70, 70, 6], 806],
[[70, 70, 8], 1058],
[[70, 70, 10], 1302],
[[75, 75, 5], 727],
[[75, 75, 6], 866],
[[75, 75, 8], 1138],
[[75, 75, 10], 1402],
[[80, 80, 6], 929],
[[80, 80, 8], 1221],
[[80, 80, 10], 1505],
[[80, 80, 12], 1781],
[[90, 90, 6], 1047],
[[90, 90, 8], 1379],
[[90, 90, 10], 1703],
[[90, 90, 12], 2019],
[[100, 100, 6], 1167],
[[100, 100, 8], 1539],
[[100, 100, 10], 1903],
[[100, 100, 12], 2259],
[[110, 110, 8], 1702],
[[110, 110, 10], 2106],
[[110, 110, 12], 2502],
[[110, 110, 15], 3081],
[[130, 130, 8], 2202],
[[130, 130, 10], 2506],
[[130, 130, 12], 2982],
[[130, 130, 15], 3681],
[[150, 150, 10], 2903],
[[150, 150, 12], 3459],
[[150, 150, 15], 4278],
[[150, 150, 18], 5079],
[[200, 200, 12], 4661],
[[200, 200, 15], 5780],
[[200, 200, 18], 6881],
[[200, 200, 25], 9380],
[[30, 20, 3], 141],
[[30, 20, 4], 184],
[[30, 20, 5], 225],
[[40, 25, 3], 188],
[[40, 25, 4], 246],
[[40, 25, 5], 302],
[[40, 25, 6], 356],
[[45, 30, 3], 218],
[[45, 30, 4], 286],
[[45, 30, 5], 352],
[[45, 30, 6], 416],
[[50, 30, 3], 234],
[[50, 30, 4], 307],
[[50, 30, 5], 378],
[[50, 30, 6], 447],
[[60, 40, 5], 476],
[[60, 40, 6], 565],
[[60, 40, 8], 737],
[[65, 45, 5], 526],
[[65, 45, 6], 625],
[[65, 45, 8], 817],
[[70, 45, 5], 552],
[[70, 45, 6], 656],
[[70, 45, 8], 858],
[[70, 45, 10], 1052],
[[75, 50, 5], 602],
[[75, 50, 6], 716],
[[75, 50, 8], 938],
[[75, 50, 10], 1152],
[[80, 50, 5], 627],
[[80, 50, 6], 746],
[[80, 50, 8], 978],
[[80, 50, 10], 1202],
[[90, 60, 6], 865],
[[90, 60, 8], 1137],
[[90, 60, 10], 1401],
[[90, 60, 12], 1657]
]

info.sort((a, b) => {
    return a[1] - b[1]
})

var ag = 4.4 * factoredLoad
var dh = boltDiameter + 2
var index = -1
for (var i = 0; i < info.length; i++){
    if (info[i][1] >= ag) {
        index = i
        break
    }
}

    var ob=[]

for (var i = index; i < info.length; i++){
    var section = info[i][0]
    var A = section[0]
    var B = section[1]
    var t = section[2]
    let name = `ISA ${A}*${B}*${t}`
    var Anc = (A - (t / 2) - dh) * t
    var Ago = (B - t / 2) * t
    var An = Anc + Ago
    var Vdsb = 0.113 * boltDiameter * boltDiameter
    var pd = 2.5 * boltDiameter
    var ed = 1.5 * boltDiameter
    var Kb = Math.min(Math.min(ed / (3 * dh), pd / (3 * dh) - 0.25), 0.97)
    var Vdpb = 820 * Kb * boltDiameter * t / 100
    var boltValue = Math.min(Vdpb, Vdsb)
    var number_bolts = Math.floor(factoredLoad / boltValue)
    var alpha = 0.6
    if (number_bolts == 1 || number_bolts == 2) {
        alpha=0.6
    }
    if (number_bolts == 3) {
        alpha = 0.7
    }
    if (number_bolts >= 4) {
        alpha = 0.8
    }
    var conditionsCheck = {}
    var fail=[0,0,0]
    var Tdn = alpha * An * 328 / 1000
    console.log(Tdn)
    if (Tdn <= factoredLoad) {
        fail = [1, 0, 0]
        ob.push([name,fail])
        continue
    }

    var Avg = (number_bolts * pd + ed) * t
    var Avn = (number_bolts * pd + ed - (number_bolts-0.5) * dh) * 10
    var Atg = t*(A - 2 * boltDiameter)
    var Atn = t*(A - 2 * boltDiameter - 0.5 * boltDiameter)
    var Tdb1 = (0.9 * Avn * 410) / (Math.sqrt(3) * 1.25) + (250 * 400) / 1.1
    var Tdb2 = (Avg * 250) / (Math.sqrt(3) * 1.1) + (0.9 * Atn * 410) / 1.25
    if (Math.min(Tdb1, Tdb2) <= factoredLoad) {
        fail = [0, 1, 0]
        ob.push([name,fail])
        continue
    }

    var lambda = lengthTension / 10.6
    if (lambda > slenderness) {
        fail = [0, 0, 1]
        ob.push([name,fail])
        continue
    }
    else {
        fail = [0, 0, 0]
        ob.push([name,fail])
        break
    }
}
localStorage.clear()

localStorage.setItem("answer",JSON.stringify(ob))