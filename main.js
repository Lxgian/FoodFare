// SAVE CONSTANT
var SAVE_NAME = 'foodCount.foodfare';


// GAMEPLAY VARIABLES
var ffmoney = 10;
var potatoes = 0;
var potatoFries = 0;
var flour = 0;
var crackers = 0;

// STORAGE VARIABLES
var potatoesStorage = 10;
var potatoFriesStorage = 10;
var flourStorage = 10;
var crackersStorage = 10;


//----------------------------------------------------------------------------------------------

// DISPLAY VARIABLES -- ITEMS-COSTS-VALUES
var ffmoneyNode = document.getElementById('ffmoney');

var potatoNodes = document.getElementsByClassName('potatoes');
var potatoCostNodes = document.getElementsByClassName('potatoCost');
var potatoFriesNodes = document.getElementsByClassName('potatoFries');
var potatoFriesCostNodes = document.getElementsByClassName('potatoFriesCost');
var potatoFriesValueNodes = document.getElementsByClassName('potatoFriesValue');

var flourNodes = document.getElementsByClassName('flour');
var flourCostNodes = document.getElementsByClassName('flourCost');
var crackersNodes = document.getElementsByClassName('crackers');
var crackersCostNodes = document.getElementsByClassName('crackersCost');
var crackersValueNodes = document.getElementsByClassName('crackersValue');

// DISPLAY VARIABLES -- STORAGE
var potatoStorageNodes = document.getElementsByClassName('potatoesStorage');
var potatoStorageCostNodes = document.getElementsByClassName('potatoesStorageCost');
var potatoFriesStorageNodes = document.getElementsByClassName('potatoFriesStorage');
var potatoFriesStorageCostNodes = document.getElementsByClassName('potatoFriesStorageCost');

var flourStorageNodes = document.getElementsByClassName('flourStorage');
var flourStorageCostNodes = document.getElementsByClassName('flourStorageCost');
var crackersStorageNodes = document.getElementsByClassName('crackersStorage');
var crackersStorageCostNodes = document.getElementsByClassName('crackersStorageCost');
//-----------------------------------------------------------------------------------------------

