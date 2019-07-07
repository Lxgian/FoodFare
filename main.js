// SAVE CONSTANT
var SAVE_NAME = 'foodCount.foodfare';

const defaultStats = {
	goodwill: 0,
	ffmoney: 10,
	potatoes: 0,
	potatoFries: 0,
	flour: 0,
	crackers:0,
}

// GAMEPLAY VARIABLES
const defaultIngredient = {
	potatoes: 0,
	flour: 0,
}

const defaultFood = {
	potatoFries: 0,
	crackers: 0,
}
// STORAGE VARIABLES
const defaultIngredientStorage = {
	potatoes: 10,
	flour: 10,
}

const defaultFoodStorage = {
	potatoFries: 10,
	crackers: 10,
}

var ffmoney = 10;
var ingredient = JSON.parse(JSON.stringify(defaultIngredient));
var food = JSON.parse(JSON.stringify(defaultFood));
var ingredientStorage = JSON.parse(JSON.stringify(defaultIngredientStorage));
var foodStorage = JSON.parse(JSON.stringify(defaultFoodStorage));
var stats = JSON.parse(JSON.stringify(defaultStats));
//----------------------------------------------------------------------------------------------
var statsNode = {
		goodwill: document.getElementById('stat_goodwill'),
		ffmoney: document.getElementById('stat_ffmoney'),
		potatoes: document.getElementById('stat_potatoes'),
		potatoFries: document.getElementById('stat_potatoFries'),
		flour: document.getElementById('stat_flour'),
		crackers: document.getElementById('stat_crackers')
}

// DISPLAY VARIABLES -- ITEMS-COSTS-VALUES
var ffmoneyNode = document.getElementById('ffmoney');

var ingredientNodes = {
	    potatoes: {
	        current: document.getElementsByClassName('potatoes'),
	        cost: document.getElementsByClassName('potatoCost'),
	    },
		flour: {
 		   current: document.getElementsByClassName('flour'),
 		   cost: document.getElementsByClassName('flourCost'),
 	   },
};

var foodNodes = {
	    potatoFries: {
	        current: document.getElementsByClassName('potatoFries'),
	        cost: document.getElementsByClassName('potatoFriesCost'),
	        value: document.getElementsByClassName('potatoFriesValue'),
	    },
		crackers: {
	        current: document.getElementsByClassName('crackers'),
	        cost: document.getElementsByClassName('crackersCost'),
	        value: document.getElementsByClassName('crackersValue'),
	    },
};

// DISPLAY VARIABLES -- STORAGE
var ingredientStorageNodes = {
	    potatoes: {
	        current: document.getElementsByClassName('potatoesStorage'),
	        cost: document.getElementsByClassName('potatoesStorageCost'),
	    },
		flour: {
 		   current: document.getElementsByClassName('flourStorage'),
 		   cost: document.getElementsByClassName('flourStorageCost'),
 	   },
};

var foodStorageNodes = {
	    potatoFries: {
	        current: document.getElementsByClassName('potatoFriesStorage'),
	        cost: document.getElementsByClassName('potatoFriesStorageCost'),
	    },
		crackers: {
	        current: document.getElementsByClassName('crackersStorage'),
	        cost: document.getElementsByClassName('crackersStorageCost'),
	    },
};
//-----------------------------------------------------------------------------------------------

