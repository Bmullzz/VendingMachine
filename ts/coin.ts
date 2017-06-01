// abstract coin class used for coin creation
export abstract class Coin{ 
	constructor(public value: number){  // constructor with a value parameter -takes a number only
		this.value = value;
	}
}

// concrete quarter class extends abstract coin class
export class Quarter extends Coin{
	constructor(){ // uses the super constrcutor passes its own value of .25
		super(.25);
	}
		getImageUrl(){ // method to access the image to display
		return "img/Quarter.png";
	}
}

// concrete dime class extends abstract coin class
export class Dime extends Coin{
	constructor(){ // uses the super constrcutor passes its own value of .10
		super(.10);
	}
	getImageUrl(){ // method to access the image to display
		return "img/Dime.png";
	}
}

// concrete halfdollar class extends abstract coin class
export class Half extends Coin{
	constructor(){// uses the super constrcutor passes its own value of .5
		super(.5);
	}
	getImageUrl(){// method to access the image to display
		return "img/Half.png";
	}
}

// concrete dollar class extends abstract coin class
export class Dollar extends Coin{
	constructor(){// uses the super constrcutor passes its own value of 1
		super(1);
	}
	getImageUrl(){// method to access the image to display
		return "img/Dollar.jpg";
	}
}