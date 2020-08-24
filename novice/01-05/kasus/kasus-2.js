let kamus = new Map();
kamus.set("makan", " eat");
kamus.set("minum", " drink");
// console.log(kamus);

for (let i of kamus) {
	console.log(i.toString());
}

// cari kata
translate = (cari) => {
	let find = kamus.has(cari);
	if (find) {
		console.log(
			`${cari} dalam kamus bahasa inggris adalah ${kamus.get(cari)}`
		);
	} else {
		console.log("data tidak ditemukan");
	}
};
translate("makan");

// tambah kata
addWord = (tambahIndo, tambahEmglish) => {
	let id = tambahIndo;
	let en = tambahEmglish;
	kamus.set(id, en);
	console.log(kamus);
};

addWord("berenang", "swim");

deletedWord = (hapus) => {};

// view all data
console.log(kamus);
