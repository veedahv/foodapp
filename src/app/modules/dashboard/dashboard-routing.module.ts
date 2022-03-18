import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbaordLayoutComponent } from './dashbaord-layout/dashbaord-layout.component';


const routes: Routes = [
  {
    path: '',
    component: DashbaordLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then(
            (m) => m.HomeModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./modules/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./modules/cart/cart.module').then(
            (m) => m.CartModule
          ),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./modules/search/search.module').then(
            (m) => m.SearchModule
          ),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./modules/orders/orders.module').then(
            (m) => m.OrdersModule
          ),
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
  // {
  //   path: 'home/profile',
  //   loadChildren: () =>
  //     import('../../pages/logged/profile/profile.module').then(
  //       (m) => m.ProfilePageModule
  //     ),
  // },
  // {
  //   path: 'transactions/cards',
  //   loadChildren: () =>
  //     import('../../pages/logged/cards/cards.module').then(
  //       (m) => m.CardsPageModule
  //     ),
  // },
  // {
  //   path: 'send-tip',
  //   loadChildren: () =>
  //     import('src/app/pages/logged/send-tip/send-tip.module').then(
  //       (m) => m.SendTipPageModule
  //     ),
  // },
  // {
  //   path: 'saved-accounts',
  //   loadChildren: () =>
  //     import('src/app/pages/logged/saved-account/saved-account.module').then(
  //       (m) => m.SavedAccountPageModule
  //     ),
  // },
  // {
  //   path: 'withdrawal',
  //   loadChildren: () =>
  //     import('src/app/pages/logged/withdrawal/withdrawal.module').then(
  //       (m) => m.WithdrawalPageModule
  //     ),
  // },
  // {
  //   path: 'verify-account',
  //   loadChildren: () =>
  //     import('src/app/pages/logged/verify-account/verify-account.module').then(
  //       (m) => m.VerifyAccountPageModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

// const routes: Routes = [];