// UPDATES ITEMS-COSTS-VALUES
function updateDisplay() {
	ffmoneyNode.innerHTML = ffmoney;

	// --INGREDIENTS-------//
	for (var i = 0; i < ingredientNodes.potatoes.current.length; i++) {
	    ingredientNodes.potatoes.current[i].innerHTML = ingredient.potatoes;
	}

	for (var i = 0; i < ingredientNodes.potatoes.cost.length; i++) {
		ingredientNodes.potatoes.cost[i].innerHTML = calcIngredientCost('potatoes');
	}

	for (var i = 0; i < ingredientNodes.flour.current.length; i++) {
		ingredientNodes.flour.current[i].innerHTML = ingredient.flour;
	}

	for (var i = 0; i < ingredientNodes.flour.cost.length; i++) {
		ingredientNodes.flour.cost[i].innerHTML = calcIngredientCost('flour');
	}

	// --FOOD-------//
	for (var i = 0; i < foodNodes.potatoFries.current.length; i++) {
        foodNodes.potatoFries.current[i].innerHTML = food.potatoFries;
	}

	for (var i = 0; i < foodNodes.potatoFries.cost.length; i++) {
		foodNodes.potatoFries.cost[i].innerHTML = calcFoodCost('potatoFries');
	}

	for (var i = 0; i < foodNodes.potatoFries.value.length; i++) {
		foodNodes.potatoFries.value[i].innerHTML = calcFoodValue('potatoFries');
	}

	for (var i = 0; i < foodNodes.crackers.current.length; i++) {
        foodNodes.crackers.current[i].innerHTML = food.crackers;
	}

	for (var i = 0; i < foodNodes.crackers.cost.length; i++) {
		foodNodes.crackers.cost[i].innerHTML = calcFoodCost('crackers');
	}

	for (var i = 0; i < foodNodes.crackers.value.length; i++) {
		foodNodes.crackers.value[i].innerHTML = calcFoodValue('crackers');
	}

////// UPDATES STORAGE-------------------------------
	// --INGREDIENTS-------//
	for (var i = 0; i < ingredientStorageNodes.potatoes.current.length; i++) {
		ingredientStorageNodes.potatoes.current[i].innerHTML = ingredientStorage.potatoes;
	}

	for (var i = 0; i < ingredientStorageNodes.potatoes.cost.length; i++) {
		ingredientStorageNodes.potatoes.cost[i].innerHTML = calcStorageCost('potatoesStorage');
	}

	for (var i = 0; i < ingredientStorageNodes.flour.current.length; i++) {
		ingredientStorageNodes.flour.current[i].innerHTML = ingredientStorage.flour;
	}

	for (var i = 0; i < ingredientStorageNodes.flour.cost.length; i++) {
		ingredientStorageNodes.flour.cost[i].innerHTML = calcStorageCost('flourStorage');
	}

	// --FOOD-------//
	for (var i = 0; i < foodStorageNodes.potatoFries.current.length; i++) {
		foodStorageNodes.potatoFries.current[i].innerHTML = foodStorage.potatoFries;
	}

	for (var i = 0; i < foodStorageNodes.potatoFries.cost.length; i++) {
		foodStorageNodes.potatoFries.cost[i].innerHTML = calcStorageCost('potatoFriesStorage');
	}

	for (var i = 0; i < foodStorageNodes.crackers.current.length; i++) {
		foodStorageNodes.crackers.current[i].innerHTML = foodStorage.crackers;
	}

	for (var i = 0; i < foodStorageNodes.crackers.cost.length; i++) {
		foodStorageNodes.crackers.cost[i].innerHTML = calcStorageCost('crackersStorage');
	}

////// UNFOLDING FEATURE-------------------------------
	if (stats.potatoes >= 0) {
		var showStorageNodes = document.getElementsByClassName('showStorage');
		for(var i = 0; i < showStorageNodes.length; i++) {
			showStorageNodes[i].style.display = "block";
			}
		}

	if (stats.potatoes >= 0) {
		var showPotatoesNodes = document.getElementsByClassName('showPotatoes');
		for(var i = 0; i < showPotatoesNodes.length; i++) {
			showPotatoesNodes[i].style.display = "block";
			}
		}

	if (stats.potatoes >= 10) {
		var showPotatoFriesNodes = document.getElementsByClassName('showPotatoFries');
		for(var i = 0; i < showPotatoFriesNodes.length; i++) {
			showPotatoFriesNodes[i].style.display = "block";
			}
		}

	if (stats.potatoFries >= 10) {
		var showFlourNodes = document.getElementsByClassName('showFlour');
		for(var i = 0; i < showFlourNodes.length; i++) {
			showFlourNodes[i].style.display = "block";
			}
		}

	if (stats.flour >= 10) {
		var showCrackersNodes = document.getElementsByClassName('showCrackers');
		for(var i = 0; i < showCrackersNodes.length; i++) {
			showCrackersNodes[i].style.display = "block";
			}
		}

////// UPDATES STATS-------------------------------
	statsNode.goodwill.innerHTML = stats.goodwill;
    statsNode.ffmoney.innerHTML = stats.ffmoney;
	statsNode.potatoes.innerHTML = stats.potatoes;
    statsNode.potatoFries.innerHTML = stats.potatoFries;
	statsNode.flour.innerHTML = stats.flour;
    statsNode.crackers.innerHTML = stats.crackers;

}

/////BUY-COOK/////BUY-COOK/////BUY-COOK/////////////////////////////////////////////////////////
/////BUY-COOK/////BUY-COOK/////BUY-COOK/////////////////////////////////////////////////////////

