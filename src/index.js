const express = require('express');
const { initializeApp } = require('firebase/app');
const { getDatabase, set, ref, get, child } = require('firebase/database');
// const  { getAnalytics } = require("firebase/analytics");

const firebaseConfig = {
    apiKey: "AIzaSyBQ6tKQpOF7LnPpbELCWf5GxMWVq-7rAo8",
    authDomain: "fcamara-62f52.firebaseapp.com",
    databaseURL: "https://fcamara-62f52-default-rtdb.firebaseio.com",
    projectId: "fcamara-62f52",
    storageBucket: "fcamara-62f52.appspot.com",
    messagingSenderId: "686412733569",
    appId: "1:686412733569:web:91b71d1bc9c21a060b8180",
    measurementId: "G-LSNNHWL4R4"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started at ${PORT}...`));

//remake
function writeUserData(userId, name, email) {
    const db = getDatabase();
    set(ref(db, '/user' + userId), {
        username: name,
        email: email,
    });
}

async function readData(office) {
    const dbRef = ref(getDatabase());
    try {
        const snapshot = await get(child(dbRef, `/office/${office}`));
            if (snapshot.exists()) {
                snap = snapshot.val();
                return snap;
            } else {
                console.log('No data available');
            }
    }
    catch (erro) {
        console.error(error);
    }
}

function increment(office) {
    const db = getDatabase();
    set(ref(db, `/office/${office}`), {

        Atual: atual + 1,
    });
}

async function getPercent() {
    const dbRef = ref(getDatabase());
    try {
        const snapshot = await get(child(dbRef, `/MaxPercent`))
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log("No data available");
        }
    } catch (error) {
        console.error(error);
    };
}

//recebe as quantidades da matriz
app.get('/db/Matriz', async (request, response) => {
    const snap = await readData("Matriz");
    const percent = await getPercent();
    const available = snap.Total * (percent / 100) - snap.Atual;
    const data = [available, snap.Atual];
    response.json(data);
});

//recebe as quantidades de santos
app.get('/db/Santos', async (request, response) => {
    const snap = await readData("Santos");
    const percent = await getPercent();
    const available = snap.Total * (percent / 100) - snap.Atual;
    const data = [available, snap.Atual];
    response.json(data);
});

app.post('/db/Matriz', async (request, response) => {
    const snap = await readData("Matriz");
    const atual = snap.Atual;
    const percent = await getPercent();
    const available = snap.Total * (percent / 100) - snap.Atual;
    if (available > 0) {
        increment(snap, "Matriz");
        snap = await readData("Matriz");
        response.json(["Success", snap.Atual]);
    } else {
        response.json("error");
    }
});