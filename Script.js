/*----------------------------------------------------------------------
------------------------------------------------------------------------*/
/*this.name = "Global Name";
var MyObj = {
    name: "Object name ",
    GetName: function() {
        return this.name;
    },
};
console.log("My object name " + MyObj.GetName()); //return obj name
var getMyObjName = MyObj.GetName();
console.log("My object name " + getMyObjName); // return global name
var getMyObjRealName = MyObj.GetName.bind(MyObj);
console.log("My object name " + getMyObjRealName()); // return obj name*/
/*----------------------------------------------------------------------
------------------------------------------------------------------------*/
var MyForm = document.getElementById("MyForm");
MyForm.addEventListener("submit", function(event) {
    var InputY = document.getElementById("y");
    var InputX = document.getElementById("x");
    if (!InputX.value || !InputY.value)
        alert("Please entre the numbres down correctlly ");
    else {
        var x = parseFloat(InputX.value);
        var y = parseFloat(InputY.value);
        let result = (y / x * 100).toFixed(2);
        document.getElementById("Result").innerText = "Result : " + result + " %";
    }
    event.preventDefault();
});

function ResetPage() {
    location.reload();
}