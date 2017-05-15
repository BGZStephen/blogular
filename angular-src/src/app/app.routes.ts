import { AuthGuard } from "./guards/auth.guard"
import { Routes, RouterModule } from "@angular/router"
import { HomeComponent, DashboardHomeComponent, BlogIndividualComponent, BlogHomeComponent} from "./pages/pages-barrel"
import { ArticleAddWidgetComponent, ArticleEditWidgetComponent, ArticlesManageWidgetComponent,
        ArticleDeleteWidgetComponent, ProfileWidgetComponent, ProfileEditWidgetComponent,
        PasswordEditWidgetComponent } from "./widgets/widget-barrel"

const APP_ROUTES: Routes = [
  {path: "", component: HomeComponent},
  {path: "dashboard", component: DashboardHomeComponent, canActivate:[AuthGuard], children: [
    {path: "article-add", component: ArticleAddWidgetComponent, outlet: "dashboardOut", canActivate:[AuthGuard]},
    {path: "article-edit/:articleId", component: ArticleEditWidgetComponent, outlet: "dashboardOut", canActivate:[AuthGuard]},
    {path: "article-delete/:articleId", component: ArticleDeleteWidgetComponent, outlet: "dashboardOut", canActivate:[AuthGuard]},
    {path: "articles", component: ArticlesManageWidgetComponent, outlet: "dashboardOut", canActivate:[AuthGuard]},
    {path: "password-edit", component: PasswordEditWidgetComponent, outlet: "dashboardOut", canActivate:[AuthGuard]},
    {path: "profile", component: ProfileWidgetComponent, outlet: "dashboardOut", canActivate:[AuthGuard]},
    {path: "profile-edit", component: ProfileEditWidgetComponent, outlet: "dashboardOut", canActivate:[AuthGuard]},
  ]},
  {path: "blog", component: BlogHomeComponent},
  {path: "blog/:username", component: BlogHomeComponent},
  {path: "blog/:username/article/:articleId", component: BlogIndividualComponent},
]

export const router = RouterModule.forRoot(APP_ROUTES)
