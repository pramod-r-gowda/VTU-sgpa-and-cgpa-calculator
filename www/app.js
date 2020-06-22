function add() {
  var n1 = document.getElementById('n1').value;
  var n2 = document.getElementById('n2').value;
  var res = Number(n1) + Number(n2);
  ons.notification.toast('Result is ' + res, { timeout: 1000 });
}
