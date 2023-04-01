

    

console.log($("#name1"))

$("#name1").on("click", function(){
    $("#name1").addClass("new")
    $("#main").css("background-color", "aliceblue")
    $("#name2").css("color","blue");
    $("#name3").css("color","brown");
    $("#name4").css("color","aqua");
    $("#name5").css("color","black");
    $("#name6").css("color","#432f44");
    


    setTimeout(function(){
        $("#name1").removeClass("new")
    }, 400)

})

$("#name2").on("click", function(){
    $("#name2").addClass("new")
    $("#main").css("background-color", "coral")
    $("#name1").css("color","red");
    $("#name3").css("color","black");
    $("#name4").css("color","green");
    $("#name5").css("color","purple");
    $("#name6").css("color","black");
    


    setTimeout(function(){
        $("#name2").removeClass("new")
    }, 400)

})





$("#name3").on("click", function(){
    $("#name3").addClass("new")
    $("#main").css("background-color", "aqua");
    $("#name1").css("color","blueviolet");
    $("#name2").css("color","red");
    $("#name4").css("color","brown");
    $("#name5").css("color","blue");
    $("#name6").css("color","purple");
    


    setTimeout(function(){
        $("#name3").removeClass("new")
    }, 400)

})





$("#name4").on("click", function(){
    $("#name4").addClass("new")
    $("#main").css("background-color", "burlywood");
    $("#name1").css("color","green");
    $("#name2").css("color","#6e5773");
    $("#name3").css("color","#8ab2ff");
    $("#name5").css("color","green");
    $("#name6").css("color","black");
    


    setTimeout(function(){
        $("#name4").removeClass("new")
    }, 400)

})




$("#name5").on("click", function(){
    $("#name5").addClass("new")
    $("#main").css("background-color", "olive");
    $("#name1").css("color","black");
    $("#name2").css("color","#8d0033");
    $("#name3").css("color","#1c1259");
    $("#name4").css("color","#ec952e");
    $("#name6").css("color","#49beb7");
    


    setTimeout(function(){
        $("#name5").removeClass("new")
    }, 400)

})



$("#name6").on("click", function(){
    $("#name6").addClass("new")
    $("#main").css("background-color", "khaki")
    $("#name1").css("color","purple");
    $("#name2").css("color","#faa9df");
    $("#name3").css("color","#fc7fb6");
    $("#name4").css("color","#c96868");
    $("#name5").css("color","#f7c873");
    


    setTimeout(function(){
        $("#name6").removeClass("new")
    }, 400)

})


