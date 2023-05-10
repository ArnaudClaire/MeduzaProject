import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { CreationComponent } from './creation/creation.component';
import { BenefitComponent } from './benefit/benefit.component';
import { TeamComponent } from './team/team.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './project/project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { DeleteProjectComponent } from './delete-project/delete-project.component';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { CarrousselBlocComponent } from './carroussel-bloc/carroussel-bloc.component';
import { PageCreationComponent } from './page/page-creation/page-creation.component';
import { PageTeamComponent } from './page/page-team/page-team.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CreationComponent,
    BenefitComponent,
    TeamComponent,
    BackOfficeComponent,
    ProjectComponent,
    AddProjectComponent,
    UpdateProjectComponent,
    DeleteProjectComponent,
    CarrousselBlocComponent,
    PageCreationComponent,
    PageTeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/Meduza-home',
      },
      {
        path: 'Meduza-home',
        component: HomeComponent,
      },
      {
        path: 'Meduza-creation',
        component: CreationComponent,
      },
      {
        path: 'backOffice',
        component: BackOfficeComponent,
      },
      {
        path: 'pageCreation',
        component: PageCreationComponent,
      },
      {
        path: 'pageTeam',
        component: PageTeamComponent,
      }
    ]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
