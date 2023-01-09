import React, { useEffect, useState } from "react";
import { StyleSheet, Button } from "react-native";
import { Text, View } from "../components/Themed";
import { db, rtdb } from "../firebase.config";

export default function RealTimeFirebaseScreen({ navigation }) {
  const [data, setData] = useState("")
  const getData = () => {
    console.log("Get Data - TODO");
    db.collection("mad-final")
      // .where("name", "==", "Ali")
      .orderBy("name", "desc")
      // .startAt(1)
      .get()
      .then((querySnapshot) => {
        // console.log("Data Got => ", querySnapshot)
        querySnapshot.forEach((doc) => {

          // console.log(`doc => `, doc);
          console.log(`${doc.id} => `, doc.data());
        });
      })
      .catch((error) => {
        console.log("Error Get Data - TODO => ", error.message);
      });
  };
  const getRT = () => {
    console.log("Get Data - RTDB\n")
    var dbref = rtdb.ref();

    dbref.on("value", (snapshot) => {
      console.log("Data Got ", typeof (snapshot))
      // console.table(snapshot)
      snapshot.forEach((doc) => {
        // console.log(typeof doc)
        console.log(doc);  // Returns: false)
        // console.log(doc.id, doc.AyahNumber, doc.SurahNumber, doc.TafseerName)
      })
    })
  }
  const getOneRT = () => {
    console.log("Get One Data - RTDB\n")
    var dbref = rtdb.ref("1");

    dbref.on("value", (snapshot) => {
      // console.log("Data Got ", typeof (snapshot), Array.isArray(snapshot))
      // console.log("snapshot => ", snapshot)
      let val = snapshot.val()
      setData(val)
    })
  }
  useEffect(() => {
    // getData();
    getRT()
    // getOneRT()
  }, []);
  useEffect(() => {
    console.log("Data=> ", data.AyahNumber)
  }, [data])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Realtime Firebase - check console</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button onPress={() => navigation.navigate("FirebaseScreen")} title={"Goto Firestore Screen"} />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

// Helpful
// db.collection('student')
//   .doc('R3v1dlrtVX8GBBsho4eS')
//   .onSnapshot(documentSnapshot => {
//     console.log('User data: ', documentSnapshot.data());
//   });
// Stop listening for updates when no longer required
// return () => subscriber();

// const subscriber = db

// .where('campus','in',['Comsats','UET','PUCIT','Superior'])
// .where('rollno','>=',2)
// .orderBy('age', 'desc')
//

// .orderBy('age', 'desc')
// .startAt(18)
// .endAt(30)

// db.collection('student')
// .orderBy('rollno', 'asc')
// .get()
// .then(querySnapshot => {
//   console.log('Firestore Total users: ', querySnapshot.size);
//   querySnapshot.forEach(documentSnapshot => {
//     console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
//   });
// });

// db.collection('student')
// .doc('1234')
// .update({
//   rollno: 340,
// })
// .then(() => {
//   console.log('User updated!');
// });

// db.collection('student')
// .doc('umer')
// .add({
//   campus: 'Pak Aims',
//   rollno: 1,
//   name:'Salman',
//   class:'BSE B',
//   key:10
// })
// .then(() => {
//   console.log('User added!');
// });

// firestore()
// .collection('Users')
// .doc('ABC')
// .set({
//   name: 'Ada Lovelace',
//   age: 30,
// })
// .then(() => {
//   console.log('User added!');
// });

// firestore()
// .collection('Users')
// .doc('ABC')
// .update({
//   age: 31,
// })
// .then(() => {
//   console.log('User updated!');
// });

// return () => subscriber();

// limitToLast
// limitToFirst
// .ref('/universities').limitToFirst(2)
// .ref('/universities').limitToLast(2)
// .ref('/universities').orderByChild("name").equalTo("COMSATS")

// dbreal
// .ref('/universities').orderByChild("name").equalTo("COMSATS")
// .on('value', snapshot => {
//   console.log('Real Time User data: ', snapshot.val());
//   setData(snapshot.val())
// });

