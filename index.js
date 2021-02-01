
// ||


function addNumber(number){
     var extraNumber= $("#result").val();
     $("#result").val(extraNumber + number);
     
}
// end number show
 
function clearNumber(number){
     $("#result").val('');
}
// clear number
function calculateN(){
    var outpurResult= eval($("#result").val())
    $("#result").val(outpurResult);
};

function deleteNumber(number){
   var presentValue= $("#result").val();
   if(presentValue!=""){
     $("#result").val(presentValue.slice(0,-1));
   }
};