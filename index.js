// Write your code here!

document.querySelector("main#main").remove()

// it("has a 'newHeader' variable that points to an <h1> node, 'h1#victory'", () => {
//     expect(
//       newHeader.nodeName,
//       "Make sure you create an <h1> with id 'victory'"
//     ).eql("H1");
//   });
const newHeader = document.createElement("h1")

// it("the 'newHeader' variable points to a node that has an id of 'victory'", () => {
//     expect(
//       newHeader.id,
//       "Make sure you create an <h1> with id 'victory'"
//     ).eql("victory");
//   });

newHeader.id = "victory"
// it("the 'newHeader' variable points to a node 'h1#victory', has \"YOUR-NAME is the champion\" inside", () => {
//     expect(newHeader.innerHTML, "Make sure you create an <h1> with id 'victory' with a sweet message in it").to.include("is the champion");
//   });

// });
// })

newHeader.innerHTML = "Kaeli is the champion"
newHeader.className = "victory"