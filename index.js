let indexFilm = 0;
let filmName;
let key = 0;

// Fullscreen API 1
function Fullscreen()
{
    document.documentElement.requestFullscreen()
}

// fonction pour générer des cartes 

function addFilm(storageFilmName)
{
  let data = [];
    let filmId = "filmsId";
    let select = document.getElementById("selectFilm");
    const genre = select.options[select.selectedIndex].value;
    let block = document.getElementById(filmId);

    let newDivFilm = document.createElement("div");
    let del = document.createElement("img");
    del.setAttribute('src', './imgfilm/bin.png');
    del.id = "binId";
    newDivFilm.setAttribute("id", "newDivFilm"+indexFilm);
    newDivFilm.setAttribute("class", "Card");
    newDivFilm.style.margin = "20px 50px 0 50px";

    if (indexFilm >= 7) { // pas plus de 7 cartes 
        document.createElement(" ");
    }

    indexFilm+=1
    
    // générer un chiffre aléatoire pour choisir entre plusieurs films de chaque genre
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    // Image de la carte
    let img = document.createElement("img");
    let valueFilm = (getRandomInt(2));
    if(genre == "Drame"){
        if(valueFilm == 0)
        {
            filmName = "Dallas buyers club"; img.setAttribute("src", "./imgfilm/dbc.jpg");

        }else if(valueFilm == 1){

            filmName = "Little Fish"; img.setAttribute("src", "./imgfilm/littlefish.jpg");

        }
    }else if(genre == "Horreur"){

        if(valueFilm == 0) {
            filmName = "The haunting of hill house";
            img.setAttribute("src", "./imgfilm/hillhouse.jpg");

        }else if(valueFilm == 1){
            filmName = "Le secret des Marrowbone";
            img.setAttribute("src", "imgfilm\marrowbone.jpg");
        }

    }else if(genre == "Dystopique"){

        if(valueFilm == 0)
        {
            filmName = "Bienvenue à Gattaca";
            img.setAttribute("src", "./imgfilm/gattaca.jpg");
        }
        else if(valueFilm == 1)
        {
            filmName = "Blade runner 2045";
            img.setAttribute("src", "./imgfilm/blade.jpg");
        }

    }else if(genre == "Gangster"){
        
        if(valueFilm == 0)
        {
            filmName = "Les infiltrés";
            img.setAttribute("src", "./imgfilm/infiltres.jpg");
        }

        else if(valueFilm == 1)
        {
            filmName = "Les affranchis";
            img.setAttribute("src", "./imgfilm/affranchis.jpg");
        }
    }else if(genre == "FR"){    
        if(valueFilm == 0)
        {
            filmName = "Adieu les cons";
            img.setAttribute("src", "./imgfilm/adc.jpg");
        }
        else if(valueFilm == 1)
        {
            filmName = "Amélie Poulain";
            img.setAttribute("src", "./imgfilm/poulain.jpg");
        }
    }else if(genre == "animation"){   

        if(valueFilm == 0)
        {
            filmName = "Le voyage de Chihiro";
            img.setAttribute("src", "./imgfilm/chihiro.jpg");
        }
        else if(valueFilm == 1)
        {
            filmName = "Le sommet des dieux";
            img.setAttribute("src", "./imgfilm/sommet.jpg");
        }

    }   

    // creation div pour card
    let titreFILM = document.createElement("h2");
    titreFILM.setAttribute("class", "nomCard");
    if((genre == "Dystopique") || (genre == "Horreur") || (genre == "Gangster") || (genre == "FR") || (genre == "Drame") || (genre == "animation"))
    {
        titreFILM.setAttribute("id", "cardName" + "-" + genre + "-" + indexFilm);
        if(storageFilmName == null)
        {
            if(indexFilm < 10)
            {
                filmName = filmName + " " + "Genre:" + genre;
                titreFILM.textContent = filmName;
            }
        }
        else
        {
            titreFILM.textContent = storageFilmName;
        }
    }

    titreFILM.style.textAlign = "center";
    newDivFilm.appendChild(titreFILM);

    img.setAttribute("class", "image");
    newDivFilm.appendChild(img);
    newDivFilm.appendChild(del);
    block.appendChild(newDivFilm);

    data.push(filmName, genre, indexFilm);
    localStorage.setItem("key"+ key, JSON.stringify(data))
    key++

    // del.setAttribute("onclick","document.getElementById("+indexFilm+").remove()");
    
}


function onLoadPage() // recup donnée lors du chargement
{
    for (let j = 0; j < localStorage.length; j++)
    {
        let data = localStorage.getItem(localStorage.key(j));
        data = data.replace(']','');
        data = data.replace('[','');
        for (let y = 0; y < data.length; y++)
        {
            data = data.replace('"','');
        }
        let parts = data.split(",");
        addFilm(parts[0], parts[2], parts[3]);
    }
}

// camera (fonction API 2)
(() => {
    const width = 320
    let height = 0;
    let streaming = false;
    let video = null;
    let canvas = null;
    let photo = null;
    let startbutton = null;
  
    function showViewLiveResultButton() {
      if (window.self !== window.top) {
        document.querySelector(".contentarea").remove();
        const button = document.createElement("button");
        button.textContent = "View live result of the example code above";
        document.body.append(button);
        button.addEventListener('click', () => window.open(location.href));
        return true;
      }
      return false;
    }
  
    function startup() {
      if (showViewLiveResultButton()) { return; }
      video = document.getElementById('video');
      canvas = document.getElementById('canvas');
      photo = document.getElementById('photo');
      startbutton = document.getElementById('startbutton');
  
      navigator.mediaDevices.getUserMedia({video: true, audio: false})
        .then((stream) => {
          video.srcObject = stream;
          video.play();
        })
        .catch((err) => {
          console.error(`An error occurred: ${err}`);
        });
  
      video.addEventListener('canplay', (ev) => {
        if (!streaming) {
          height = video.videoHeight / (video.videoWidth/width);
          if (isNaN(height)) {
            height = width / (4/3);
          }
  
          video.setAttribute('width', width);
          video.setAttribute('height', height);
          canvas.setAttribute('width', width);
          canvas.setAttribute('height', height);
          streaming = true;
        }
      }, false);
  
      startbutton.addEventListener('click', (ev) => {
        takepicture();
        ev.preventDefault();
      }, false);
  
      clearphoto();
    }
  
    function clearphoto() {
      const context = canvas.getContext('2d');
      context.fillStyle = "#AAA";
      context.fillRect(0, 0, canvas.width, canvas.height);
  
      const data = canvas.toDataURL('image/png');
      photo.setAttribute('src', data);
    }
  
    function takepicture() {
      const context = canvas.getContext('2d');
      if (width && height) {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(video, 0, 0, width, height);
  
        const data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
      } else {
        clearphoto();
      }
    }
  
    window.addEventListener('load', startup, false);
  })();

// function addToLocalStorage(data)
// {
//     localStorage.setItem("key"+ key, JSON.stringify(date));
//     key++;
// }


function deleteItemOnLocalStorage(Card, index)
{
    localStorage.removeItem("card" + "-"+ Card+ "-"+ index);
    window.localStorage.setItem(cardName)

}

function clearLocalStorage()
{
    window.localStorage.clear()
}
