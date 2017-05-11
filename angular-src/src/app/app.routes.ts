import { Routes, RouterModule } from "@angular/router"
import { HomeComponent, DashboardHomeComponent, DashboardAddArticleComponent, DashboardEditArticleComponent, BlogIndividualComponent, BlogHomeComponent } from "./pages/pages-barrel"

const APP_ROUTES: Routes = [
  {path: "", component: HomeComponent},
  {path: "dashboard", component: DashboardHomeComponent},
  {path: "dashboard/article/add", component: DashboardAddArticleComponent},
  {path: "dashboard/article/edit", component: DashboardEditArticleComponent},
]

export const router = RouterModule.forRoot(APP_ROUTES)
