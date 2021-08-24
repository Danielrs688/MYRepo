var hoteles = {
    Bahia: {
        name: "Bahia",
        location: "Malaga",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1c/a0/a4/2d/bahia-principe-fantasia.jpg",
},
Turquesa: {
    name: "Turquesa",
    location: "Malaga",
    img: "https://res.cloudinary.com/lastminute/image/upload/c_scale,w_630/q_auto/v1553297945/ldzacy8bxokgzbbmengg.jpg",
},
Azul: {
    name:"Azul",
    location: "Malaga",
    img: "https://pix10.agoda.net/hotelImages/244/244874/244874_121013171756973.jpg?s=1024x768",
},
}


var selectedHotel = prompt (
    "Indica el nombre del hotel: Bahia, Turquesa o Azul"
);
  
document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[selectedHotel].name;

document.getElementById("locationhotel").innerHTML = "Ubicado en " + hoteles[selectedHotel]["location"];

document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

var stars = {
    una: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734",
    dos:"<span>&#9733;<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734",
    tres:"<span>&#9733;<span>&#9733;<span>&#9733;</span><span>&#9734;</span><span>&#9734",
    cuatro:"<span>&#9733;<span>&#9733;<span>&#9733;<span>&#9733;</span><span>&#9734",
    cinco:"<span>&#9733;<span>&#9733;<span>&#9733;<span>&#9733;<span>&#9733",
}
    var rating = prompt ("¿Cuántas estrellas?: una, dos, tres, cuatro o cinco");

    document.getElementById("rating").innerHTML = stars[rating];


    var anonymous = confirm ("¿Quiere que sea anonimo?");
document.getElementById("anonymous").checked = anonymous