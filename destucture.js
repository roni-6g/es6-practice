const person = {
    name: "Frank william",
    age: 22,
    proffession: "Web Developer",
    phone: 011112223,
    gender: "Male",
    married: "Unmarried",
    gfName: "Luchi Watshon",
    location: "Uttara, Dhaka, Bangladesh"
}

const {name, gfName, location} = person;
const phoneNumber = person.phone;
const crsuhName = person.gfName;
const jobTitle = person.proffession;

//console.log(phoneNumber, crsuhName, jobTitle);
//console.log(name, gfName, location);

const myFriendsName = ["salman shah", "amin khan", "shahrukh khan", "Omit hasa", "borno", "abir miya"]
const [firstF, secondF, ...otherF] = myFriendsName;

const advanceObject = {
    name: "Abul Bashar",
    info: {
        prof: "Bus Driver",
        salary: 20000,
        address: "Noyakhali, lokkhipur"
    }
}

const {info} = advanceObject;
const {address} = advanceObject.info;
console.log(info);
console.log(address);