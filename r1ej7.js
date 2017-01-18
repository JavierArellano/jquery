$(document).ready(function(){
    alert("La página ha cargado!");
    $("#head").click(function(){
        alert($("head").html());
    });
    $("#body").click(function(){
        alert($("body").html());
    });
    $("#p1").click(function(){
        alert("p1");
    });
    $("#p2").click(function(){
        alert("p2");
        $("#p2").hide();
    });
    $("#btn1").click(function(){
        $("li").prepend("# ");
    });
    $("li").click(function(){
        $(this).hide();
    });
    $("a").html("Modificados");
    $("#t1 tr").click(function(){
        $(this).css({"background-color":"red"});
    });
    $("#t2 tr").click(function(){
        $(this).hide();
    });
});