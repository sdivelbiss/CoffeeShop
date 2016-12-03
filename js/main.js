function insertText(elemID, text) {


  	function coffeePrice(name, price) {
  	this.name = name
	this.price = price
}

var prices = []

var capuccino = new coffeePrice("Capuccino", 3.00)
var americano = new coffeePrice("Americano", 2.45)
var caramelMachiato = new coffeePrice("Caramel Machiato", 3.75)
var expressoConPanna = new coffeePrice("Expresso con Panna", 1.95)
var machiato = new coffeePrice("Machiato", 2.75)
var breve = new coffeePrice("Breve", 3.25)
var expresso = new coffeePrice("Expresso", 2.35)
var flatwhite = new coffeePrice("Flat White", 3.65)
var mocha = new coffeePrice("Mocha", 3.95)

prices.push(capuccino)
prices.push(americano)
prices.push(caramelMachiato)
prices.push(expressoConPanna)
prices.push(machiato)
prices.push(breve)
prices.push(expresso)
prices.push(flatwhite)
prices.push(mocha)


        for (var i = 0; i < prices.length; i++) {

        	if (text == prices[i].name) {

       	var coffeeName = document.createTextNode(prices[i].name + " " + "$" + prices[i].price)
        var newItem = document.createElement("li")

        document.getElementById("orderItem").appendChild(newItem)
        newItem.appendChild(coffeeName)


 }
}
}


