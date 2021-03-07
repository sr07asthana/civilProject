console.log('main')
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
function selectGrades(e) {
    if (document.getElementById("grade1").checked) {
        grade = 4.6
    }
    if (document.getElementById("grade2").checked) {
        grade = 8.8
    }
    document.getElementById("uts").value=grade
}

function submitFirstPage(event) {
    localStorage.clear()
    factoredLoad = parseFloat(document.getElementById("factored-load").value)
    lengthTension = parseFloat(document.getElementById("length-tension").value)
    slenderness = parseFloat(document.getElementById("slenderness").value)
    pitch = parseFloat(document.getElementById("pitch").value)
    boltUTS = parseFloat(document.getElementById("uts").value)
    endDistance = parseFloat(document.getElementById("end-distance").value)
    boltDiameter = parseFloat(document.getElementById("bolt-diameter").value)
    console.log(factoredLoad)
    localStorage.setItem("factoredLoad", factoredLoad)
    localStorage.setItem("lengthTension", lengthTension)
    localStorage.setItem("slenderness", slenderness)
    localStorage.setItem("pitch", pitch)
    localStorage.setItem("endDistance", endDistance)
    localStorage.setItem("boltUTS", boltUTS)
    localStorage.setItem("grade", grade)
    localStorage.setItem("steelUTS", steelUTS)
    localStorage.setItem("yieldStressSteel", yieldStressSteel)
    localStorage.setItem("ym1", ym1)
    localStorage.setItem("ym0", ym0)
    localStorage.setItem("boltDiameter", boltDiameter)
    localStorage.setItem("safetyFactor", safetyFactor)
    localStorage.setItem("type", type)
}

function selectTypeOfSection(event) {
   // event.preventDefault()
    if (document.getElementById("tos1").checked) {
        type = "Equal"
    }
    if (document.getElementById("tos2").checked) {
        type = "Unequal"
    }

}
