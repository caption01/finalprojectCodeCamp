$(document).ready(function(){

    $("#updateBtn").click(function(){
        $(".content p").removeClass("bounce-top");
        
        let contentEdit = $("#contentEdit").children("option:selected").val();
        let infoEdit = $("#infoEdit").val();

        $(`p[id*=${contentEdit}]`).text(infoEdit);
        $(`p[id*=${contentEdit}]`).addClass("bounce-top")
        alert(`You have been change the ${contentEdit}`)
        $("#infoEdit").val("");

    })

    $("#contentSelect").change(function(){
        $(".content-extra-section div").addClass("active");
        $(".content-extra-section div").removeClass("bounce-top");

        let selectedContent = $(this).children("option:selected").val();
        alert(`You wish to look at ..${selectedContent}`)

        $(`div[id*=${selectedContent}]`).removeClass("active");
        $(`div[id*=${selectedContent}]`).addClass("bounce-top")
    });

    $("#colortab").change(function(){
        let colorValue = $("#colortab").val()
        $(".content").css("background-color", colorValue);
      });

});

