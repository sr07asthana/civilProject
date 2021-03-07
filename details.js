console.log("lund bc")
console.log(localStorage.getItem("factoredLoad"))
var factoredLoad = localStorage.getItem("factoredLoad")
var lengthTension = localStorage.getItem("lengthTension")
var slenderness = localStorage.getItem("slenderness")
var steelUTS = localStorage.getItem("steelUTS")
var yieldStressSteel = localStorage.getItem("yieldStressSteel")
var ym1 = localStorage.getItem("ym1")
var ym0 = localStorage.getItem("ym0")
var boltUTS = localStorage.getItem("boltUTS")
var pitch = localStorage.getItem("pitch")
var endDistance = localStorage.getItem("endDistance")
var boltDiameter = localStorage.getItem("boltDiameter")
var safetyFactor = localStorage.getItem("safetyFactor")
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
