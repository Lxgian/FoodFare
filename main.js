//constants
var SAVE_NAME = 'foodCount.foodfare';


// GAMEPLAY VARIABLES
var ffmoney = 10;
var potatoes = 0;
var potatoFries = 0;

// STORAGE VARIABLES
var potatoesStorage = 10;
var potatoFriesStorage = 10;
//----------------------------------------------------------------------------------------------

// DISPLAY VARIABLES -- ITEMS-COSTS-VALUES
var ffmoneyNode = document.getElementById('ffmoney');
var potatoNodes = document.getElementsByClassName('potatoes');
var potatoCostNodes = document.getElementsByClassName('potatoCost');
var potatoFriesNodes = document.getElementsByClassName('potatoFries');
var potatoFriesCostNodes = document.getElementsByClassName('potatoFriesCost');
var potatoFriesValueNodes = document.getElementsByClassName('potatoFriesValue');

// DISPLAY VARIABLES -- STORAGE
var potatoStorageNodes = document.getElementsByClassName('potatoesStorage');
var potatoStorageCostNodes = document.getElementsByClassName('potatoesStorageCost');
var potatoFriesStorageNodes = document.getElementsByClassName('potatoFriesStorage');
var potatoFriesStorageCostNodes = document.getElementsByClassName('potatoFriesStorageCost');
//-----------------------------------------------------------------------------------------------

// UPDATES ITEMS-COSTS-VALUES
function updateDisplay() {
		ffmoneyNode.innerHTML = ffmoney;

	//potatoNodes.innerHTML = potatoes;
	for (var i = 0; i < potatoNodes.length; i++) {
        potatoNodes[i].innerHTML = potatoes;
    }
	//potatoCostNodes.innerHTML = potatoCost;
	for (var i = 0; i < potatoCostNodes.length; i++) {
				potatoCostNodes[i].innerHTML = calcPotatoCost(potatoes);
		}

	//potatoFriesNodes.innerHTML = potatoFries;
	for (var i = 0; i < potatoFriesNodes.length; i++) {
        potatoFriesNodes[i].innerHTML = potatoFries;
    }
	//potatoFriesCostNodes.innerHTML = potatoFriesCost;
	for (var i = 0; i < potatoFriesCostNodes.length; i++) {
				potatoFriesCostNodes[i].innerHTML = calcPotatoFriesCost(potatoFries);
		}
	//potatoFriesValueNodes.innerHTML = potatoFriesValue;
	for (var i = 0; i < potatoFriesValueNodes.length; i++) {
				potatoFriesValueNodes[i].innerHTML = calcPotatoFriesValue(stat_goodwill);
		}

// UPDATES STORAGE-------------------------------

	//potatoStorageNodes.innerHTML = potatoesStorage;
	for (var i = 0; i < potatoStorageNodes.length; i++) {
        potatoStorageNodes[i].innerHTML = potatoesStorage;
    }

	//potatoStorageCostNodes.innerHTML = potatoesStorageCost;
	for (var i = 0; i < potatoStorageCostNodes.length; i++) {
        potatoStorageCostNodes[i].innerHTML = calcPotatoStorageCost(potatoesStorage);
    }

	//potatoFriesStorageNodes.innerHTML = potatoFriesStorage;
	for (var i = 0; i < potatoFriesStorageNodes.length; i++) {
        potatoFriesStorageNodes[i].innerHTML = potatoFriesStorage;
    }

	//potatoFriesStorageCostNodes.innerHTML = potatoFriesStorageCost;
	for (var i = 0; i < potatoFriesStorageCostNodes.length; i++) {
        potatoFriesStorageCostNodes[i].innerHTML = calcPotatoFriesStorageCost(potatoFriesStorage);
    }

	stat_goodwillNode.innerHTML = stat_goodwill;
	stat_ffmoneyNode.innerHTML = stat_ffmoney;
	stat_potatoesNode.innerHTML = stat_potatoes;
	stat_potatoFriesNode.innerHTML = stat_potatoFries;
}

//--STATISTICS-----------------------------------------------------------------
var stat_goodwill = 0;
var stat_ffmoney = 10;
var stat_potatoes = 0;
var stat_potatoFries = 0;

var stat_goodwillNode = document.getElementById('stat_goodwill');
var stat_ffmoneyNode = document.getElementById('stat_ffmoney');
var stat_potatoesNode = document.getElementById('stat_potatoes');
var stat_potatoFriesNode = document.getElementById('stat_potatoFries');


