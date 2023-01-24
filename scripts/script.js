// Bronnen
// oefeningen DLO:
// https://codepen.io/shooft/pen/eYMQjjY
// https://dlo.mijnhva.nl/d2l/le/content/437099/Home 



// MENU OPENEN MET HAMBURGER MENU

// zoekt de menu-button op en slaat deze op in een variable
var openButton = document.querySelector("header > button");

//Zorgt ervoor dat de menu-button luistert naar een click.
openButton.addEventListener("click", openMenu);

//Voegt d.m.v een functie een clas toe aan de navigatie
function openMenu() {  
  // zoek de nav op
  var deNav = document.querySelector("nav");
  // voeg class toe aan nav
  deNav.classList.add("toonMenu");
}

// MENU SLUITEN MET HET KRUIS

// Zoekt de sluiten-button op en slaat eze op in een variable
var sluitButton = document.querySelector("nav button");

// Zorgt ervoor dat de sluit-button luistert naar een click.
sluitButton.addEventListener("click", sluitMenu);

//verwijdert d.m.v een functie een class uit de navigatie
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}

// KOOP BUTTON

// DAT DE BUTTON LUISTERT NAAR KLIKS
/* Zoekt alle classes met de naam SHOP op. En laat deze reageren op een "click" */
var shopButtons = document.querySelectorAll("button.shop");
for (var i = 0; i < shopButtons.length; i++) {
  shopButtons[i].addEventListener("click", addToShoppingCart);
}


// DE WINKELWAGEN + VULLEN
function addToShoppingCart() {
  /* Het getail dat in de span van de class shopping-cart in de NAV opzoeken.
  Die span slaan we op in een nieuwe variabele genaamd shoppingCartAmount */
  var shoppingCartAmount = document.querySelector(".shopping-cart span");
  
  /* Bepaald de huidige aantel items in de winkelwagen.*/
  var currentAmount = shoppingCartAmount.innerHTML;
  /* Dit is een string dus die zetten we om naar een getal*/
  currentAmount = parseInt(currentAmount);
  
  /* 1 item toevoegen (+) bij het huidige aantal items.*/
  var newAmount = currentAmount + 1;
  
  /* Zorgt ervoor dat het item zichtbaar +1 omhoog gaat bij elke click */
  shoppingCartAmount.innerHTML = newAmount;
}

// FAVORIET TOEVOEGEN

/* Zoekt alle classes met de naam LIKE op. En laat deze reageren op een "click" */
var heartButtons = document.querySelectorAll("button.like");
for (i = 0; i < heartButtons.length; i++) {
  heartButtons[i].addEventListener("click", addToFavorites);
}

// DE STYLING VAN DE FAVORIET AANPASSEN
function addToFavorites(event) {

  /* De class LIKED wordt aan het hele item toegevoegd om het hartje te stylen */
  var clickedHeart = event.target;
  var theItem = clickedHeart.closest("li");
  theItem.classList.toggle("liked");
  
  
  /* FAVORIET UPDATEN */
  
  /* Het getail dat in de span van de class favoriet in de NAV opzoeken.
  Die span slaan we op in een nieuwe variabele genaamd favorietAmount */
  var favorietAmount = document.querySelector(".favoriet span");
  
  /* Bepaald de huidige aantel favorieten*/
  var currentAmount = favorietAmount.innerHTML;
  /* Dit is een string dus die zetten we om naar een getal */
  currentAmount = parseInt(currentAmount);
  
  /* Het nieuwe aantal favorieten kunnen opslaag in deze variable */
  var newAmount;
  
  /*Als het item de class LIKED heeft dan moet er 1 opgeteld worden in de WINKELWAGEN */
  if (theItem.classList.contains("liked")) {
    /* het nieuwe aantal favorieten berekenen */
    newAmount = currentAmount + 1;
  }
  
  /*Als het item de class LIKED NIET HEEFT dan wordt er 1 afgetrokken van de WINKELWAGEN */
  else {
    /* het nieuwe aantal favorieten berekenen */
    newAmount = currentAmount - 1;
  }
  
  /* het nieuwe aantal in de HTML zetten */
  favorietAmount.innerHTML = newAmount;
}