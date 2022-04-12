const name = "Lukasz";
const age = 29;
const role = "Admin";

const info = name + ' has a role of ' + role + ' and is born in year ' + (new Date().getFullYear() - age);


const betterInfo = `${name} has a role of ${role} and is born in year ${new Date().getFullYear() - age}`


console.log(info);

console.log(betterInfo);
