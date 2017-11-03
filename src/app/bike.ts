export class Bike {
    qty: number = 0;
    isSoldOut: boolean = false;

    constructor(
        private id: number,
        private name: string,
        private description: string,
        public qtyAvailable: number,
        private price: number,
        private image: string
    ) {
    }
    

    isAvailable(){
        return !this.isSoldOut;
    }

    getImageUrl() {
        return '/assets/images/bikes/' + this.image;
    }
}
