try {
  alert("try");
  if (confirm("want show an error message?")) throw "Thats for you";
} catch (err) {
  alert(err);
} finally {
  alert("finally");
}
