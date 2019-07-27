import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: './pages/inicio/inicio.module#InicioPageModule'
  },
  { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
  {
    path: 'accion-sheet',
    loadChildren:
      './pages/accion-sheet/accion-sheet.module#AccionSheetPageModule'
  },
  {
    path: 'avatar',
    loadChildren: './pages/avatar/avatar.module#AvatarPageModule'
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'botones',
    loadChildren: './pages/botones/botones.module#BotonesPageModule'
  },
  { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
  { path: 'check', loadChildren: './pages/check/check.module#CheckPageModule' },
  {
    path: 'datetime',
    loadChildren: './pages/datetime/datetime.module#DatetimePageModule'
  },
  { path: 'fab', loadChildren: './pages/fab/fab.module#FabPageModule' },
  { path: 'grid', loadChildren: './pages/grid/grid.module#GridPageModule' },
  {
    path: 'infinite-scroll',
    loadChildren:
      './pages/infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule'
  },
  { path: 'input', loadChildren: './pages/input/input.module#InputPageModule' },
  { path: 'lista', loadChildren: './pages/lista/lista.module#ListaPageModule' },
  {
    path: 'lista-reorder',
    loadChildren:
      './pages/lista-reorder/lista-reorder.module#ListaReorderPageModule'
  },
  {
    path: 'loader',
    loadChildren: './pages/loader/loader.module#LoaderPageModule'
  },
  { path: 'modal', loadChildren: './pages/modal/modal.module#ModalPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
