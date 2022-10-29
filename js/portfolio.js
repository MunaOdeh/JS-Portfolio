var s_pos = 0;
showSlides(s_pos);

function plusSlides(X) 
{
    showSlides(s_pos = s_pos + X);
}

function currentSlide(X) 
{
    showSlides(s_pos = X);
}


function showSlides(X) 
{
    var pics = document.getElementsByClassName("mySlides");
    var position = document.getElementsByClassName("dot");
    if (X > pics.length - 1) 
    {
        s_pos = 0
    };
    
    if (X < 0) 
    {
        s_pos = pics.length - 1
    };
    
    for (i = 0; i < pics.length; i++) 
    {
        pics[i].style.display = "none";
    }
    
    for (i = 0; i < position.length; i++) 
    {
        position[i].className = position[i].className.replace(" active", "");
    }
    
    pics[s_pos].style.display = "block";
    position[s_pos].className = position[s_pos].className + " active";
}

function openForm() 
{
    document.getElementById("myForm").style.display = "block";
}

function closeForm() 
{
    document.getElementById("myForm").style.display = "none";
}

document.addEventListener("click", function(event)
{
    if (event.target.matches(".cancel"))
    {
        closeForm()
    }
}, false )