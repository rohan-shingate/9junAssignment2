

console.log("app2.js loaded..");

/// if fname is passed blank and clicked to submit then 
function submitFun()
{
    if(typeof(Storage) !=='undefined')
    {
    var x = document.getElementById("fnameid").value;
   /// console.log("Value of fname is:"+x);
    if(x== ""){
        alert("empty");
        return false;
              }
    else{
       /// alert("You Entered :"+x);
        console.log("Welcome "+x);
        }
    }
    else{
        console.log("not supported browser")
    }
}

