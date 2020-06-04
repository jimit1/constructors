function sayThing(name) {
  return new Promise((resolve, reject) => {
    if (typeof name != "string") reject({ err: "argument must be a string" });
    resolve(`Hello ${name}`);
  });
}
// let thing = "huh?";
// console.log(thing);
sayThing("class")
  .then((response) => {
    console.log(response);
    thing = "hello??";
    return sayThing(2);
  })
  .then((res) => console.log(res))
  .then(() => console.log("promises are freaking great"))
  .catch((err) => console.log(err));
// (async function () {
//   const message = await sayThing("full stack devs");
//   console.log("from global async: ", message);
// })();
const asyncMessage = async (me) => {
  try {
    const message = await sayThing(me);
    console.log("from inside async function: ", message);
  } catch (err) {
    console.log(err);
  }
};
asyncMessage("full stack developers");
