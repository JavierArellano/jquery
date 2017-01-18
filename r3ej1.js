status=0;
function aumentar(){
    switch(status) {
    case "0":
        $("#aumenta").css({"fontSize":"20px"});
        status=1;
        break;
    case "1":
        $("#aumenta").css({"fontSize":"24px"});
        status=2;
        break;
    case "2":
        $("#aumenta").css({"fontSize":"16px"});
        status=0;
        break;
}
}
$(document).ready(function(){
    $("#1 tr:lt(2)").css({"background-color":"red"});
    $("#1 tr:gt(2)").css({"background-color":"blue"});
    $("p:contains('Eu')").css({"background-color":"red"});
    $("td:empty").css({"background-color":"yellow"});
    $("#f").click(function(){
        $("input").focus();
    });
    $("#nf").click(function(){
        $("input").off("focus");
    });
    $("div p").click(function(){
        $("div p").css({"background-color":"blue"});
    });
    $("#aumenta").click(aumentar);
    $( "#start" ).click(function() {
        $( "#animado" )
            .animate({"fontSize": "16px"},1000)
            .animate({"fontSize": "30px"},1000)
            .animate({"fontSize": "40px"},1000)
            .animate({"fontSize": "30px"},1000)
            .animate({"fontSize": "20px"},1000)
            .animate({"fontSize": "16px"},1000);
    });
    $( "#stop" ).click(function() {
        $( "#animado" ).stop(true);
    });
    $(".cuadro").fadeOut(function(){
        $("#c1").fadeIn("fast");
        $("#c2").fadeIn("slow");
        $("#c3").fadeIn(800);
        $("#c4").fadeIn(2000);
        $("#c5").fadeIn(4000);
    });
    $( "#stt" ).click(function() {
        $( "#cu" )
            .fadeIn("slow")
            .animate({"left": "200px"},1000, function(){
                $("#cu")
                    .css({"background-color": "blue"})
                    .slideToggle( "slow" );
        });
    });
    $( "#stp" ).click(function() {
        $( "#cu" ).stop(true);
    });
    $("#contr").keyup(function(e){
	   var longitud = $(this).val().length;
        if(longitud > 0 && longitud < 5){
		  $("#fortaleza").html('No segura');
        }else if(longitud > 4 && longitud < 9){
            $("#fortaleza").html('Medianamente segura');
        }else if(longitud > 8){
            $("#fortaleza").html('Segura');
        }else{
            $("#fortaleza").html('');
        }
	});
	
	$("#texto").hover(function(){
    	$(".tip").toggle();
    	}, function(){
    	$(".tip").toggle();
	});
	$(".item").hover(function(){
    	$(this).fadeOut(function(){   $(this).css({"backgroundColor":"white","color":"black"}).slideDown();
                                  })}
                     , function(){
    	$(this).animate({"backgroundColor":"blue","color":"white"});
	    });
    
});