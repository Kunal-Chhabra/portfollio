
// Clouser
function Func() {
    var name = "Hello! here i use clouser";
    function showName() {
        alert(name);
    }
    return showName;
}

var someFunc = Func();
someFunc();