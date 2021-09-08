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

function increment(_atual) {
    const db = getDatabase();
    set(ref(db, '/santos'), {
        atual: _atual + 1,
    });
}

async function getPercent() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `/MaxPercent`)).then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

//recebe as quantidades da matriz
app.get('/db/Matriz', async (request, response) => {
    const snap = await readData("Matriz");
    const percent = await getPercent();
    const available = snap.Total*(percent/100)-snap.Atual
    response(available)
    // response.json(snap);
});

//recebe as quantidades de santos
app.get('/db/Santos', async (request, response) => {
    const snap = await readData("Santos");
    // response.json(snap);
});

app.post('/db', async (request, response) => {
    const santos = await readData();
    const atual = santos.Atual;
    increment(atual);

    response.json(santos);
});