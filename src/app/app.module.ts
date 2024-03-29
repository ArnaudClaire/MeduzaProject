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

import { PageCreationComponent } from './page/page-creation/page-creation.component';
import { PageTeamComponent } from './page/page-team/page-team.component';
import { PageDevisComponent } from './page/page-devis/page-devis.component';
import { MenuComponent } from './navbar/menu/menu.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PageContactComponent } from './page/page-contact/page-contact.component';
import { PageBenefitComponent } from './page/page-benefit/page-benefit.component';
import { OptimisationComponent } from './page/benefit-component/optimisation/optimisation.component';
import { ComunityComponent } from './page/benefit-component/comunity/comunity.component';
import { AccompagnementComponent } from './page/benefit-component/accompagnement/accompagnement.component';
import { GraphismeComponent } from './page/benefit-component/graphisme/graphisme.component';
import { PrestationComponent } from './page/benefit-component/prestation/prestation.component';
import { CreationforBenefComponent } from './page/benefit-component/creationfor-benef/creationfor-benef.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CreationComponent,
    CreationforBenefComponent,
    BenefitComponent,
    TeamComponent,
    BackOfficeComponent,
    ProjectComponent,
    AddProjectComponent,
    UpdateProjectComponent,
    DeleteProjectComponent,

    PageCreationComponent,
    PageTeamComponent,
    PageDevisComponent,
    MenuComponent,
    SignInComponent,
    PageContactComponent,
    PageBenefitComponent,
    OptimisationComponent,
    ComunityComponent,
    AccompagnementComponent,
    GraphismeComponent,
    PrestationComponent,
    PageNotFoundComponent,
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
      },
      {
        path: 'pageDevis',
        component: PageDevisComponent,
      },
      {
        path: 'pageContact',
        component: PageContactComponent,
      },
      {
        path: 'pagePresta',
        component: PageBenefitComponent,
      },
      {
        path: 'login',
        component: SignInComponent,
      },
      {
        path: '404',
        component: PageNotFoundComponent,
      }
      // ,
      // {
      //   path: '**',
      //   redirectTo: '/404',
      // }
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
