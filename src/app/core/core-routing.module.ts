
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppUrls } from '../config/app-urls.config';


const routes: Routes = [
  { path: AppUrls.App, redirectTo: AppUrls.AppLocalProduct, pathMatch: 'full' },
  { path: AppUrls.AppLocalProduct, loadChildren: () => import('../+modules/local-product/local-product.module').then(m => m.LocalProductModule) },
//   { path: AppUrls.AppAboutMe, loadChildren: () => import('../+modules/about-me/about-me.module').then(m => m.AboutMeModule) },
//   { path: AppUrls.AppExperience, loadChildren: () => import('../+modules/experience/experience.module').then(m => m.ExperienceModule) },
//   { path: AppUrls.AppPortfolio, loadChildren: () => import('../+modules/portfolio/portfolio.module').then(m => m.PortfolioModule) },
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }