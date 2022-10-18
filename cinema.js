let iFilm = 0;
let filmName;

// FullscreenAPI
function Fullscreen()
{
    document.documentElement.requestFullscreen()
}


// // BatteryAPI
// function onChargingChange() {
//     handleChange('Battery charging changed to ' + (this.charging ? 'charging' : 'discharging') + '')
//   }
//   function onChargingTimeChange() {
//     handleChange('Battery charging time changed to ' + this.chargingTime + ' s');
//   }
//   function onDischargingTimeChange() {
//     handleChange('Battery discharging time changed to ' + this.dischargingTime + ' s');
//   }
//   function onLevelChange() {
//     handleChange('Battery level changed to ' + this.level + '');
//   }

//   var batteryPromise;
  
//   if ('getBattery' in navigator) {
//     batteryPromise = navigator.getBattery();
//   } else {
//     batteryPromise = Promise.resolve(navigator.battery);
//   }
  
//   batteryPromise.then(function (battery) {
//     document.getElementById('charging').innerHTML = battery.charging ? 'charging' : 'discharging';
//     document.getElementById('chargingTime').innerHTML = battery.chargingTime + ' s';
//     document.getElementById('dischargingTime').innerHTML = battery.dischargingTime + ' s';
//     document.getElementById('level').innerHTML = battery.level;
    
//     battery.addEventListener('chargingchange', onChargingChange);
//     battery.addEventListener('chargingtimechange', onChargingTimeChange);
//     battery.addEventListener('dischargingtimechange', onDischargingTimeChange);
//     battery.addEventListener('levelchange', onLevelChange);
//   });



