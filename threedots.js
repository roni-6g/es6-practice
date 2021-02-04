const ages1 = [10, 12, 15, 13, 14];
const ages2 = [18, 19, 15, 12, 11];
const ages3 = [40, 52, 55, 33, 24];
const allAges = ages1.concat(ages2).concat([7]).concat(ages3);
const allAges2 = [...ages1, ...ages2, ...ages3];

const business = 650;
const minister = 450;
const sochib = 300;

const maximum = Math.max(business, minister, sochib);
const balance = [820, 600, 750];

const biggerBalance = Math.max(...balance);
console.log(biggerBalance);

