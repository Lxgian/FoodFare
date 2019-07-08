// SAVE CONSTANT
var SAVE_NAME = 'foodCount.foodfare';
//var SAVE_VERSION = 'foodCount.foodfare.version';
var version = 20190708;

const defaultStats = {
	goodwill: 0,
	ffmoney: 40,
	potatoes: 0,
	flour: 0,
	milk: 0,

	potatoFries: 0,
	cheese: 0,
	bread: 0,
	cheesyfries: 0,
	cheesypotatorolls: 0,
}

// GAMEPLAY VARIABLES
const defaultCurrency = {
	ffmoney: 40,
}

const defaultIngredient = {
	potatoes: 0,
	milk: 0,
	flour: 0,
}

const defaultFood = {
	potatoFries: 0,
	cheese: 0,
	bread: 0,
	cheesyfries: 0,
	cheesypotatorolls: 0,
}
// STORAGE VARIABLES
const defaultIngredientStorage = {
	potatoes: 10,
	milk: 10,
	flour: 10,
}

const defaultFoodStorage = {
	potatoFries: 10,
	cheese: 10,
	bread: 10,
	cheesyfries: 10,
	cheesypotatorolls: 10,
}

var currency = JSON.parse(JSON.stringify(defaultCurrency));
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
		milk: document.getElementById('stat_milk'),
		flour: document.getElementById('stat_flour'),

		potatoFries: document.getElementById('stat_potatoFries'),
		cheese: document.getElementById('stat_cheese'),
		bread: document.getElementById('stat_bread'),
		cheesyfries: document.getElementById('stat_cheesyfries'),
		cheesypotatorolls: document.getElementById('stat_cheesypotatorolls'),
}

// DISPLAY VARIABLES -- ITEMS-COSTS-VALUES
//var ffmoneyNode = document.getElementById('ffmoney');

var currencyNodes = {
	    ffmoney: document.getElementsByClassName('ffmoney'),
};

