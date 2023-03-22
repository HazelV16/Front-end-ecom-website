
function checkedThis(obj,index){
    var boxArray = document.getElementsByName('checkBox');
    for(var i=0;i<=boxArray.length-1;i++){
        if(boxArray[i]==obj && obj.checked){
            boxArray[i].checked = true;
        }else{
            boxArray[i].checked = false;
        }
    }
    $('.col-xl-3').hide()
    if(index == 1){
        $('.chager').show()
    }else if(index == 2){
        $('.converter').show()
    }else if(index == 3){
        $('.adapter').show()
    }else{
        $('.cable').show()
    }
}
function showColor(index){
    $('.col-xl-3').hide()
    var boxArray = document.getElementsByName('checkBox');
    for(var i=0;i<=boxArray.length-1;i++){
        boxArray[i].checked = false;
    }
    if(index == 1){
        $('.black').show()
    }else {
        $('.white').show()
    }
}