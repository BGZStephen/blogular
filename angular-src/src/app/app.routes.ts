import { Routes, RouterModule } from "@angular/router"
import { HomeComponent, DashboardHomeComponent, DashboardAddArticleComponent, BlogIndividualComponent, BlogHomeComponent } from "./pages/pages-barrel"

const APP_ROUTES: Routes = [
  {path: "", component: HomeComponent},
  {path: "dashboard", component: DashboardHomeComponent},
  {path: "dashboard/article/add", component: DashboardAddArticleComponent},
]

export const router = RouterModule.forRoot(APP_ROUTES)
