export const createUser = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
}