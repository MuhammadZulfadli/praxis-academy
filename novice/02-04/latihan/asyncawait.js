// Async/await
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Eksekusi setelah 1 detik!"), 1000);
  });

  let result = await promise;

  console.log(result);
}
f();
