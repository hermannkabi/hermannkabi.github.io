import {initializeApp} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import {getFirestore, getDocs, collection, addDoc, orderBy} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";


const firebaseApp = initializeApp({
  apiKey: "AIzaSyAw5T0ngxLxA0aR79xehgjdZ0X0HcgDWPc",
  authDomain: "bookreviewbyhermann.firebaseapp.com",
  projectId: "bookreviewbyhermann",
  storageBucket: "bookreviewbyhermann.appspot.com",
  messagingSenderId: "264652740894",
  appId: "1:264652740894:web:8f14c6bcf2e0f1196f510f",
  measurementId: "G-80TSN5T65S"
});

var db = getFirestore(firebaseApp);
var hraCollection = collection(db, "hra");


async function getTable(){
  var rows = await getDocs(hraCollection);
  rows.forEach((doc)=>{
    var word = doc.data()["word"];
    var pageNr = doc.data()["pageNr"];
    var meaning = doc.data()["meaning"];
    var sentence = doc.data()["sentence"];

    const tr = "<tr><td>"+word+"</td><td>"+pageNr+"</td><td>"+meaning+"</td><td>"+sentence+"</td></tr>";
    $("#word-table").append(tr);
  });
}


export async function addRow(word, meaning, pageNr, sentence){
  var d = new Date();
  await addDoc(hraCollection, {
    word:word,
    meaning:meaning,
    pageNr:pageNr,
    sentence:sentence,
  });
  console.log("Added to Firebase");
}

getTable();