function buyIngredient(ingredientAmount, purchaseCount, ingredientName) {
    for (var i = 0; i < purchaseCount; i++) {
        var cost = calcIngredientCost(ingredientName);
        if (cost <= ffmoney && ingredient[ingredientName] < ingredientStorage[ingredientName]) {
            ingredientAmount++;
            ffmoney -= cost;
            stats[ingredientName]++;
        } else {
            break;
        }
    }
    return ingredientAmount;
}

function calcIngredientCost(name) {
    switch(name) {
        case 'potatoes':
            if (ingredient.potatoes < 50) {
                return 1;
            } else {
                return Math.round( Math.pow(ingredient.potatoes, 1.1));
            }
        case 'flour':
            return 2;
        default:
            throw new Error(`Unknown ingredient ${name}`);
    }
}

function cookFood(foodAmount, ingredientAmount, purchaseCount, foodName) {
    for (var i = 0; i < purchaseCount; i++) {
        var cost = calcFoodCost(foodName);
        if (cost <= ingredientAmount && food[foodName] < foodStorage[foodName]) {
            foodAmount++;
            ingredientAmount -= cost;
            stats[foodName]++;
        } else {
            break;
        }
    }
	return {foodAmount: foodAmount, ingredientAmount: ingredientAmount};
}

function calcFoodCost(name) {
    switch(name) {
        case 'potatoFries':
            if (food.potatoFries < 50) {
                return 2;
            } else {
                return Math.round( Math.pow(food.potatoFries, 1.1));
            }
        case 'crackers':
            return 1;
        default:
            throw new Error(`Unknown ingredient ${name}`);
    }
}

/////SELL/////SELL/////SELL////////////////////////////////////////////////////////////////////
/////SELL/////SELL/////SELL////////////////////////////////////////////////////////////////////

function sellFood(foodAmount, sellCount, foodName) {
    for (var i = 0; i < sellCount; i++) {
        var value = calcFoodValue(foodName);
        if (sellCount <= foodAmount) {
            ffmoney += value;
			stats.ffmoney += value;
			foodAmount -= sellCount;
        } else {
            break;
        }
    }
	return foodAmount;
}

function calcFoodValue(name) {
    switch(name) {
        case 'potatoFries':
            if (food.potatoFries < 50) {
				let num = 3 * (1 + (stats.goodwill)/10);
			  	return Math.round(num);
            } else {
                return Math.round( Math.pow(food.potatoFries, 1.1));
            }
        case 'crackers':
			if (food.crackers < 50) {
				let num = 3 * (1 + (stats.goodwill)/10);
				return Math.round(num);
			} else {
				return Math.round( Math.pow(food.crackers, 1.1));
			}
        default:
            throw new Error(`Unknown ingredient ${name}`);
    }
}

/////STORAGE/////STORAGE/////STORAGE////////////////////////////////////////////////////////////
/////STORAGE/////STORAGE/////STORAGE////////////////////////////////////////////////////////////

function buyStorage(storageAmount, purchaseCount, storageName) {
    for (var i = 0; i < purchaseCount; i++) {
        var cost = calcStorageCost(storageName);
        if (cost <= ffmoney) {
            storageAmount += 10;
            ffmoney -= cost;
			console.log('MARK ' + storageName + ':', `FF Money: ${ffmoney}, ${storageName} Cost: ${cost}`);

        } else {
            break;
        }
    }
    return storageAmount;
}

function calcStorageCost(name) {
    switch(name) {
        case 'potatoesStorage':
            return ingredientStorage.potatoes * 2;
        case 'flourStorage':
            return ingredientStorage.flour * 2;
		case 'potatoFriesStorage':
            return foodStorage.potatoFries * 2;
        case 'crackersStorage':
            return foodStorage.crackers * 2;
        default:
            throw new Error(`Unknown ingredient ${name}`);
    }
}

/////ENDGAME/////ENDGAME/////ENDGAME////////////////////////////////////////////////////////////

function toggleFreedomModal() {
		var modal = document.getElementById("freedomModal");
		var modalSpan = document.getElementsByClassName("close")[2];
		if (ffmoney >= 100) {
			modal.style.display = "block";
		modalSpan.onclick = function() {
			modal.style.display = "none";
			}
		window.onclick = function(event) {
			if (event.target == modal) {
		    	modal.style.display = "none";
			  }
			}
		alert(' Thank you for playing!!! \n Please give me feedback <3');
		} else {
			console.error('Freedom Error');
		}
}

/*
function decimals(n, d) {
 if ((typeof n !== 'number') || (typeof d !== 'number'))
   return false;
    	n = parseFloat(n) || 0;
	return n.toFixed(d);
	}
	*/



//---------------------------------------------------------------

function openBarTab(evt, barTabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(barTabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



//-----------------------------------------------
function save() {
	var saveobject = {
		ffmoney: ffmoney,
		ingredient: JSON.parse(JSON.stringify(ingredient)),
        food: JSON.parse(JSON.stringify(food)),
		ingredientStorage: JSON.parse(JSON.stringify(ingredientStorage)),
        foodStorage: JSON.parse(JSON.stringify(foodStorage)),
		stats: JSON.parse(JSON.stringify(stats)),
	};
	try {
		localStorage.setItem(SAVE_NAME, JSON.stringify( saveobject ));
    console.log('Saved', `Goodwill: ${stats.goodwill}, FF Money: ${ffmoney}, Potatoes: ${ingredient.potatoes}, Flour: ${ingredient.flour}`);
    setMessage('Food Fare Saved!');
	} catch(e) {
		console.error('Save Error:', e);
	}
}

function load() {
	try {
		var obj = localStorage.getItem(SAVE_NAME);
		obj = obj ? JSON.parse(obj) : {
			ffmoney: 10,
			ingredient: JSON.parse(JSON.stringify(defaultIngredient)),
			food: JSON.parse(JSON.stringify(defaultFood)),
			ingredientStorage: JSON.parse(JSON.stringify(defaultIngredientStorage)),
			foodStorage: JSON.parse(JSON.stringify(defaultFoodStorage)),
			stats: JSON.parse(JSON.stringify(defaultStats)),
		};

		ffmoney = obj.ffmoney;
		ingredient = JSON.parse(JSON.stringify(obj.ingredient));
		food = JSON.parse(JSON.stringify(obj.food));
		ingredientStorage = JSON.parse(JSON.stringify(obj.ingredientStorage));
		foodStorage = JSON.parse(JSON.stringify(obj.foodStorage));
		stats = JSON.parse(JSON.stringify(obj.stats));

    	console.log('Loaded saved game from localStorage', `Goodwill: ${stats.goodwill}, FF Money: ${ffmoney}, Potatoes: ${ingredient.potatoes}, Flour: ${ingredient.flour}`);
    	setMessage('Food Fare Loaded!');
		updateDisplay();
	} catch(e) {
		console.error('Load Error:', e);
	}
}

function reset() {
	ffmoney = 10;
	ingredient = JSON.parse(JSON.stringify(defaultIngredient));
	food = JSON.parse(JSON.stringify(defaultFood));
	ingredientStorage = JSON.parse(JSON.stringify(defaultIngredientStorage));
	foodStorage = JSON.parse(JSON.stringify(defaultFoodStorage));
	stats = JSON.parse(JSON.stringify(defaultStats));

	setMessage('Food Fare save file reset!');
	updateDisplay();
}

function deleteSave() {
	var response = confirm('Are you sure you want to delete your save?');

	if (response) {
		reset();
		localStorage.removeItem(SAVE_NAME);
		setMessage('Food Fare save file deleted!');
	}
}

//Messages
var messageNode = document.getElementById('message');
var messageTimeoutId;

function setMessage(msg, ms = 5000) {
    messageNode.innerHTML = msg;

    clearTimeout(messageTimeoutId);
    messageTimeoutId = setTimeout(clearMessage, ms);
}

function clearMessage() {
    messageNode.innerHTML = "";
}

/////OPTIONS/////OPTIONS/////OPTIONS/////////////////////////////////////////////////////////
/////OPTIONS/////OPTIONS/////OPTIONS/////////////////////////////////////////////////////////

function toggleOptionsModal() {
	var modal = document.getElementById("optionsModal");
	var modalSpan = document.getElementsByClassName("close")[0];
		modal.style.display = "block";
	modalSpan.onclick = function() {
		modal.style.display = "none";
		}
	window.onclick = function(event) {
		if (event.target == modal) {
	    	modal.style.display = "none";
	  }
	}
}

function toggleTutorialModal() {
	var modal = document.getElementById("tutorialModal");
	var modalSpan = document.getElementsByClassName("close")[1];
		modal.style.display = "block";
	modalSpan.onclick = function() {
		modal.style.display = "none";
		}
	window.onclick = function(event) {
		if (event.target == modal) {
	    	modal.style.display = "none";
	  }
	}
}



//run the cursors
setInterval(function() {
	console.log(ffmoney, ingredient.potatoes, ingredient.flour)
	updateDisplay();

}, 1000);

	//cookieClick(cursors * (1 + upgrades));