// UPDATES ITEMS-COSTS-VALUES
function updateDisplay() {
		ffmoneyNode.innerHTML = ffmoney;

	for (var i = 0; i < potatoNodes.length; i++) {
		potatoNodes[i].innerHTML = potatoes;
		}

	for (var i = 0; i < potatoCostNodes.length; i++) {
		potatoCostNodes[i].innerHTML = calcIngredientCost('potatoes');
		}

	for (var i = 0; i < potatoFriesNodes.length; i++) {
        potatoFriesNodes[i].innerHTML = potatoFries;
    	}

	for (var i = 0; i < potatoFriesCostNodes.length; i++) {
		potatoFriesCostNodes[i].innerHTML = calcPotatoFriesCost(potatoFries);
		}

	for (var i = 0; i < potatoFriesValueNodes.length; i++) {
		potatoFriesValueNodes[i].innerHTML = calcPotatoFriesValue(stats.goodwill);
		}

	for (var i = 0; i < flourNodes.length; i++) {
		flourNodes[i].innerHTML = flour;
		}

	for (var i = 0; i < flourCostNodes.length; i++) {
		flourCostNodes[i].innerHTML = calcIngredientCost('flour');
		}

	for (var i = 0; i < crackersNodes.length; i++) {
        crackersNodes[i].innerHTML = crackers;
    	}

	for (var i = 0; i < crackersCostNodes.length; i++) {
		crackersCostNodes[i].innerHTML = calcCrackersCost(crackers);
		}

	for (var i = 0; i < crackersValueNodes.length; i++) {
		crackersValueNodes[i].innerHTML = calcCrackersValue(stats.goodwill);
		}


// UPDATES STORAGE-------------------------------

	for (var i = 0; i < potatoStorageNodes.length; i++) {
        potatoStorageNodes[i].innerHTML = potatoesStorage;
    	}

	for (var i = 0; i < potatoStorageCostNodes.length; i++) {
        potatoStorageCostNodes[i].innerHTML = calcPotatoStorageCost(potatoesStorage);
    	}

	for (var i = 0; i < potatoFriesStorageNodes.length; i++) {
        potatoFriesStorageNodes[i].innerHTML = potatoFriesStorage;
    	}

	for (var i = 0; i < potatoFriesStorageCostNodes.length; i++) {
        potatoFriesStorageCostNodes[i].innerHTML = calcPotatoFriesStorageCost(potatoFriesStorage);
    	}

	for (var i = 0; i < flourStorageNodes.length; i++) {
		flourStorageNodes[i].innerHTML = flourStorage;
		}

	for (var i = 0; i <flourStorageCostNodes.length; i++) {
		flourStorageCostNodes[i].innerHTML = calcFlourStorageCost(flourStorage);
		}

	for (var i = 0; i < crackersStorageNodes.length; i++) {
		crackersStorageNodes[i].innerHTML = crackersStorage;
		}

	for (var i = 0; i < crackersStorageCostNodes.length; i++) {
		crackersStorageCostNodes[i].innerHTML = calcCrackersStorageCost(crackersStorage);
		}

// UNFOLDING FEATURE-------------------------------
	if (stats.potatoes >= 0) {
		var showPotatoFriesNodes = document.getElementsByClassName('showPotatoFries');
		for(var i = 0; i < showPotatoFriesNodes.length; i++) {
			showPotatoFriesNodes[i].style.display = "block";
			}
		}

	if (stats.potatoFries >= 0) {
		var showFlourNodes = document.getElementsByClassName('showFlour');
		for(var i = 0; i < showFlourNodes.length; i++) {
			showFlourNodes[i].style.display = "block";
			}
		}

	if (stats.flour >= 0) {
		var showCrackersNodes = document.getElementsByClassName('showCrackers');
		for(var i = 0; i < showCrackersNodes.length; i++) {
			showCrackersNodes[i].style.display = "block";
			}
		}


// UPDATES STATS-------------------------------

	statsNode.goodwill.innerHTML = stats.goodwill;
    statsNode.ffmoney.innerHTML = stats.ffmoney;
	statsNode.potatoes.innerHTML = stats.potatoes;
    statsNode.potatoFries.innerHTML = stats.potatoFries;
	statsNode.flour.innerHTML = stats.flour;
    statsNode.crackers.innerHTML = stats.crackers;


}

// STATISTICS-----------------------------------------------------------------
const defaultStats = {
	goodwill: 0,
	ffmoney: 10,
	potatoes: 0,
	potatoFries: 0,
	flour: 0,
	crackers:0,
};

var stats = JSON.parse(JSON.stringify(defaultStats));

var statsNode = {
	goodwill: document.getElementById('stat_goodwill'),
	ffmoney: document.getElementById('stat_ffmoney'),
	potatoes: document.getElementById('stat_potatoes'),
	potatoFries: document.getElementById('stat_potatoFries'),
	flour: document.getElementById('stat_flour'),
	crackers: document.getElementById('stat_crackers')
}

//-----------------------------------------------------------------------------------------------

// POTATOES-------------------------------

///////////////////////////////////////////////////////////


function buyIngredients(ingredient, purchaseCount, storage, statName) {
    for (var i = 0; i < purchaseCount; i++) {
        var cost = calcIngredientCost(statName);
        if (cost <= ffmoney && ingredient < storage) {
            ingredient++;
            ffmoney -= cost;
            stats[statName]++;
        } else {
            break;
        }
    }
    return ingredient;
}


function calcIngredientCost(name) {
    switch(name) {
        case 'potatoes':
            if (potatoes < 50) {
                return 1;
            } else {
                return math.Round( math.Pow(potatoes, 1.1));
            }
        case 'flour':
            return 2;
        default:
            throw new Error(`Unknown ingredient ${name}`);
    }
}


/*
function calcPotatoCost(potatoCount) {
	return 1
}

function calcFlourCost(flourCount) {
	return 2
}
*/

function buyPotatoesStorage(count) {
	//buy this many PotatoesStorage
	for (var i = 0; i < count; i++) {
		var potatoesStorageCost = calcPotatoStorageCost(potatoesStorage);
		if (potatoesStorageCost <= ffmoney) {
			potatoesStorage += 10;
			ffmoney -= potatoesStorageCost;
			console.log('MARK Potato Storage--', `FF Money: ${ffmoney},Potato Storage: ${potatoesStorage}, Potato Storage Cost: ${potatoesStorageCost}`);
		} else {
			break;
		}
	}
	updateDisplay();
}

