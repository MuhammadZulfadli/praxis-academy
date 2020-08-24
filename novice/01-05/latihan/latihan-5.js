// task 1 create date time
// let date = new Date(2012, 1, 20, 3, 12);
// console.log(date);

// task 2 create weekday
// let weekday = (date) => {
// 	let day = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
// 	return day[date.getDay()];
// };

// let dateDay = new Date(2012, 0, 3);
// console.log(dateDay);

// task 3 european weekday
let europeanDay = (date) => {
	let day = date.getDay();
	if (day === 0) {
		day = 7;
	}
	return day;
};
let date = new Date(2012, 0, 3);
console.log(europeanDay(date));
