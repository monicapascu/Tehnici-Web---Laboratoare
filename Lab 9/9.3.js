var movies = [
    {
        title: 'Scent of a Woman',
        duration: 156,
        actors: ['Al Pacino','Chris O`Donnell','Gabrielle Anwar'],
        viewed: true,
        poster: 'https://images-na.ssl-images-amazon.com/images/I/51ppnXvl3qL._SY300_.jpg'
    },{
        title: 'Inglourious Basterds',
        duration: 153,
        actors: ['Brad Pitt','Christoph Waltz','Eli Roth'],
        viewed: false,
        poster: 'https://images-na.ssl-images-amazon.com/images/I/51ZV3EzXh1L._SL500_AC_SS350_.jpg'
    },{
        title: 'Hidden Figures',
        duration: 127,
        actors: ['Taraji P. Henson','Octavia Spencer','Janelle Monáe'],
        viewed: true,
        poster: 'https://s3.amazonaws.com/ffe-ugc/intlportal2/58b876ae0795a.jpg'
    }
];

var body = document.getElementsByTagName("body")[0];

for (i=0;i<movies.length;i++) {
    title = document.createElement("p");
    title.innerHTML = movies[i].title;
    body.appendChild(title);

    list = document.createElement("ul");
    duration = document.createElement("li");
    duration.innerHTML = "Durata: " + movies[i].duration;
    list.appendChild(duration);

    actors = document.createElement("li");
    actors.innerHTML = "Actori: " + movies[i].actors.join(",");
    list.appendChild(actors);

    viewed = document.createElement("li");
    viewed.innerHTML = movies[i].viewed?"Vizualizat":"Nevizualizat";
    list.appendChild(viewed);

    body.appendChild(list);
    im = document.createElement("img");
    im.src = movies[i].poster;
    body.appendChild(im);

    title.style.color = movies[i].viewed?"green":"red";
    duration.style.color = movies[i].viewed?"green":"red";
    actors.style.color = movies[i].viewed?"green":"red";
    viewed.style.color = movies[i].viewed?"green":"red";

}
