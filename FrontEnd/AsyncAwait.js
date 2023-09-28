const husbandGetsButter = true;

const getColdDrinks = new Promise((resolve, reject) => {
  if (husbandGetsButter) {
    resolve("Got cold drinks");
  } else {
    reject("Husband didn't get butter");
  }
});

async function getColdDrinksAsync() {
  try {
    const result = await getColdDrinks;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

getColdDrinks
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
