import * as Categories from './productCategory' // allows access to the productCategory.ts file



// export declaration is similar to a public declaration
export interface Product { // product interface used for assigning name and price to products
	name: string
	price: number
	category?: Categories.ProductCategory  //this is optional
}

export class Initial implements Product{
	name = "Please select a product"
	price = 0
}

export class CocaCola implements Product{
  name = "Coca-Cola"
  price = 2.30
  category = new Categories.SodaCategory() // adding CocaCola to the soda category
}

export class Fanta implements Product {
	name: string = "Fanta"
	price = 2
	category = new Categories.SodaCategory() // adding Fanta to the soda category
}

export class Sprite implements Product {
	name: string = "Sprite"
	price = 1.80
	category = new Categories.SodaCategory() // adding Sprite to the soda category
}

export class Peanuts implements Product {
	name: string = "Peanuts"
	price = 1.50
	category = new Categories.NutsCategory() // adding peanuts to the nuts catogory
}

export class Cashews implements Product {
	name: string = "Cashews"
	price = 2.80
	category = new Categories.NutsCategory() // adding cashews to the nuts catogory
}

export class Plain implements Product {
	name: string = "Plain"
	price = 2
	category = new Categories.ChipsCategory() // adding plain chips to chips category
}

export class Cheddar implements Product {
	name: string = "Cheddar"
	price = 2
	category = new Categories.ChipsCategory() // adding cheddar chips to chips category
}

export class Mints implements Product {
	name: string = "Mints"
	price = 1.30
	category = new Categories.CandyCategory() // adding mints to candy category
}

export class Gummies implements Product {
	name: string = "Gummies"
	price = 1.90
	category = new Categories.CandyCategory() // adding gummies to candy category 
}

export class Hersey implements Product {
	name: string = "Hersey's"
	price = 1.30
	category = new Categories.CandyBarCategory() // adding hersey to the candyBAR category
}

export class MilkyWay implements Product {
	name: string = "Milky Way"
	price = 1.80
	category = new Categories.CandyBarCategory() // adding MilkWay to the candyBAR category
}


