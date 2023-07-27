import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, User, getRedirectResult, signInWithRedirect, user } from '@angular/fire/auth';
import { Firestore, addDoc, doc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

const SN_USER = 'stickynotes-user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #auth = inject(Auth);
  #user = user(this.#auth);
  #firestore = inject(Firestore);
  #router = inject(Router);

  get user$() {
    return this.#user;
  }

  signInWithGogle() {
    const p = new GoogleAuthProvider();
    signInWithRedirect(this.#auth, p);
    return getRedirectResult(this.#auth).then(result => {
      if (!result) {
        this.#router.navigateByUrl('/sign-in');
        return;
      }
      this._setUserData(result!.user);
      this.#router.navigateByUrl('/');
    });
  }

  signOut() {
    return this.#auth.signOut().then(() => {
      localStorage.removeItem(SN_USER);
      this.#router.navigateByUrl('/sign-in')
    });
  }

  private _setUserData(user: User) {
    console.log(user);
    const userRef = doc(this.#firestore, `users/${user.uid}`);
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      roles: ['guest']
    }
    return setDoc(userRef, userData);
  }
}
