  const firebaseConfig = {
    apiKey: "AIzaSyCDDiFIEDcue7oMIeAcoVxbMTNzRMwJFSU",
    authDomain: "deci-56a81.firebaseapp.com",
    databaseURL: "https://deci-56a81-default-rtdb.firebaseio.com",
    projectId: "deci-56a81",
    storageBucket: "deci-56a81.firebasestorage.app",
    messagingSenderId: "543052069291",
    appId: "1:543052069291:web:188f9259098a87be743aee",
    measurementId: "G-FLS9RFK0FH"
  };

  firebase.initializeApp(firebaseConfig);

  var contactDB = firebase.database().ref("DECI")

  document.getElementById('contact-form').addEventListener('submit', submitForm)

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('fullName')
    var emailid = getElementVal('email')
    var phoneno = getElementVal('phone')
    var messagedt = getElementVal('message')

    savemessage(name, emailid, phoneno, messagedt);

    document.querySelector('.alert').style.display = 'block'

    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none'

    }, 3000);

    document.getElementById('contact-form').reset()
    
  }

  const savemessage = (name, emailid, phoneno, messagedt) => {
    var newcontactform = contactDB.push();

    newcontactform.set({
        name : name,
        emailid : emailid,
        phoneno : phoneno,
        messagedt : messagedt,


    });
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }