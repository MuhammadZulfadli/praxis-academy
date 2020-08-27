// // Array of Functional Programming
// let meetups = [
//   {
//     name: "Javascript",
//     isActive: true,
//     members: 450,
//   },
//   {
//     name: "Angular",
//     isActive: false,
//     members: 902,
//   },
//   {
//     name: "Node",
//     isActive: true,
//     members: 732,
//   },
// ];

// let activeMeetup = [];
// for (let i = 0; i < meetups.length; i++) {
//   let m = meetups[i];
//   if (m.isActive) {
//     activeMeetup.push(m);
//   }
// }

// console.log(activeMeetup);

// let activeMeetupsFP = [];
// activeMeetupsFP = meetups.filter((m) => {
//   return m.isActive;
// });
// console.log(activeMeetupsFP);

// Function chaining
let meetups = [
  {
    name: "Javascript",
    isActive: true,
    members: 450,
  },
  {
    name: "Angular",
    isActive: false,
    members: 902,
  },
  {
    name: "Node",
    isActive: true,
    members: 732,
  },
  {
    name: "React",
    isActive: true,
    members: 500,
  },
];
let sumFPChain = meetups
  .filter((m) => {
    return m.isActive;
  })
  .map((m) => {
    return m.members - 0.1 * m.members;
  })
  .reduce((acc, m) => {
    return acc + m;
  }, 0);
console.log(sumFPChain);