// funtion de création des cartes
function addFilmPoster(genre, storageFilmName)
{
    let value;
    if((genre == "Dystopique") || (genre == "Horreur") || (genre == "Gangster") || (genre == "FR") || (genre == "Drame") || (genre == "animation"))
    {
        masterId = "films";
        let select = document.getElementById("selectFilm");
        value = select.options[select.selectedIndex].value;
    }
    let block = document.getElementById(masterId);

    let newDivFilm = document.createElement("div");
    newDivFilm.setAttribute("id", "divCard"+iFilm);
    newDivFilm.setAttribute("class", "Card");
    newDivFilm.style.margin = "20px 50px 0 50px";
    block.appendChild(newDivFilm);

    
    // Nom de la carte
    let titreEVA = document.createElement("h2");
    titreEVA.setAttribute("class", "nomCard");
    if(Side == "EVA")
    {
        titreEVA.setAttribute("id", "cardName" + "-" + Side + "-" + iFilm);
        if(storageCardName == null)
        {
            if(indexMeca < 10)
            {
                defaultCardName = "EVA_0" + indexMeca;
                titreEVA.textContent = defaultCardName;
            }
            else
            {
                defaultCardName = "EVA_" + indexMeca;
                titreEVA.textContent = defaultCardName;
            }
        }
        else
        {
            titreEVA.textContent = storageCardName;
        }
    }
    else if(Side == "Angel")
    {

        titreEVA.setAttribute("id", "cardName" + "-" + Side + "-" + indexAngel);
        if(storageCardName == null)
        {
            defaultCardName = "Angel-" + indexAngel;
            titreEVA.textContent = defaultCardName;
        }
        else
        {
            titreEVA.textContent = storageCardName;
        }
    }
    titreEVA.style.textAlign = "center";
    divCard.appendChild(titreEVA);

    let inputCardName = document.createElement("input");
    inputCardName.setAttribute("class", "inputCardName");
    if(Side == "EVA")
    {
        inputCardName.setAttribute("id", "inputCardName" + "-" + Side + "-" + indexMeca);
    }
    else if(Side == "Angel")
    {
        inputCardName.setAttribute("id", "inputCardName" + "-" + Side + "-" + indexAngel);
    }
    divCard.appendChild(inputCardName);
    inputCardName.style.display = "none";
        
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    // Image de la carte
    let img = document.createElement("img");
    let valueFilm = (getRandomInt(2));
    if(value == "Drame"){
        if(valueFilm == 0)
        {
            filmName = "Dallas buyers club"; img.setAttribute("src", "./imgfilm/dbc.jpg");

        }else if(valueFilm == 1){

            filmName = "Little Fish"; img.setAttribute("src", "./imgfilm/littlefish.jpg");

        }
    }else if(value == "Horreur"){

        if(valueFilm == 0) {
            filmName = "The haunting of hill house";
            img.setAttribute("src", "./imgfilm/hillhouse.jpg");

        }else if(valueFilm == 1){
            filmName = "Le secret des Marrowbone";
            img.setAttribute("src", "./imgfilm/marrowbone.jpg");
        }

    }else if(value == "Dystopique"){

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

    }else if(value == "Gangster"){
        
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
    }else if(value == "FR"){    
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
    }else if(value == "Animation"){    
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
    img.setAttribute("class", "image");
    divCard.appendChild(img);
    
    // Nom des Pilotes pour les EVA et input pour le modifier
    if(Side == "EVA")
    {
        let divPilote = document.createElement("div");
        divPilote.setAttribute("class", "divPilote");
        divCard.appendChild(divPilote);

        let piloteLabel = document.createElement("p");
        piloteLabel.setAttribute("class", "piloteLabel");
        piloteLabel.setAttribute("id", "labelPiloteEVA" + indexMeca);
        piloteLabel.textContent = "Pilote :" ;
        divPilote.appendChild(piloteLabel);

        let piloteName = document.createElement("p");
        piloteName.setAttribute("class", "piloteName");
        piloteName.setAttribute("id", "nomPiloteEVA" + indexMeca);
        if(storagePiloteName == null)
        {
            piloteName.textContent = defaultPiloteName;
        }
        else
        {
            piloteName.textContent = storagePiloteName;
        }
        divPilote.appendChild(piloteName);

        let inputName = document.createElement("input");
        inputName.setAttribute("class", "inputPiloteName");
        inputName.setAttribute("id", "inputNomPiloteEVA" + indexMeca);
        divPilote.appendChild(inputName);
        inputName.style.display = "none";
    }
    
    // Parent des Bouttons
    let divParametres = document.createElement("div");
    divParametres.setAttribute("class", "cardParameters");
    divCard.appendChild(divParametres);

    // Boutton effacer
    let btnErase = document.createElement("button");
    btnErase.setAttribute("type", "button");
    if(Side == "EVA")
    {
        btnErase.setAttribute("id", "btnErase" + "-" + Side + "-" + indexMeca);
    }
    else if(Side == "Angel")
    {
        btnErase.setAttribute("id", "btnErase" + "-" + Side + "-" + indexAngel);
    }
    btnErase.textContent = "X";
    btnErase.setAttribute("class","btnErase");
    btnErase.addEventListener("click", pressEraseButton);
    divParametres.appendChild(btnErase);
    
    // Boutton Editer
    let btnEdit = document.createElement("button");
    btnEdit.setAttribute("type", "button");
    if(Side == "EVA")
    {
        btnEdit.setAttribute("id", "btnEdit" + "-" + Side + "-" + indexMeca);
    }
    else if(Side == "Angel")
    {
        btnEdit.setAttribute("id", "btnEdit" + "-" + Side + "-" + indexAngel);
    }
    btnEdit.textContent = "Edit";
    btnEdit.setAttribute("class","btnEdit");
    btnEdit.addEventListener("click", pressEditButton);
    divParametres.appendChild(btnEdit);
    
    let btnValidate = document.createElement("button");
    btnValidate.setAttribute("type", "button");
    if(Side == "EVA")
    {
        btnValidate.setAttribute("id", "btnValidate" + "-" + Side + "-" + indexMeca);
    }
    else if(Side == "Angel")
    {
        btnValidate.setAttribute("id", "btnValidate" + "-" + Side + "-" + indexAngel);
    }
    btnValidate.textContent = "Ok";
    btnValidate.setAttribute("class","btnValidate");
    btnValidate.addEventListener("click", pressValidateButton);
    divParametres.appendChild(btnValidate);
    btnValidate.style.display = "none";

    if(Side == "EVA")
    {
        pushToLocal(Side, indexMeca, defaultCardName, defaultPiloteName);
    }
    else if(Side == "Angel")
    {
        pushToLocal(Side, indexAngel, defaultCardName);
    }

    if(Side == "EVA")
    {
        indexMeca +=1;
    }
    else if(Side == "Angel")
    {
        indexAngel +=1;
    }
}

// Suppression d'une carte
    const pressEraseButton = e => 
    {
        eraseMecaCard(e.target.id)
    }

function eraseMecaCard(itemId)
{
    let element = document.getElementById(itemId);
    let parts = itemId.split("-");
    let sideCard = parts[1];
    let numCard = parts[2];
    deleteInLocal(sideCard, numCard);
    element.parentNode.parentNode.remove(element);
}


// Edition d'une carte
    const pressEditButton = e => 
    {
        editMecaCard(e.target.id)
    }

function editMecaCard(itemId)
{

    let element = itemId;
    let parts = element.split("-");
    let sideCard = parts[1];
    let numCard = parts[2];

    let validBTN = document.getElementById("btnValidate" + "-" + sideCard + "-" + numCard);
    validBTN.style.display = "block";
    let editBTN = document.getElementById("btnEdit" + "-" + sideCard + "-" + numCard);
    editBTN.style.display = "none";

    if(sideCard == "EVA")
    {
        let inputPilote = document.getElementById("inputNomPiloteEVA" + numCard);
        inputPilote.style.display = "block";
        let namePilote = document.getElementById("nomPiloteEVA" + numCard);
        namePilote.style.display = "none";
    }

    let inputCard = document.getElementById("inputCardName" + "-" + sideCard + "-" + numCard);
    inputCard.style.display = "block";
    let nameCard = document.getElementById("cardName" + "-" + sideCard + "-" + numCard);
    nameCard.style.display = "none";
}

// Validation modification d'une carte
    const pressValidateButton = e => 
    {
        validateModify(e.target.id)
    }

function validateModify(itemId)
{
    let element = itemId;
    let parts = element.split("-");
    let sideCard = parts[1];
    let numCard = parts[2];

    let validBTN = document.getElementById("btnValidate" + "-" + sideCard + "-" + numCard);
    validBTN.style.display = "none";
    let editBTN = document.getElementById("btnEdit" + "-" + sideCard + "-" + numCard);
    editBTN.style.display = "block";

    let inputCard = document.getElementById("inputCardName" + "-" + sideCard + "-" + numCard);
    let nameCard = document.getElementById("cardName" + "-" + sideCard + "-" + numCard);
    let namePilote = document.getElementById("nomPiloteEVA" + numCard);

    if(inputCard.value.length != 0)
    {
        if(sideCard == "EVA")
        {
            nameCard.textContent = inputCard.value.toUpperCase();
        }
        else if(sideCard == "Angel")
        {
            nameCard.textContent = inputCard.value;
        }
    }

    if(sideCard == "EVA")
    {
        let inputPilote = document.getElementById("inputNomPiloteEVA" + numCard);
        namePilote = document.getElementById("nomPiloteEVA" + numCard);
        if(inputPilote.value.length != 0)
        {
            namePilote.textContent = inputPilote.value;
        }
        inputPilote.style.display = "none";
        
        namePilote.style.display = "block";
    }
    else
    {
        namePilote = "";
    }
    pushToLocal(sideCard, numCard, nameCard.textContent, namePilote.textContent);
    inputCard.style.display = "none";
    nameCard.style.display = "block";
}

function onLoadFunctions()
{
    for (let i = 0; i < localStorage.length; i++)
    {
        let data = localStorage.getItem(localStorage.key(i));
        data = data.replace(']','');
        data = data.replace('[','');
        for (let y = 0; y < data.length; y++)
        {
            data = data.replace('"','');
        }
        let parts = data.split(",");
        addCard(parts[0], parts[2], parts[3]);
    }
}

function pushToLocal(sideCard, index, cardName, piloteName)
{
    let data = [sideCard, index, cardName, piloteName];
    localStorage.setItem("card" + "-"+ sideCard+ "-"+ index, JSON.stringify(data));
}

function deleteInLocal(sideCard, index)
{
    localStorage.removeItem("card" + "-"+ sideCard+ "-"+ index);
}