document.getElementById('designRule1').style.display = 'none'
document.getElementById('designRule2').style.display = 'none'
document.getElementById('designRule3').style.display = 'none'
document.getElementById('designRule4').style.display = 'none'
document.getElementById('designRule5').style.display = 'none'
document.getElementById('designRule6').style.display = 'none'
document.getElementById('designRule7').style.display = 'none'
document.getElementById('designRule8').style.display = 'none'
document.getElementById('designRule9').style.display = 'none'
document.getElementById('designRule10').style.display = 'none'



function hideRules () {
  document.getElementById('designRule1').style.display = 'none'
  document.getElementById('designRule2').style.display = 'none'
  document.getElementById('designRule3').style.display = 'none'
  document.getElementById('designRule4').style.display = 'none'
  document.getElementById('designRule5').style.display = 'none'
  document.getElementById('designRule6').style.display = 'none'
  document.getElementById('designRule7').style.display = 'none'
  document.getElementById('designRule8').style.display = 'none'
  document.getElementById('designRule9').style.display = 'none'
  document.getElementById('designRule10').style.display = 'none'
}
function hideRulesAndInfo () {
  hideRules()
  document.getElementById('designRule0').style.display = 'none'
}

let number = "0"

function showRule(number) {
    hideRulesAndInfo();
  document.getElementById('designRule'+number).style.display = 'block';
}
