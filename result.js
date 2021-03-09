var sections = JSON.parse(localStorage.getItem("answer"))

var htmlElements = "";
for (var i = 0; i < sections.length; i++) {
  var rowHTML=""
    for (var j = 0; j < 3; j++){
        var testName=""
          if (j == 0)
                 testName = "Rupture test"
             else if (j == 1)
                 testName = "Block shear test"
             else
                 testName="Slenderness ratio test"
         if (sections[i][1][j] == 0) {
          rowHTML+= `<div class="d-flex flex-row mb-2"> <span class="badge badge-success"> ${testName} </span></div>`
        }
        else {
            rowHTML += `<div class="d-flex flex-row mb-2"> <span class="badge badge-danger"> ${testName} </span></div>`
            break
        }
    }
   htmlElements += `<div class="card m-3">
        <div class="card-body">
            <h4>
                ${sections[i][0]}
            </h4>
            <div>
              ${rowHTML}
            </div>
        </div>
    </div>`
}
var container = document.getElementById("container");
container.innerHTML = htmlElements;