//-----------------------------------------------------------------------------------------------
/*function ffmoneyClick(clicks) {
	ffmoney += clicks;
	updateDisplay();
}*/
//////////////////////////////////////////////////////////////////////////////////////
function buyPotatoes(count) {
	//buy this many Potatoes
	for (var i = 0; i < count; i++) {
		var potatoCost = calcPotatoCost(potatoes);
		if ((potatoCost <= ffmoney) && (potatoes < potatoesStorage)) {
			potatoes++;
			stat_potatoes++;
			ffmoney -= potatoCost;
			console.log('MARK 1', `FF Money: ${ffmoney},Potatoes: ${potatoes}, Potato Cost: ${potatoCost}`);
		} else {
			break;
		}
	}
	updateDisplay();
}

function calcPotatoCost(potatoCount) {
	return 1
}

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
//////////////////////////////////////////////////////////////////////////////////////


function cookPotatoFries(count) {
	for (var i = 0; i < count; i++) {
		var potatoFriesCost = calcPotatoFriesCost(potatoFries);
		if ((potatoFriesCost <= potatoes) && (potatoFries < potatoFriesStorage)) {
			potatoFries++;
			stat_potatoFries++;
			potatoes -= potatoFriesCost;
			console.log('MARK 2', `Potatoes: ${potatoes}, Potato Fries: ${potatoFries},Potato Fries Cost: ${potatoFriesCost}`);
		} else {
			break;
		}
	}
	updateDisplay();
}

/*
function cookPotatoFries(count) {
	potatoFries += count;
	potatoes -= count * 2;
	console.log('MARK 2', `Potatoes: ${potatoes}, Potato Fries: ${potatoFries}`); //do this
	updateDisplay();
	}
*/

function calcPotatoFriesCost(potatoFriesCount) {
	return 2
}

function sellPotatoFries(count) {
	for (var i = 0; i < count; i++) {
		var potatoFriesValue = calcPotatoFriesValue(stat_goodwill) // * (1 + (0.1 * (goodwill -1))) ;
		if (count <= potatoFries) {
			ffmoney += potatoFriesValue;
			stat_ffmoney += potatoFriesValue;
			potatoFries -= count;
		} else {
			break;
		}
	}
	updateDisplay();
}

function calcPotatoFriesValue(stat_goodwill) {
  var num = 3 * (1 + (stat_goodwill)/10);
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
//////////////////////////////////////////////////////////////////////////////////////






function buyFreedom() {
	if (ffmoney >= 100) {
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

		potatoesStorage: potatoesStorage,
		potatoFriesStorage: potatoFriesStorage,

		stat_goodwill: stat_goodwill,
		stat_ffmoney: stat_ffmoney,
		stat_potatoes: stat_potatoes,
		stat_potatoFries: stat_potatoFries,


	};
	try {
		localStorage.setItem(SAVE_NAME, JSON.stringify( saveobject ));
    console.log('Saved', `Goodwill: ${stat_goodwill}, FF Money: ${ffmoney}, Potatoes: ${potatoes}, Potato Fries: ${potatoFries}, Potato Storage: ${potatoesStorage}, Potato Fries Storage: ${potatoFriesStorage}`);
    setMessage('Food Fare Saved!');
	} catch(e) {
		console.error('Save Error:', e);
	}
}

function load() {
	try {
		var obj = localStorage.getItem(SAVE_NAME);
		obj = obj ? JSON.parse(obj) : {stat_goodwill: 0, ffmoney: 10, potatoes: 0, potatoFries: 0, potatoesStorage: 10, potatoFriesStorage:10 };
		stat_goodwill = obj.stat_goodwill;
		ffmoney = obj.ffmoney;
		potatoes = obj.potatoes;
		potatoFries = obj.potatoFries;

		potatoesStorage = obj.potatoesStorage;
		potatoFriesStorage = obj.potatoFriesStorage;
    console.log('Loaded saved game from localStorage', `Goodwill: ${stat_goodwill}, FF Money: ${ffmoney}, Potatoes: ${potatoes}, Potato Fries: ${potatoFries}, Potato Storage: ${potatoesStorage}, Potato Fries Storage: ${potatoFriesStorage}`);
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

	potatoesStorage = 10;
	potatoFriesStorage = 10;

	stat_goodwill = 0;
	stat_ffmoney = 10;
	stat_potatoes = 0;
	stat_potatoFries = 0;

	updateDisplay();
}

function deleteSave() {
	var response = confirm('Are you sure you want to delete your save?');

	if (response) {
		reset();
		localStorage.removeItem(SAVE_NAME);
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
	//cookieClick(cursors * (1 + upgrades));
	console.log(ffmoney, potatoes)
	//console.log('MARK TICK', `FFMoney: ${ffmoney}, Potatoes: ${potatoes}`); //do this
//	console.log(potatoNode)
//	console.log(ffmoney, potatoes)
	//console.log('tick', `Cookies: ${cookies}, Potatoes: ${potatoes}`);
}, 1000);
