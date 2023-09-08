const type = document.getElementById('type');
const input = document.getElementById('input');
const output = document.getElementById('output');
const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
  if (!input.value.trim()) {
    alert('Please Provide Code');
    return;
  }

  const inputString = input.value;

  if (type.value === 'js64') {
    output.value = `<script>document.write(atob("${btoa(inputString)}"));</script>`;
  } else if (type.value === 'jsc') {
    const charCodesArray = stringToCharCodes(inputString);
    output.value = `<script>var y="";var x=[${charCodesArray}];x.forEach(char=>{y+=String.fromCharCode(char)});document.write(y);</script>`;
  }
});

function stringToCharCodes(inputString) {
  const charCodes = [];
  for (let i = 0; i < inputString.length; i++) {
    charCodes.push(inputString.charCodeAt(i));
  }
  return charCodes;
}
