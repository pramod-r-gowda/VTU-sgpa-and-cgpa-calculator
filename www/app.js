function calculate() {
  var credits = 0;
  var flag = 0;
  var s1 = document.getElementById('s1').value;
  if (Number(s1) != 0) credits += 24;
  if (Number(s1) > 10 || Number(s1) < 0) {
    ons.notification.alert('Enter valid gpa');
    flag = 1;
  }
  var s2 = document.getElementById('s2').value;
  if (Number(s2) != 0) credits += 24;
  if (Number(s2) > 10 || Number(s2) < 0) {
    ons.notification.alert('Enter valid gpa');
    flag = 1;
  }
  var s3 = document.getElementById('s3').value;
  if (Number(s3) != 0) credits += 28;
  if (Number(s3) > 10 || Number(s3) < 0) {
    ons.notification.alert('Enter valid gpa');
    flag = 1;
  }
  var s4 = document.getElementById('s4').value;
  if (Number(s4) != 0) credits += 28;
  if (Number(s4) > 10 || Number(s4) < 0) {
    ons.notification.alert('Enter valid gpa');
    flag = 1;
  }
  var s5 = document.getElementById('s5').value;
  if (Number(s5) != 0) credits += 26;
  if (Number(s5) > 10 || Number(s5) < 0) {
    ons.notification.alert('Enter valid gpa');
    flag = 1;
  }
  var s6 = document.getElementById('s6').value;
  if (Number(s6) != 0) credits += 26;
  if (Number(s6) > 10 || Number(s6) < 0) {
    ons.notification.alert('Enter valid gpa');
    flag = 1;
  }
  var s7 = document.getElementById('s7').value;
  if (Number(s7) != 0) credits += 24;
  if (Number(s7) > 10 || Number(s7) < 0) {
    ons.notification.alert('Enter valid gpa');
    flag = 1;
  }
  var s8 = document.getElementById('s8').value;
  if (Number(s8) != 0) credits += 20;
  if (Number(s8) > 10 || Number(s8) < 0) {
    ons.notification.alert('Enter valid gpa');
    flag = 1;
  }
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
  if (flag != 1)
    ons.notification.toast('CGPA is ' + Math.round(res * 100) / 100, {
      timeout: 3000,
    });
}
