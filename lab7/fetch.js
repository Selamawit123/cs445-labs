window.onload = function(){
    refreshUser();
    refreshUser1();
    refreshUser2();
    refreshUser3();
    refreshUser4();


    document.getElementById("refreshBtn").addEventListener('click', refreshUser);
    document.getElementById("refreshBtn").addEventListener('click', refreshUser1);
    document.getElementById("refreshBtn").addEventListener('click', refreshUser2);
    document.getElementById("refreshBtn").addEventListener('click', refreshUser3);
    document.getElementById("refreshBtn").addEventListener('click', refreshUser4);
   
   
   
}

function refreshUser(){
    fetchUser('https://randomuser.me/api/');
}
function refreshUser1(){
    fetchUser1('https://randomuser.me/api/');
}

function refreshUser2(){
    fetchUser2('https://randomuser.me/api/');
}
function refreshUser3(){
    fetchUser3('https://randomuser.me/api/');
}
function refreshUser4(){
    fetchUser4('https://randomuser.me/api/');
}
 



async function fetchUser(URL) {
    let response = await fetch(URL);
    let jsonObj = await response.json();
    let firstName = jsonObj.results[0].name.first;
    let lastName = jsonObj.results[0].name.last;
    let profileImageURL = jsonObj.results[0].picture.large;
    let phoneNumber = jsonObj.results[0].phone;
    let Email = jsonObj.results[0].email;

    document.getElementById("name").innerHTML = firstName + " " + lastName;
    document.getElementById("phone").innerHTML = "Phone: " + phoneNumber;
    document.getElementById("email").innerHTML = Email;
    document.getElementById("profileImage").src = profileImageURL;
       
}

async function fetchUser1(URL) {
    let response = await fetch(URL);
    let jsonObj = await response.json();
    let firstName = jsonObj.results[0].name.first;
    let lastName = jsonObj.results[0].name.last;
    let profileImageURL = jsonObj.results[0].picture.large;
    let phoneNumber = jsonObj.results[0].phone;
    let Email = jsonObj.results[0].email;

    document.getElementById("name1").innerHTML = firstName + " " + lastName;
    document.getElementById("phone1").innerHTML = "Phone: " + phoneNumber;
    document.getElementById("email1").innerHTML = Email;
    document.getElementById("profileImage1").src = profileImageURL;
       
}

async function fetchUser2(URL) {
    let response = await fetch(URL);
    let jsonObj = await response.json();
    let firstName = jsonObj.results[0].name.first;
    let lastName = jsonObj.results[0].name.last;
    let profileImageURL = jsonObj.results[0].picture.large;
    let phoneNumber = jsonObj.results[0].phone;
    let Email = jsonObj.results[0].email;

    document.getElementById("name2").innerHTML = firstName + " " + lastName;
    document.getElementById("phone2").innerHTML = "Phone: " + phoneNumber;
    document.getElementById("email2").innerHTML = Email;
    document.getElementById("profileImage2").src = profileImageURL;
       
}

async function fetchUser3(URL) {
    let response = await fetch(URL);
    let jsonObj = await response.json();
    let firstName = jsonObj.results[0].name.first;
    let lastName = jsonObj.results[0].name.last;
    let profileImageURL = jsonObj.results[0].picture.large;
    let phoneNumber = jsonObj.results[0].phone;
    let Email = jsonObj.results[0].email;

    document.getElementById("name3").innerHTML = firstName + " " + lastName;
    document.getElementById("phone3").innerHTML = "Phone: " + phoneNumber;
    document.getElementById("email3").innerHTML = Email;
    document.getElementById("profileImage3").src = profileImageURL;
       
}

async function fetchUser4(URL) {
    let response = await fetch(URL);
    let jsonObj = await response.json();
    let firstName = jsonObj.results[0].name.first;
    let lastName = jsonObj.results[0].name.last;
    let profileImageURL = jsonObj.results[0].picture.large;
    let phoneNumber = jsonObj.results[0].phone;
    let Email = jsonObj.results[0].email;

    document.getElementById("name4").innerHTML = firstName + " " + lastName;
    document.getElementById("phone4").innerHTML = "Phone: " + phoneNumber;
    document.getElementById("email4").innerHTML = Email;
    document.getElementById("profileImage4").src = profileImageURL;
       
}



