import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomPersonComponent } from './components/random-person/random-person.component';

const routes: Routes = [
    { path: '', component: RandomPersonComponent },
    { path: 'persons', component: RandomPersonComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
