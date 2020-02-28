const people = [
    {
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
    
function groupByDepartment(){
	var groupedDept = []; //unique values
    var deptList = []; //store unique departments
    var result = []; //store grouped names by department
    
    for(let j = 0; j < people.length; j++){
		if(!groupedDept[people[j].department]){
			deptList.push(people[j].department);
            groupedDept[people[j].department] = deptList;
        }
    }
		
    for (let k in deptList){
		var nameList = []; //store names
		for (let l in people){
			if(people[l].department === deptList[k]){
				nameList.push(people[l].name);
            } 	
        }
            
		//store results in json array
        result.push({
			"Department": deptList[k],
            "Name": nameList
        });
    }
	console.log(result);
}
groupByDepartment();
