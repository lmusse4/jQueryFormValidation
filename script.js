//Executed only after DOM
$(document).ready(function() {
    //function that will fire when the sub,it button is clicked
    $("#submit").click(function() {

        //variable for each form inputs
        const name = $("#name").val();
        const email = $("#email").val();
        const phone = $("#phone").val();
        const message = $("#message-area").val();
        const labels = $('label')

        //array named required
        const required = [name, email, phone];

        //Utilize for loop to iterate entire required array
        //if required is equal to empty string, will show text
        //warning classes added, and if not it will remove warning is removed
        for (let i = 0; i < required.length; i++) {
            if (required[i] === "") { 
                $("#message").text("Please Fill Out Required Fields");
                $("#message").addClass("warning");
                $(labels[i]).addClass('warning')
            } else {
                $("#message").text("");
                $("#message").removeClass("warning");
                $(labels[i]).removeClass('warning');
            }

        }
        if (!$("label").hasClass("warning")) {
            $("#form").remove();
            $("h2").text("Thanks for your feedback!");
          }          
        
    });
  });