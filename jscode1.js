
const people = [{
	name: 'Arisa',
	department: 'BP',
	gender: 'F'
},
{
	name: 'Ham',
	department: 'IT',
	gender: 'F'
},
{
	name: 'Alice',
	department: 'IT',
	gender: 'F'
},
{
	name: 'Anna',
	department: 'DA',
	gender: 'F'
},
{
	name: 'Larry',
	department: 'Sales',
	gender: 'M'
},
{
	name: 'Ria',
	department: 'Sales',
	gender: 'F'
},
{
	name: 'JD',
	department: 'Sales',
	gender: 'M'
},
{
	name: 'Thor',
	department: 'Sales',
	gender: 'M'
},
{
	name: 'Karl',
	department: 'Sales',
	gender: 'M'
},
{
	name: 'Rachel',
	department: 'Sales',
	gender: 'F'
}
];

function listByGender(gender) {
	let nameByGender = [];
	
	for(let i in people){
		if(gender === 'M' && people[i].gender === 'M'){
			nameByGender.push(people[i].name);
		}
		if(gender === 'F' && people[i].gender === 'F'){
			nameByGender.push(people[i].name);
		}
	}
	console.log(nameByGender);	
}

// Test:
//listByGender('M'); // Output: Includes Larry, JD, Thor, and Karl
//listByGender('F'); // Output: Includes Arisa, Ham, Alice, Anna, Ria,

function groupByDepartment(people, key) {
    const map = new Map();
    people.forEach((item) => {
         const key = key(item);
         const collection = map.get(key);
		 
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}

