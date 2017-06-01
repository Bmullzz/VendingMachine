abstract class ProductCategory { // abstract product category class 

	protected imgPath = "img/";  
	name: string;

	abstract getImageUrl(): string; // abstract method to access img files 
}
// each of these classes creates a different snack category
class SodaCategory extends ProductCategory {
	name = "Soda"
	getImageUrl () {
    	return this.imgPath + "SodaCan.png"; // gets the assosciated img file for each product
	}
}

class NutsCategory extends ProductCategory {
	name = "Nuts"
	getImageUrl () {
    	return this.imgPath + "Nuts.png"; // gets the assosciated img file for each product
	}
}

class ChipsCategory extends ProductCategory {
	name = "Potato chips"
	getImageUrl () {
    	return this.imgPath + "Chips.png"; // gets the assosciated img file for each product
	}
}

class CandyCategory extends ProductCategory {
	name = "Candy"
	getImageUrl () {
    	return this.imgPath + "Candy.png"; // gets the assosciated img file for each product
	}
}

class CandyBarCategory extends ProductCategory {
	name = "Candy bar"
	getImageUrl () {
    	return this.imgPath + "CandyBar.png"; // gets the assosciated img file for each product
	}
}
// this is another way to export classes, as opposed to declaring export before each class
export {ProductCategory, SodaCategory, ChipsCategory, CandyCategory, CandyBarCategory, NutsCategory}