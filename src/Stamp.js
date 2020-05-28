class Stamp{
    GetPriceString()
    {
        return Number.parseFloat(this.price).toFixed(2);
    }

    constructor(name, yearPublished, isStamped, imageURL, price, country){
        this.name = name;
        this.yearPublished = yearPublished;
        this.isStamped = isStamped;
        this.imageURL = imageURL;
        this.price = price;
        this.country = country;
    }
}



export {Stamp}