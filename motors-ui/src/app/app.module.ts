import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ModelLibraryComponent } from './components/car-management/models/model-library/model-library.component';
import { GenerationLibraryComponent } from './components/car-management/generations/generation-library/generation-library.component';
import { CarInfoComponent } from './components/car-management/car-info/car-info.component';
import { AppRoutingModule } from './app-routing.module';
import { EngineLibraryComponent } from './components/car-management/engines/engine-library/engine-library.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BrandLibraryComponent } from './components/car-management/brands/brand-library/brand-library.component';
import { AdLibraryComponent } from './components/ad-management/ad-library/ad-library.component';
import { AddAnAddComponent } from './components/ad-management/add-an-add/add-an-add.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { Navbar3Component } from './components/navbar3/navbar3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Navbar4Component } from './components/navbar4/navbar4.component';
import { Navbar5Component } from './components/navbar5/navbar5.component';
import { CarFormComponent } from './components/ad-management/car-form/car-form.component';

const appRoute: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'Brands', component: BrandLibraryComponent },
  { path: 'CarForm', component: CarFormComponent},
  { path: 'Brands/Models/:brandName', component: ModelLibraryComponent },
  { path: 'Brands/Models/:brandName/Generations/:modelName', component: GenerationLibraryComponent},
  { path: 'Brands/Models/:brandName/Generations/:modelName/Engines/:generationName', component: EngineLibraryComponent},
  { path: 'Brands/Models/:brandName/Generations/:modelName/Engines/:generationName/CarInfo/:carId', component: CarInfoComponent},
  { path: 'Ads', component: AdLibraryComponent},
  { path: 'Ads/Home', component: HomeComponent},
  { path: '', component: HomeComponent } // to create view for specific card // multiple prameters Cars/:name/:id
]

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        AddAnAddComponent,
        Navbar2Component,
        Navbar4Component,
        Navbar5Component
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule.forRoot(appRoute),
        BrowserAnimationsModule,
        Navbar3Component
    ]
})
export class AppModule { }