function calcPotatoStorageCost(potatoesStorageCount) {
	return potatoesStorageCount * 2;
}

// POTATO FRIES-------------------------------

function cookPotatoFries(count) {
	for (var i = 0; i < count; i++) {
		var potatoFriesCost = calcPotatoFriesCost(potatoFries);
		if ((potatoFriesCost <= potatoes) && (potatoFries < potatoFriesStorage)) {
			potatoFries++;
			stats.potatoFries++;
			potatoes -= potatoFriesCost;
			console.log('MARK 2', `Potatoes: ${potatoes}, Potato Fries: ${potatoFries},Potato Fries Cost: ${potatoFriesCost}`);
		} else {
			break;
		}
	}
	updateDisplay();
}


function calcPotatoFriesCost(potatoFriesCount) {
	return 2
}

function sellPotatoFries(count) {
	for (var i = 0; i < count; i++) {
		var potatoFriesValue = calcPotatoFriesValue(stats.goodwill)
		if (count <= potatoFries) {
			ffmoney += potatoFriesValue;
			stats.ffmoney += potatoFriesValue;
			potatoFries -= count;
		} else {
			break;
		}
	}
	updateDisplay();
}
// * (1 + (0.1 * (goodwill -1))) ;

function calcPotatoFriesValue(stats_goodwill) {
  var num = 3 * (1 + (stats_goodwill)/10);
	return Math.round(num);
}

function buyPotatoFriesStorage(count) {
	//buy this many PotatoesStorage
	for (var i = 0; i < count; i++) {
		var potatoFriesStorageCost = calcPotatoFriesStorageCost(potatoFriesStorage);
		if (potatoFriesStorageCost <= ffmoney) {
			potatoFriesStorage += 10;
			ffmoney -= potatoFriesStorageCost;
			console.log('MARK Potato Fries Storage--', `FF Money: ${ffmoney},Potato Fries Storage: ${potatoFriesStorage}, Potato Fries Storage Cost: ${potatoFriesStorageCost}`);
		} else {
			break;
		}
	}
	updateDisplay();
}

function calcPotatoFriesStorageCost(potatoFriesStorageCount) {
	return potatoFriesStorageCount * 2;
}

// FLOUR-------------------------------
/*
function buyFlour(count) {
	for (var i = 0; i < count; i++) {
		var flourCost = calcFlourCost(flour);
		if ((flourCost <= ffmoney) && (flour < flourStorage)) {
			flour++;
			stat_flour++;
			ffmoney -= flourCost;
		} else {
			break;
		}
	}
	updateDisplay();
}
*/
/*
function calcFlourCost(flourCount) {
	return 2
}
*/

function buyFlourStorage(count) {
	for (var i = 0; i < count; i++) {
		var flourStorageCost = calcFlourStorageCost(flourStorage);
		if (flourStorageCost <= ffmoney) {
			flourStorage += 10;
			ffmoney -= flourStorageCost;
			//-------
		} else {
			break;
		}
	}
	updateDisplay();
}

function calcFlourStorageCost(flourStorageCount) {
	return flourStorageCount * 2;
}

// CRACKERS-------------------------------

function cookCrackers(count) {
	for (var i = 0; i < count; i++) {
		var crackersCost = calcCrackersCost(crackers);
		if ((crackersCost <= flour) && (crackers < crackersStorage)) {
			crackers++;
			stats.crackers++;
			flour -= crackersCost;
			//-----------
		} else {
			break;
		}
	}
	updateDisplay();
}


function calcCrackersCost(crackersCount) {
	return 1
}

function sellCrackers(count) {
	for (var i = 0; i < count; i++) {
		var crackersValue = calcCrackersValue(stats.goodwill) // * (1 + (0.1 * (goodwill -1))) ;
		if (count <= crackers) {
			ffmoney += crackersValue;
			stats.ffmoney += crackersValue;
			crackers -= count;
		} else {
			break;
		}
	}
	updateDisplay();
}

