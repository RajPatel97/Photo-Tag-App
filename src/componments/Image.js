import findimage from './assets/MortalKombat.jpeg'
import firebase from "firebase/app";
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

//this is refereed to later to get the data
let app = firebase.initializeApp({
    apiKey: "AIzaSyCV73nCkr04lwKBMIh1IGc3zu7ZojVBK4U",
    authDomain: "photo-tag-69251.firebaseapp.com",
    projectId: "photo-tag-69251",
    storageBucket: "photo-tag-69251.appspot.com",
    messagingSenderId: "133774276293",
    appId: "1:133774276293:web:2da2dc09aef9c9cfc162ac"
  });



const Image = () => {


    const getData =  function(){
    let db = firebase.firestore(app);
        let characters= db.collection('Character Loactions').doc('dMSqvUfM4hW45HAtor2M');

        //getting the data from the firebase collection 
        //turn this into an async function later
        characters.get().then((doc) => {
            if (doc.exists) {
                let data = doc.data();
                console.log(data['Erron Black']);//making a ref to the data
                
                
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
  }



    const handleClick=(event)=>{
        //printing the x and y of the page on click of the cursor 
        console.log(" X:"+event.pageX +" Y:"+event.pageY);
    }
    return ( 
        <div className="image-wrapper">
        {getData()}
        <img src={findimage} alt="Find Them All!" onClick={handleClick}/>
        </div>
     );
}
 
export default Image;