window.onload=navBar();
function navBar(){
    navBarInner="<a href='index.html'>Home</a> <a href='products.html'>Products</a> <a href='contact.html'>Contact</a>";

document.getElementById("navigationbar").innerHTML= navBarInner;
}
function completeOrder(){
    var customerName = document.getElementById("customerNameField").value;
    var customerEmail = document.getElementById("customerEmailField").value;

    if (customerName == ""  ){
        alert ("Please fill in your name")
    }
    else if (customerEmail == ""){
        alert ("Please fill in your e-mail")
    }
    else  {
        alert("Thank you "+ customerName+" for your purchase. We will contact you through e-mail!");
        document.location.reload() ;
    } 
}

function cancelOrder(){
    document.location.reload() ;
    
}