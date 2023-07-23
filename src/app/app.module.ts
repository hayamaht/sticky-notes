import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './shared/primeng/primeng.module';
import { enviroment } from 'src/envs/environment';
import { HeaderComponent } from './components/header/header.component';
import { HomePage } from './pages/home/home.page';
import { FooterComponent } from './components/footer/footer.component';
import { StickyPostComponent } from './components/sticky-post/sticky-post.component';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputContainerComponent } from './components/input-container/input-container.component';
import { InputValidationComponent } from './components/input-validation/input-validation.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { RegisterPage } from './pages/register/register.page';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePage,
    FooterComponent,
    StickyPostComponent,
    SignInPage,
    InputContainerComponent,
    InputValidationComponent,
    InputTextComponent,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    PrimengModule,

    provideFirebaseApp(() => initializeApp(enviroment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
