import { AuthGuard } from "./guards/auth.guard"
import { Routes, RouterModule } from "@angular/router"
import { HomeComponent, DashboardHomeComponent, DashboardAddArticleComponent,
         DashboardEditArticleComponent, DashboardManageArticlesComponent,
         BlogIndividualComponent, BlogHomeComponent, DashboardProfileComponent,
         DashboardProfileEditComponent} from "./pages/pages-barrel"

const APP_ROUTES: Routes = [
  {path: "", component: HomeComponent},
  {path: "dashboard", component: DashboardHomeComponent, canActivate:[AuthGuard]},
  {path: "dashboard/article/add", component: DashboardAddArticleComponent, canActivate:[AuthGuard]},
  {path: "dashboard/article/edit", component: DashboardEditArticleComponent, canActivate:[AuthGuard]},
  {path: "dashboard/articles", component: DashboardManageArticlesComponent, canActivate:[AuthGuard]},
  {path: "dashboard/profile", component: DashboardProfileComponent, canActivate:[AuthGuard]},
  {path: "dashboard/profile/edit", component: DashboardProfileEditComponent, canActivate:[AuthGuard]},
  {path: "blog", component: BlogHomeComponent},
  {path: "blog/:username", component: BlogHomeComponent},
  {path: "blog/article", component: BlogIndividualComponent},
]

export const router = RouterModule.forRoot(APP_ROUTES)
