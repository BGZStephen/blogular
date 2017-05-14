import { AuthGuard } from "./guards/auth.guard"
import { Routes, RouterModule } from "@angular/router"
import { HomeComponent, DashboardHomeComponent, DashboardAddArticleComponent,
         DashboardEditArticleComponent, DashboardManageArticlesComponent,
         BlogIndividualComponent, BlogHomeComponent, DashboardProfileComponent,
         DashboardProfileEditComponent} from "./pages/pages-barrel"

 import { ArticleAddWidgetComponent } from "./widgets/article-add-widget/article-add-widget.component"
 import { ArticleEditWidgetComponent } from "./widgets/article-edit-widget/article-edit-widget.component"
 import { ArticlesManageWidgetComponent } from './widgets/articles-manage-widget/articles-manage-widget.component';
 import { ProfileWidgetComponent } from './widgets/profile-widget/profile-widget.component';
 import { ProfileEditWidgetComponent } from './widgets/profile-edit-widget/profile-edit-widget.component';

const APP_ROUTES: Routes = [
  {path: "", component: HomeComponent},
  {path: "dashboard", component: DashboardHomeComponent, canActivate:[AuthGuard], children: [
    {path: "article-add", component: ArticleAddWidgetComponent, outlet: "dashboardOut", canActivate:[AuthGuard]},
    {path: "article-edit", component: ArticleEditWidgetComponent, outlet: "dashboardOut", canActivate:[AuthGuard]},
    {path: "articles", component: ArticlesManageWidgetComponent, outlet: "dashboardOut", canActivate:[AuthGuard]},
    {path: "profile", component: ProfileWidgetComponent, outlet: "dashboardOut", canActivate:[AuthGuard]},
    {path: "profile-edit", component: ProfileEditWidgetComponent, outlet: "dashboardOut", canActivate:[AuthGuard]},
  ]},
  {path: "blog", component: BlogHomeComponent},
  {path: "blog/:username", component: BlogHomeComponent},
  {path: "blog/article", component: BlogIndividualComponent},
]

export const router = RouterModule.forRoot(APP_ROUTES)
