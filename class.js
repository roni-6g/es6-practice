/** 
class Store {
    constructor(name, item, id){
        this.name = name;
        this.item = item;
        this.id = id;
        this.location = "Uttara Dhaka"
    }
}

const habibStore = new Store("Habib Fasion House", "Realme Phone", 50);
const riyadStore = new Store("Riayad Coffee Shop", "Green Tea", 22);
riyadStore.name = "Mahi Shari ghor";
console.log(habibStore);
console.log(riyadStore); 
*/

class House {
    constructor() {
        this.babarHouse = "3 tola dhusor basa";        
    }
}

class MyHouse extends House {
    constructor(car, bike, phone){
        super();
        this.car = car;
        this.bike = bike;
        this.phone = phone;
    }
   currentStatus(){
       return this.car + " " + this.bike + " " + this.phone;
   }
}

const roni = new MyHouse("Noah Car", "Yamaha 150", "Oppo Pro");
console.log(roni);