var ingredientNodes = {
	    potatoes: {
	        current: document.getElementsByClassName('potatoes'),
	        cost: document.getElementsByClassName('potatoCost'),
		},
		milk: {
		   current: document.getElementsByClassName('milk'),
		   cost: document.getElementsByClassName('milkCost'),
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
		cheese: {
	        current: document.getElementsByClassName('cheese'),
	        cost: document.getElementsByClassName('cheeseCost'),
	        value: document.getElementsByClassName('cheeseValue'),
	    },
		bread: {
	        current: document.getElementsByClassName('bread'),
	        cost: {
				milk: document.getElementsByClassName('breadCost-milk'),
				flour: document.getElementsByClassName('breadCost-flour'),
			},
	        value: document.getElementsByClassName('breadValue'),
	    },
		cheesyfries: {
	        current: document.getElementsByClassName('cheesyfries'),
	        cost: {
				fries: document.getElementsByClassName('cheesyfriesCost-fries'),
				cheese: document.getElementsByClassName('cheesyfriesCost-cheese'),
			},
	        value: document.getElementsByClassName('cheesyfriesValue'),
	    },
		cheesypotatorolls: {
	        current: document.getElementsByClassName('cheesypotatorolls'),
	        cost: {
				potatoes: document.getElementsByClassName('cheesypotatorollsCost-potatoes'),
				cheese: document.getElementsByClassName('cheesypotatorollsCost-cheese'),
				bread: document.getElementsByClassName('cheesypotatorollsCost-bread'),
			},
	        value: document.getElementsByClassName('cheesypotatorollsValue'),
	    },
};

// DISPLAY VARIABLES -- STORAGE
var ingredientStorageNodes = {
	    potatoes: {
	        current: document.getElementsByClassName('potatoesStorage'),
	        cost: document.getElementsByClassName('potatoesStorageCost'),
	    },
		milk: {
 		   current: document.getElementsByClassName('milkStorage'),
 		   cost: document.getElementsByClassName('milkStorageCost'),
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
		cheese: {
	        current: document.getElementsByClassName('cheeseStorage'),
	        cost: document.getElementsByClassName('cheeseStorageCost'),
	    },
		bread: {
	        current: document.getElementsByClassName('breadStorage'),
	        cost: document.getElementsByClassName('breadStorageCost'),
	    },
		cheesyfries: {
	        current: document.getElementsByClassName('cheesyfriesStorage'),
	        cost: document.getElementsByClassName('cheesyfriesStorageCost'),
	    },
		cheesypotatorolls: {
	        current: document.getElementsByClassName('cheesypotatorollsStorage'),
	        cost: document.getElementsByClassName('cheesypotatorollsStorageCost'),
	    },
};
//-----------------------------------------------------------------------------------------------

// UPDATES ITEMS-COSTS-VALUES
function updateDisplay() {
//	ffmoneyNode.innerHTML = ffmoney;

	// --CURRENCY-------//
	for (var i = 0; i < currencyNodes.ffmoney.length; i++) {
		currencyNodes.ffmoney[i].innerHTML = currency.ffmoney;
	}

	// --INGREDIENTS-------//
	for (var i = 0; i < ingredientNodes.potatoes.current.length; i++) {
	    ingredientNodes.potatoes.current[i].innerHTML = ingredient.potatoes;
	}

	for (var i = 0; i < ingredientNodes.potatoes.cost.length; i++) {
		ingredientNodes.potatoes.cost[i].innerHTML = calcIngredientCost('potatoes');
	}

	for (var i = 0; i < ingredientNodes.milk.current.length; i++) {
		ingredientNodes.milk.current[i].innerHTML = ingredient.milk;
	}

	for (var i = 0; i < ingredientNodes.milk.cost.length; i++) {
		ingredientNodes.milk.cost[i].innerHTML = calcIngredientCost('milk');
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
		foodNodes.potatoFries.cost[i].innerHTML = calcFoodCost1('potatoFries');
	}

	for (var i = 0; i < foodNodes.potatoFries.value.length; i++) {
		foodNodes.potatoFries.value[i].innerHTML = calcFoodValue('potatoFries');
	}

	for (var i = 0; i < foodNodes.cheese.current.length; i++) {
        foodNodes.cheese.current[i].innerHTML = food.cheese;
	}

	for (var i = 0; i < foodNodes.cheese.cost.length; i++) {
		foodNodes.cheese.cost[i].innerHTML = calcFoodCost1('cheese');
	}

	for (var i = 0; i < foodNodes.cheese.value.length; i++) {
		foodNodes.cheese.value[i].innerHTML = calcFoodValue('cheese');
	}

	for (var i = 0; i < foodNodes.bread.current.length; i++) {
        foodNodes.bread.current[i].innerHTML = food.bread;
	}

			for (var i = 0; i < foodNodes.bread.cost.milk.length; i++) {
				foodNodes.bread.cost.milk[i].innerHTML = calcFoodCost1('bread');
			}

			for (var i = 0; i < foodNodes.bread.cost.flour.length; i++) {
				foodNodes.bread.cost.flour[i].innerHTML = calcFoodCost2('bread');
			}

			for (var i = 0; i < foodNodes.bread.value.length; i++) {
				foodNodes.bread.value[i].innerHTML = calcFoodValue('bread');
			}

	for (var i = 0; i < foodNodes.cheesyfries.current.length; i++) {
        foodNodes.cheesyfries.current[i].innerHTML = food.cheesyfries;
	}

			for (var i = 0; i < foodNodes.cheesyfries.cost.fries.length; i++) {
				foodNodes.cheesyfries.cost.fries[i].innerHTML = calcFoodCost1('cheesyfries');
			}

			for (var i = 0; i < foodNodes.cheesyfries.cost.cheese.length; i++) {
				foodNodes.cheesyfries.cost.cheese[i].innerHTML = calcFoodCost2('cheesyfries');
			}

			for (var i = 0; i < foodNodes.cheesyfries.value.length; i++) {
				foodNodes.cheesyfries.value[i].innerHTML = calcFoodValue('cheesyfries');
			}

	for (var i = 0; i < foodNodes.cheesypotatorolls.current.length; i++) {
        foodNodes.cheesypotatorolls.current[i].innerHTML = food.cheesypotatorolls;
	}

			for (var i = 0; i < foodNodes.cheesypotatorolls.cost.potatoes.length; i++) {
				foodNodes.cheesypotatorolls.cost.potatoes[i].innerHTML = calcFoodCost1('cheesypotatorolls');
			}

			for (var i = 0; i < foodNodes.cheesypotatorolls.cost.cheese.length; i++) {
				foodNodes.cheesypotatorolls.cost.cheese[i].innerHTML = calcFoodCost2('cheesypotatorolls');
			}

			for (var i = 0; i < foodNodes.cheesypotatorolls.cost.bread.length; i++) {
				foodNodes.cheesypotatorolls.cost.bread[i].innerHTML = calcFoodCost3('cheesypotatorolls');
			}

			for (var i = 0; i < foodNodes.cheesypotatorolls.value.length; i++) {
				foodNodes.cheesypotatorolls.value[i].innerHTML = calcFoodValue('cheesypotatorolls');
			}

////// UPDATES STORAGE-------------------------------
	// --INGREDIENTS-------//
	for (var i = 0; i < ingredientStorageNodes.potatoes.current.length; i++) {
		ingredientStorageNodes.potatoes.current[i].innerHTML = ingredientStorage.potatoes;
	}

	for (var i = 0; i < ingredientStorageNodes.potatoes.cost.length; i++) {
		ingredientStorageNodes.potatoes.cost[i].innerHTML = calcStorageCost('potatoesStorage');
	}

	for (var i = 0; i < ingredientStorageNodes.milk.current.length; i++) {
		ingredientStorageNodes.milk.current[i].innerHTML = ingredientStorage.milk;
	}

	for (var i = 0; i < ingredientStorageNodes.milk.cost.length; i++) {
		ingredientStorageNodes.milk.cost[i].innerHTML = calcStorageCost('milkStorage');
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

	for (var i = 0; i < foodStorageNodes.cheese.current.length; i++) {
		foodStorageNodes.cheese.current[i].innerHTML = foodStorage.cheese;
	}

	for (var i = 0; i < foodStorageNodes.cheese.cost.length; i++) {
		foodStorageNodes.cheese.cost[i].innerHTML = calcStorageCost('cheeseStorage');
	}

	for (var i = 0; i < foodStorageNodes.bread.current.length; i++) {
		foodStorageNodes.bread.current[i].innerHTML = foodStorage.bread;
	}

	for (var i = 0; i < foodStorageNodes.bread.cost.length; i++) {
		foodStorageNodes.bread.cost[i].innerHTML = calcStorageCost('breadStorage');
	}

	for (var i = 0; i < foodStorageNodes.cheesyfries.current.length; i++) {
		foodStorageNodes.cheesyfries.current[i].innerHTML = foodStorage.cheesyfries;
	}

	for (var i = 0; i < foodStorageNodes.cheesyfries.cost.length; i++) {
		foodStorageNodes.cheesyfries.cost[i].innerHTML = calcStorageCost('cheesyfriesStorage');
	}

	for (var i = 0; i < foodStorageNodes.cheesypotatorolls.current.length; i++) {
		foodStorageNodes.cheesypotatorolls.current[i].innerHTML = foodStorage.cheesypotatorolls;
	}

	for (var i = 0; i < foodStorageNodes.cheesypotatorolls.cost.length; i++) {
		foodStorageNodes.cheesypotatorolls.cost[i].innerHTML = calcStorageCost('cheesypotatorollsStorage');
	}

////// UNFOLDING FEATURE-------------------------------
	if (stats.bread >= 10) {
		var showStorageNodes = document.getElementsByClassName('showStorage');
		for(var i = 0; i < showStorageNodes.length; i++) {
			showStorageNodes[i].style.display = "block";
			}
		}

	if (stats.goodwill >= 0) {
		var showPotatoesNodes = document.getElementsByClassName('showPotatoes');
		for(var i = 0; i < showPotatoesNodes.length; i++) {
			showPotatoesNodes[i].style.display = "block";
			}
		}

	if (stats.potatoes >= 10) {
		var showMilkNodes = document.getElementsByClassName('showMilk');
		for(var i = 0; i < showMilkNodes.length; i++) {
			showMilkNodes[i].style.display = "block";
			}
		}

	if (stats.milk >= 10) {
		var showFlourNodes = document.getElementsByClassName('showFlour');
		for(var i = 0; i < showFlourNodes.length; i++) {
			showFlourNodes[i].style.display = "block";
			}
		}

	if (stats.flour >= 10) {
		var showPotatoFriesNodes = document.getElementsByClassName('showPotatoFries');
		for(var i = 0; i < showPotatoFriesNodes.length; i++) {
			showPotatoFriesNodes[i].style.display = "block";
			}
		}

	if (stats.potatoFries >= 10) {
		var showCheeseNodes = document.getElementsByClassName('showCheese');
		for(var i = 0; i < showMilkNodes.length; i++) {
			showCheeseNodes[i].style.display = "block";
			}
		}

	if (stats.cheese >= 10) {
		var showBreadNodes = document.getElementsByClassName('showBread');
		for(var i = 0; i < showBreadNodes.length; i++) {
			showBreadNodes[i].style.display = "block";
			}
		}

	if (stats.bread >= 10) {
		var showCheesyfriesNodes = document.getElementsByClassName('showCheesyfries');
		for(var i = 0; i < showCheesyfriesNodes.length; i++) {
			showCheesyfriesNodes[i].style.display = "block";
			}
		}

	if (stats.cheesyfries >= 10) {
		var showCheesypotatorollsNodes = document.getElementsByClassName('showCheesypotatorolls');
		for(var i = 0; i < showCheesypotatorollsNodes.length; i++) {
			showCheesypotatorollsNodes[i].style.display = "block";
			}
		}

////// UPDATES STATS-------------------------------
	statsNode.goodwill.innerHTML = stats.goodwill;
	statsNode.ffmoney.innerHTML = stats.ffmoney;

	statsNode.potatoes.innerHTML = stats.potatoes;
	statsNode.milk.innerHTML = stats.milk;
	statsNode.flour.innerHTML = stats.flour;

	statsNode.potatoFries.innerHTML = stats.potatoFries;
	statsNode.cheese.innerHTML = stats.cheese;
	statsNode.bread.innerHTML = stats.bread;
	statsNode.cheesyfries.innerHTML = stats.cheesyfries;
	statsNode.cheesypotatorolls.innerHTML = stats.cheesypotatorolls;


}

/////BUY-COOK/////BUY-COOK/////BUY-COOK/////////////////////////////////////////////////////////
/////BUY-COOK/////BUY-COOK/////BUY-COOK/////////////////////////////////////////////////////////

function buyIngredient(ingredientAmount, purchaseCount, ingredientName) {
    for (var i = 0; i < purchaseCount; i++) {
        var cost = calcIngredientCost(ingredientName);
        if (cost <= currency.ffmoney && ingredient[ingredientName] < ingredientStorage[ingredientName]) {
            ingredientAmount++;
            currency.ffmoney -= cost;
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
		case 'milk':
			return 1;
		case 'flour':
            return 2;
        default:
            throw new Error(`Unknown ingredient ${name}`);
    }
}

function cookFood1(foodAmount, ingredientAmount, purchaseCount, foodName) {
    for (var i = 0; i < purchaseCount; i++) {
        var cost = calcFoodCost1(foodName);
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

function cookFood2(foodAmount, rawAmount1, rawAmount2, purchaseCount, foodName) {
    for (var i = 0; i < purchaseCount; i++) {
        var cost1 = calcFoodCost1(foodName);
		var cost2 = calcFoodCost2(foodName);
        if (cost1 <= rawAmount1 &&
			cost2 <= rawAmount2 &&
			food[foodName] < foodStorage[foodName]) {

	            foodAmount++;
	            rawAmount1 -= cost1;
				rawAmount2 -= cost2;
	            stats[foodName]++;
        } else {
            break;
        }
    }
	return {foodAmount: foodAmount, rawAmount1: rawAmount1, rawAmount2: rawAmount2};
}

function cookFood3(foodAmount, rawAmount1, rawAmount2, rawAmount3, purchaseCount, foodName) {
    for (var i = 0; i < purchaseCount; i++) {
        var cost1 = calcFoodCost1(foodName);
		var cost2 = calcFoodCost2(foodName);
		var cost3 = calcFoodCost3(foodName);
        if (cost1 <= rawAmount1 &&
			cost2 <= rawAmount2 &&
			cost3 <= rawAmount3 &&
			food[foodName] < foodStorage[foodName]) {

	            foodAmount++;
	            rawAmount1 -= cost1;
				rawAmount2 -= cost2;
				rawAmount3 -= cost3;
	            stats[foodName]++;
        } else {
            break;
        }
    }
	console.log('cookFood3 excecuted', `FF Money: ${currency.ffmoney}, Potatoes: ${ingredient.potatoes}, Cheese: ${food.cheese}, Bread: ${food.bread}`);
	return {foodAmount: foodAmount, rawAmount1: rawAmount1, rawAmount2: rawAmount2, rawAmount3: rawAmount3};
}

function calcFoodCost1(name) {
    switch(name) {
        case 'potatoFries':
            if (food.potatoFries < 50) {
                return 2;
            } else {
                return Math.round( Math.pow(food.potatoFries, 1.1));
            }
		case 'cheese':
            return 2;
        case 'bread':
            return 1;
		case 'cheesyfries':
            return 2;
		case 'cheesypotatorolls':
            return 2;
        default:
            throw new Error(`Unknown ingredient 1 ${name}`);
    }
}

function calcFoodCost2(name) {
    switch(name) {
        case 'bread':
            return 1;
		case 'cheesyfries':
            return 2;
		case 'cheesypotatorolls':
            return 2;
        default:
            throw new Error(`Unknown ingredient 2 ${name}`);
    }
}

function calcFoodCost3(name) {
    switch(name) {
		case 'cheesypotatorolls':
            return 2;
        default:
            throw new Error(`Unknown ingredient 3 ${name}`);
    }
}

/////SELL/////SELL/////SELL////////////////////////////////////////////////////////////////////
/////SELL/////SELL/////SELL////////////////////////////////////////////////////////////////////

function sellFood(foodAmount, sellCount, foodName) {
    for (var i = 0; i < sellCount; i++) {
        var value = calcFoodValue(foodName);
        if (sellCount <= foodAmount) {
            currency.ffmoney += value;
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
                return Math.round( Math.pow(food.potatoFries, 1.1)); // if >50, value = 50+ --- for being able to stock up
            }
		case 'cheese':
			if (food.cheese < 50) {
				let num = 3 * (1 + (stats.goodwill)/10);
				return Math.round(num);
			} else {
				return Math.round( Math.pow(food.cheese, 1.1));
			}
        case 'bread':
			if (food.bread < 50) {
				let num = 5 * (1 + (stats.goodwill)/10);
				return Math.round(num);
			} else {
				return Math.round( Math.pow(food.bread, 1.1));
			}
		case 'cheesyfries':
			if (food.cheesyfries < 50) {
				let num = 15 * (1 + (stats.goodwill)/10);
				return Math.round(num);
			} else {
				return Math.round( Math.pow(food.cheesyfries, 1.1));
			}
		case 'cheesypotatorolls':
			if (food.cheesypotatorolls < 50) {
				let num = 20 * (1 + (stats.goodwill)/10);
				return Math.round(num);
			} else {
				return Math.round( Math.pow(food.cheesypotatorolls, 1.1));
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
        if (cost <= currency.ffmoney) {
            storageAmount += 10;
            currency.ffmoney -= cost;
			console.log('MARK ' + storageName + ':', `FF Money: ${currency.ffmoney}, ${storageName} Cost: ${cost}`);

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
		case 'milkStorage':
            return ingredientStorage.milk * 2;
		case 'flourStorage':
            return ingredientStorage.flour * 2;

		case 'potatoFriesStorage':
            return foodStorage.potatoFries * 2;
		case 'cheeseStorage':
			return foodStorage.cheese * 2;
		case 'breadStorage':
            return foodStorage.bread * 2;
		case 'cheesyfriesStorage':
            return foodStorage.cheesyfries * 2;
		case 'cheesypotatorollsStorage':
            return foodStorage.cheesyfries * 2;
        default:
            throw new Error(`Unknown ingredient ${name}`);
    }
}

/////ENDGAME/////ENDGAME/////ENDGAME////////////////////////////////////////////////////////////

function toggleFreedomModal() {
		var modal = document.getElementById("freedomModal");
		var modalSpan = document.getElementsByClassName("close")[2];
		if (currency.ffmoney >= 300) {
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
/*	var saveVersion = {
		version: version,
		}
*/
	var saveobject = {
		version: version,
//		ffmoney: ffmoney,
		currency: JSON.parse(JSON.stringify(currency)),
		ingredient: JSON.parse(JSON.stringify(ingredient)),
        food: JSON.parse(JSON.stringify(food)),
		ingredientStorage: JSON.parse(JSON.stringify(ingredientStorage)),
        foodStorage: JSON.parse(JSON.stringify(foodStorage)),
		stats: JSON.parse(JSON.stringify(stats)),
	};
	try {
		localStorage.setItem(SAVE_NAME, JSON.stringify( saveobject ));
//		localStorage.setItem(SAVE_VERSION, JSON.stringify( saveVersion ));
    console.log('Saved', `Version: ${version}, Goodwill: ${stats.goodwill}, FF Money: ${currency.ffmoney}, Potatoes: ${ingredient.potatoes}, Milk: ${ingredient.milk}, Flour: ${ingredient.flour}`);
    setMessage('Food Fare Saved!');
	} catch(e) {
		console.error('Save Error:', e);
	}
}

function load() {
	try {
		var obj = localStorage.getItem(SAVE_NAME);
//		var saveObj = localStorage.getItem(SAVE_VERSION);

		obj = obj ? JSON.parse(obj) : {
			version: 20190708,
//			ffmoney: 10,
			currency: JSON.parse(JSON.stringify(defaultCurrency)),
			ingredient: JSON.parse(JSON.stringify(defaultIngredient)),
			food: JSON.parse(JSON.stringify(defaultFood)),
			ingredientStorage: JSON.parse(JSON.stringify(defaultIngredientStorage)),
			foodStorage: JSON.parse(JSON.stringify(defaultFoodStorage)),
			stats: JSON.parse(JSON.stringify(defaultStats)),
		};

//		ffmoney = obj.ffmoney;
		currency = JSON.parse(JSON.stringify(obj.currency));
		ingredient = JSON.parse(JSON.stringify(obj.ingredient));
		food = JSON.parse(JSON.stringify(obj.food));
		ingredientStorage = JSON.parse(JSON.stringify(obj.ingredientStorage));
		foodStorage = JSON.parse(JSON.stringify(obj.foodStorage));
		stats = JSON.parse(JSON.stringify(obj.stats));

		//--UPDATES----------------------------------
		//--UPDATES----------------------------------
/*
		saveObj = saveObj ? JSON.parse(saveObj) : {
			version: 20190708,
		};
		version = saveObj.version;
*/

		if (obj.version < 20190708) {
		 	ingredient.milk = defaultIngredient.milk;
			ingredientStorage.milk = defaultIngredientStorage.milk;
			stats.milk = defaultStats.milk;

			food.cheese = defaultFood.cheese;
			foodStorage.cheese = defaultFoodStorage.cheese;
			stats.cheese = defaultStats.cheese;

			food.bread = defaultFood.bread;
			foodStorage.bread = defaultFoodStorage.bread;
			stats.bread = defaultStats.bread;

			food.cheesyfries = defaultFood.cheesyfries;
			foodStorage.cheesyfries = defaultFoodStorage.cheesyfries;
			stats.cheesyfries = defaultStats.cheesyfries;

			food.cheesypotatorolls = defaultFood.cheesypotatorolls;
			foodStorage.cheesypotatorolls = defaultFoodStorage.cheesypotatorolls;
			stats.cheesypotatorolls = defaultStats.cheesypotatorolls;

		}

    	console.log('Loaded saved game from localStorage', `Version: ${version}, Goodwill: ${stats.goodwill}, FF Money: ${currency.ffmoney}, Potatoes: ${ingredient.potatoes}, Milk: ${ingredient.milk}, Flour: ${ingredient.flour}`);
    	setMessage('Food Fare Loaded!');
		updateDisplay();
	} catch(e) {
		console.error('Load Error:', e);
	}
}

function reset() {
//	ffmoney = 10;
	currency = JSON.parse(JSON.stringify(defaultCurrency));
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
	console.log(currency.ffmoney, ingredient.potatoes, ingredient.flour)
	updateDisplay();
}, 1000);

	//cookieClick(cursors * (1 + upgrades));
