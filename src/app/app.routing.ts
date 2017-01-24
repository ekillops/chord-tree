import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TreeComponent } from './tree/tree.component';

const appRoutes: Routes = [
{
  path: '',
  component: WelcomeComponent
},

{
  path: 'branches/:id',
  component: TreeComponent
}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
