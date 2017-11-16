const buttonElement = document.querySelector('.btn');
const url = 'https://api.github.com/orgs/HackYourFuture/repos';
const req = new XMLHttpRequest();
req.addEventListener('load', function (data) {
    if (this.status === 200) {
    const responseText = req.responseText;
    const data = JSON.parse(responseText);
    console.log(data);
data.forEach(function (myLi){
  const li = document.createElement('li');
  const nameText=document.createTextNode(myLi.name);
  li.appendChild(nameText);
  ReposName.appendChild(li);
});
console.log(ReposName);

} else {
        console.log('Something is probably wrong with the url');
    }
});
req.addEventListener('error', function () {
    console.log('Server error like timeout');
});

req.open("GET", url);
req.send();
console.log(buttonElement);
