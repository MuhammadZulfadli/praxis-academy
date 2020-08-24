let teller = (tellFortune = (jumlahAnak, namaPasangan, alamat, pekerjaan) => {
  let result = jumlahAnak + namaPasangan + alamat + pekerjaan;
  console.log(
    `Saya memiliki ${jumlahAnak} anak, nama istri saya ${namaPasangan}, saya tinggal di ${alamat} dan pekerjaan saya adalah ${pekerjaan}`
  );
});
tellFortune(1, "julia", "sleman", "mahasiswa");
tellFortune(3, "Nadya", "Medan", "PNS");
tellFortune(2, "Nita", "Yogyakarta", "Guru");
