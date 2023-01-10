const userInfo = {
	firstName: "Avi",
	lastName: "Flombaum",
	company: {
		name: "Flatbook Labs",
		jobTitle: "Developer Apprentice",
	},
	friends: [
		{
			firstName: "Nancy",
			lastName: "Burgess",
			company: {
				name: "Flatbook Labs",
				jobTitle: "Developer Apprentice",
			},
		},
		{
			firstName: "Corinna",
			lastName: "Jackson",
			company: {
				name: "Flatbook Labs",
				jobTitle: "Lead Developer",
			},
		},
	],
	projects: [
		{
			title: "Flatbook",
			description:
				"The premier Flatiron School-based social network in the world.",
		},
		{
			title: "Scuber",
			description:
				"A burgeoning startup helping busy parents transport their children to and from all of their activities on scooters.",
		},
	],
};

const letters = ["a", ["b", ["c", ["d", ["e"]], "f"]]];

const primes = [2, 3, 5, 7, 11];

const numbers = [1, [2, [4, [5, [6]], 3]]];

let counter = 0;

// userInfo.lastName;
// //=> "Flombaum"

// userInfo.company.jobTitle;
// //=> "Developer Apprentice"

// userInfo.friends[0].firstName;
// //=> "Nancy"

// userInfo.projects[1].title;
// //=> "Scuber"

// letters[1];
// //=> ["b", ["c", ["d", ["e"]], "f"]]

// letters[1][1];
// //=> ["c", ["d", ["e"]], "f"]

// letters[1][1][1];
// //=> ["d", ["e"]]

// letters[1][1][1][1];
// //=> ["e"]

// letters[1][1][1][1][0];
// //=> "e"

// // function shallowIterator(target) {
// //     for (const key in target) {
// //         console.log(target[key]);
// //     }
// // }

// function shallowIterator(target) {
// 	for (const key in target) {
// 		if (typeof target[key] === "object") {
// 			for (const nestedKey in target[key]) {
// 				console.log(target[key][nestedKey]);
// 			}
// 		} else {
// 			console.log(target[key]);
// 		}
// 	}
// }

// shallowIterator(userInfo);

// function traverseObject(obj) {
// 	for (let key in obj) {
// 		if (obj.hasOwnProperty(key)) {
// 			if (typeof obj[key] === "object") {
// 				traverseObject(obj[key]);
// 			} else {
// 				console.log(obj[key]);
// 			}
// 		}
// 	}
// }

// traverseObject(userInfo);

// shallowIterator(primes);

// shallowIterator(numbers);

function deepIterator(target) {
	counter++;
	if (Array.isArray(target)) {
		for (const element of target) {
			deepIterator(element);
		}
	} else if (typeof target === "object") {
		debugger;
		for (const key in target) {
			deepIterator(target[key]);
			debugger;
		}
	} else {
		debugger;
		console.log(target);
	}
	debugger;
}

deepIterator(userInfo);
