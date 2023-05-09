class Hotel {

    address;
    numberOfRoom;
    #minFloor;
    #maxFloor;
    rooms=[];

   constructor(address,numberOfRoom,minFloor,maxFloor,rooms){

    this.address=address;
    this.numberOfRoom=numberOfRoom;
    this.#minFloor=minFloor;
    this.#maxFloor=maxFloor;
    this.rooms=rooms;
   }

    get minFloor(){
      return this.#minFloor;
    }

    set minFloor(n){
        this.#minFloor=n;
    }

    get maxFloor(){
        return this.#maxFloor;
    }

    set maxFloor(n){
        this.#maxFloor=n;
    }


    printAdvertisemen(){
        console.log('********Feature of Hotel *************')
        console.log(`Address of Hotel :${this.address}.
Numbers of rooms in this hotel:${this.numberOfRoom}
Min floor in this hotel:${this.#minFloor}
Max floor in this hotel:${this.#maxFloor}`);
        console.log('**************************************')

    }
    listBookedRooms(){
       console.log('******List of Booked Rooms*******')
        for (let i=0;i<rooms.length;i++){
            if(rooms[i].isBooked()){
                rooms[i].printRoom();
                console.log('*************************************************')
            }
        }

    }
}

class Room {
    floorNum;
    roomNum;
    price;
    #isBooked;

    set roomIsBooked(isB){

        this.#isBooked=isB;
    }
    get roomIsBooked(){
      return  this.#isBooked;
    }

    constructor(floorNum,roomNum,price,isBooked){
        this.floorNum=floorNum;
        this.roomNum=roomNum;
        this.price=price;
        this.#isBooked=isBooked;
    }

    printRoom() {

        console.log(`The floor Number  :${this.floorNum}
The Room  Number  :${this.roomNum}
The price of Room :${this.price} 
The Room is Booked:${this.#isBooked}`)
        
    }

    book(){
        this.#isBooked=true;
    }

    isBooked(){
        return this.#isBooked;
    }



}

class RoomWithView extends Room {
    personCapacity;

    constructor(floorNum,roomNum,price,isBooked,personCapacity){
        super(floorNum,roomNum,price,isBooked);
        this.personCapacity=personCapacity;
    }
        
    
}

class SleepingRoom extends Room{

     view;
     numberOfBeds;
    constructor(floorNum,roomNum,price,isBooked,view,numberOfBeds){
        super(floorNum,roomNum,price,isBooked);
        this.view=view;
        this.numberOfBeds=numberOfBeds;
    }

}
//*********************************************************** Test class roomWithView */
const roomWithView1 =new RoomWithView(3,"1009",100,false,5);
console.log(roomWithView1.printRoom());
roomWithView1.book();
console.log(roomWithView1.printRoom());
console.log(roomWithView1.isBooked());
/**********************************************************  Test class sleepingroom*/
const sleepingRoom1 =new SleepingRoom(2,"1010",200,false,"Side view on beach",10);
console.log(sleepingRoom1.printRoom());
sleepingRoom1.book();
console.log(sleepingRoom1.printRoom());
console.log(sleepingRoom1.isBooked());
//******************************************************** */

console.log("********************************************************************************");
//************************************************** Test the composition bet Hotel and rooms  */
const room1= new Room(3,"1012",300,false);
const room2= new Room(2,"1013",500,true);
const room3= new Room(2,"1014",500,true);


const rooms=[room1,room2,room3];

const Hotel1 =new Hotel("Nablus-Salem-Qussay clinic",3,2,10,rooms);
Hotel1.printAdvertisemen();
Hotel1.listBookedRooms();

