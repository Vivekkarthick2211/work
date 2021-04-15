import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'timeline',
    loadChildren: () => import('./pages/timeline/timeline.module').then( m => m.TimelinePageModule)
  },
/*   {
    path: 'matrimony',
    loadChildren: () => import('./pages/matrimony/matrimony.module').then( m => m.MatrimonyPageModule)
  }, */
  // {
  //   path: 'settings',
  //   loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  // },
  // {
  //   path: 'bloodbank',
  //   loadChildren: () => import('./pages/bloodbank/bloodbank.module').then( m => m.BloodbankPageModule)
  // }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
