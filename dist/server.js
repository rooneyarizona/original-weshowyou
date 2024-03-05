$(document).ready(function(){
    $('#form-test').submit(function(e){
        e.preventDefault();
        const formData = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: 'http://www.weshowyou.tv:3000/submit-form',
            data: formData,
            success: function(response) {
                alert(response);
                window.location.href= "success.html";
            },
            error: function(err) {
                alert("An error has occured!");
                console.error(err);
            }
        });
    });
});