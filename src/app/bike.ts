export class Bike {
    
    constructor(
        private id: number,
        private name: string,
        private description: string,
        private qty: number,
        private price: number) {
    }
    

    isAvailable(){
        return this.qty > 0;
    }
}