function calcCrackersValue(stats_goodwill) {
  var num = 3 * (1 + (stats_goodwill)/10);
	return Math.round(num);
}

function buyCrackersStorage(count) {
	for (var i = 0; i < count; i++) {
		var crackersStorageCost = calcCrackersStorageCost(crackersStorage);
		if (crackersStorageCost <= ffmoney) {
			crackersStorage += 10;
			ffmoney -= crackersStorageCost;
			//----------------------
		} else {
			break;
		}
	}
	updateDisplay();
}

function calcCrackersStorageCost(crackersStorageCount) {
	return crackersStorageCount * 2;
}
//////////////////////////////////////////////////////////////////////////////////////






function buyFreedom() {
	if (ffmoney >= 200) {
			alert('I love you!!! \n  Now please give me feedback <3');
		} else {
			console.error('Freedom Error');
		}
	updateDisplay();
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
		potatoes: potatoes,
		potatoFries: potatoFries,
		flour: flour,
		crackers: crackers,

		potatoesStorage: potatoesStorage,
		potatoFriesStorage: potatoFriesStorage,
		flourStorage: flourStorage,
		crackersStorage: crackersStorage,

		stats: JSON.parse(JSON.stringify(stats)),
	};
	try {
		localStorage.setItem(SAVE_NAME, JSON.stringify( saveobject ));
    console.log('Saved', `Goodwill: ${stats.goodwill}, FF Money: ${ffmoney}, Potatoes: ${potatoes}, Flour: ${flour},
						Potato Storage: ${potatoesStorage}, Potato Fries Storage: ${potatoFriesStorage}, Flour Storage: ${flourStorage}, Crackers Storage: ${crackersStorage}`);
    setMessage('Food Fare Saved!');
	} catch(e) {
		console.error('Save Error:', e);
	}
}



function load() {
	try {
		var obj = localStorage.getItem(SAVE_NAME);
		obj = obj ? JSON.parse(obj) : {
			stats: JSON.parse(JSON.stringify(defaultStats)),
			ffmoney: 10,
			potatoes: 0,
			potatoFries: 0,
			flour: 0,
			crackers: 0,
			potatoesStorage: 10,
			potatoFriesStorage:10,
			flourStorage: 10,
			crackersStorage: 10
		};

		stats = JSON.parse(JSON.stringify(obj.stats));

		ffmoney = obj.ffmoney;
		potatoes = obj.potatoes;
		potatoFries = obj.potatoFries;
		flour = obj.flour;
		crackers = obj.crackers;

		potatoesStorage = obj.potatoesStorage;
		potatoFriesStorage = obj.potatoFriesStorage;
		flourStorage = obj.flourStorage;
		crackersStorage = obj.crackersStorage;

    	console.log('Loaded saved game from localStorage', `Goodwill: ${stats.goodwill}, FF Money: ${ffmoney}, Potatoes: ${potatoes}, Flour: ${flour},
														Potato Storage: ${potatoesStorage}, Potato Fries Storage: ${potatoFriesStorage}, Flour Storage: ${flourStorage}, Crackers Storage: ${crackersStorage}`);
    	setMessage('Food Fare Loaded!');
		updateDisplay();
	} catch(e) {
		console.error('Load Error:', e);
	}
}

function reset() {
	ffmoney = 10;
	potatoes = 0;
	potatoFries = 0;
	flour = 0;
	crackers = 0;

	potatoesStorage = 10;
	potatoFriesStorage = 10;
	flourStorage = 10;
	crackersStorage = 10;

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

// Options
function toggleOptions(){
	var optionsNode = document.getElementById('optionsWindow');
	if (optionsNode.style.display != 'block'){
		optionsNode.style.display = 'block';
	} else {
		optionsNode.style.display = 'none';
	}
}

function toggleTutorial(){
	var tutorialNode = document.getElementById('tutorialWindow');
	if (tutorialNode.style.display != 'block'){
		tutorialNode.style.display = 'block';
	} else {
		tutorialNode.style.display = 'none';
	}
}

//run the cursors
setInterval(function() {
	console.log(ffmoney, potatoes, flour)
//	updateDisplay();

}, 1000);

	//cookieClick(cursors * (1 + upgrades));
