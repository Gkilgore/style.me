// Hide all design rules by default
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

// Function to hide all design rules
function hideRules () {
  // Hide each design rule by setting its display property to 'none'
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

// Function to hide all design rules and additional info
function hideRulesAndInfo () {
  // Call the hideRules function to hide all design rules
  hideRules()
  // Hide the additional info by setting its display property to 'none'
  document.getElementById('designRule0').style.display = 'none'
}

// Declare a variable 'number' and set its value to "0"
let number = '0'

// Function to show a specific design rule based on the number parameter passed in
function showRule (number) {
  // Call the hideRulesAndInfo function to hide all design rules and additional info
  hideRulesAndInfo()
  // Show the design rule corresponding to the number parameter passed in by setting its display property to 'block'
  document.getElementById('designRule' + number).style.display = 'block'
}
