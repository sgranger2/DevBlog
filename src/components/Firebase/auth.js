import { firebaseAuth, googleProvider } from './constants';

export function loginWithGoogle() {
 return firebaseAuth().signInWithPopup(googleProvider).then((result) => {
    return result;
 });
}

export function logout() {
 return firebaseAuth().signOut();
}