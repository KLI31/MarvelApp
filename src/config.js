import md5 from 'md5';

const PUBLIC_KEY = 'f9a47212965532f09e63e8eff34a52a4'
const PRIVATE_KEY = "eecd11ff7113cebfc5b6330487818f1ee7741bec"
const TS = new Date().getTime().toString();
const HASH = md5(`${TS}${PRIVATE_KEY}${PUBLIC_KEY}`);



export { PUBLIC_KEY, PRIVATE_KEY, TS, HASH }