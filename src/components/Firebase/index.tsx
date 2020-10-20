import * as firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: 'AIzaSyBT8WumCDdBpvm9ADyMEVDQP0lIUtI6qwk',
    authDomain: 'ase-candidates-form.firebaseapp.com',
    databaseURL: 'https://ase-candidates-form.firebaseio.com',
    projectId: 'ase-candidates-form',
    storageBucket: 'ase-candidates-form.appspot.com',
    messagingSenderId: '979613766276',
    appId: '1:979613766276:web:6672778c674d1cc63aa8d1',
    measurementId: 'G-PX3ZPW3PLW',
}

firebase.initializeApp(firebaseConfig)

export default firebase
