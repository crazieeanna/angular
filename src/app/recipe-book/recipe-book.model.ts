export class Recipe {
    
    // constructor(public name: string, public description: string, public imagePath: string){}

    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, img: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = img;
    }
}