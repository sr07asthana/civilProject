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
    [[75, 50, 10], 1152],
    [[75, 50, 8], 938]
    
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
    var Vdpb = 820 * Kb * boltDiameter * t
    var boltValue = Math.min(Vdpb, Vdsb)
    var number_bolts = Math.floor(factoredLoad / boltValue)
    var alpha = null
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
    if (Tdn <= factoredLoad) {
        fail = [1, 0, 0]
        ob.push([name,fail])
        continue
    }
    var boltArea = 4.5
    var Avg = (4 * pd + ed) * t
    var Avn = (4 * pd + ed - boltArea * dh) * 10
    var Atg = 200
    var Atn = 200
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

localStorage.setItem("answer",JSON.stringify(ob))