var factoredLoad = null
var lengthTension = null
var slenderness = null
var grade = null
var pitch = null
var endDistance = null
var steelUTS = 410
var yieldStressSteel = 250
var ym1 = 1.25
var ym0 = 1.1
var boltUTS = null
var boltDiameter = null
var safetyFactor = 1.25
var type = null
var throatThickness = null

function submitFirstPage(event) {
    localStorage.clear()
    factoredLoad = parseFloat(document.getElementById("factored-load").value)
    lengthTension = parseFloat(document.getElementById("length-tension").value)
    slenderness = parseFloat(document.getElementById("slenderness").value)
    throatThickness = parseFloat(document.getElementById("throat-thickness").value)
    localStorage.setItem("factoredLoad", factoredLoad)
    localStorage.setItem("lengthTension", lengthTension)
    localStorage.setItem("slenderness", slenderness)
    localStorage.setItem("throat", throatThickness)

}

