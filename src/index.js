// import "core.js" -> you can import all core.js but when you build it, main.js size will increase


// import "core-js/modules/es.object.values";
// import "core-js/modules/es.promise";
// import "regenerator-runtime/runtime";

import includesExample from "./includesExample";

includesExample(['a', 'b', 'c'], 'b');

const elvenShildRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

// ES7 Object spread example
const elvenGauntletsRecipe = {
  ...elvenShildRecipe,
  leather: 1,
  refinedMoonstone: 1,
}
console.log("ES7 Object spread example: ", elvenGauntletsRecipe);

// IE will not support if we do not import "core-js/modules/es.object.values", 
// When we import this module, it will increase main.js size.
console.log("ES8 Object.values example", Object.values(elvenGauntletsRecipe));

// async/await example from MDN
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

//This will throw an error without the regenerator-runtime import
async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
