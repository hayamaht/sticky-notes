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
  #firestore = inject(Firestore);
  #router = inject(Router);

  #user$ = user(this.#auth);

  get user$() {
    return this.#user$;
  }

  getUserResult() {
    getRedirectResult(this.#auth).then(result => {
      if (!result) return;
      this._setUserData(result!.user);
      this.#router.navigateByUrl('/');
    });
  }

  signInWithGogle() {
    signInWithRedirect(this.#auth, new GoogleAuthProvider());
  }

  signOut() {
    return this.#auth.signOut().then(() => {
      localStorage.removeItem(SN_USER);
      this.#router.navigateByUrl('/sign-in')
    });
  }

  private _setUserData(user: User) {
    const userRef = doc(this.#firestore, `users/${user.uid}`);
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      roles: ['guest'],
      timestamp: new Date().getTime(),
    }
    return setDoc(userRef, {userData}, { merge: true });
  }
}
