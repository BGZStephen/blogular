import { Routes, RouterModule } from "@angular/router"
import { HomeComponent, DashboardHomeComponent, DashboardAddArticleComponent,
         DashboardEditArticleComponent, DashboardManageArticlesComponent,
         BlogIndividualComponent, BlogHomeComponent, DashboardProfileComponent,
         DashboardProfileEditComponent} from "./pages/pages-barrel"

const APP_ROUTES: Routes = [
  {path: "", component: HomeComponent},
  {path: "dashboard", component: DashboardHomeComponent},
  {path: "dashboard/article/add", component: DashboardAddArticleComponent},
  {path: "dashboard/article/edit", component: DashboardEditArticleComponent},
  {path: "dashboard/articles", component: DashboardManageArticlesComponent},
  {path: "dashboard/profile", component: DashboardProfileComponent},
  {path: "dashboard/profile/edit", component: DashboardProfileEditComponent},
  {path: "blog", component: BlogHomeComponent},
  {path: "blog/article", component: BlogIndividualComponent},
]

export const router = RouterModule.forRoot(APP_ROUTES)
