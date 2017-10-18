import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdlistComponent } from './prodlist/prodlist.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent , pathMatch: 'full' },
    { path: 'products', component: ProdlistComponent },
    { path: 'products/:id/edit', component: EditComponent },
    { path: 'products/new', component: CreateComponent },
];
export const routing = RouterModule.forRoot(APP_ROUTES);