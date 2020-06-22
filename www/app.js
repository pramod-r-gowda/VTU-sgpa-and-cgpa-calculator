function calculate() {
  var credits = 0;
  var s1 = document.getElementById('s1').value;
  if (Number(s1) != 0) credits += 24;
  var s2 = document.getElementById('s2').value;
  if (Number(s2) != 0) credits += 24;
  var s3 = document.getElementById('s3').value;
  if (Number(s3) != 0) credits += 28;
  var s4 = document.getElementById('s4').value;
  if (Number(s4) != 0) credits += 28;
  var s5 = document.getElementById('s5').value;
  if (Number(s5) != 0) credits += 26;
  var s6 = document.getElementById('s6').value;
  if (Number(s6) != 0) credits += 26;
  var s7 = document.getElementById('s7').value;
  if (Number(s7) != 0) credits += 24;
  var s8 = document.getElementById('s8').value;
  if (Number(s8) != 0) credits += 20;
  var res =
    (Number(s1) * 24 +
      Number(s2) * 24 +
      Number(s3) * 28 +
      Number(s4) * 28 +
      Number(s5) * 26 +
      Number(s6) * 26 +
      Number(s7) * 24 +
      Number(s8) * 20) /
    credits;
  ons.notification.toast('CGPA is ' + res, { timeout: 3000 });
}
