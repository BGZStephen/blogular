import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./app.routes"
import { FlashMessagesModule } from "angular2-flash-messages"
import { UsersApiService } from "./services/users-api.service"

import { AppComponent } from './app.component';
import { DashboardNavbarComponent, DashboardNotificationBarComponent } from "./components/components-barrel"
import { HomeComponent, DashboardHomeComponent, DashboardAddArticleComponent,
        DashboardEditArticleComponent, DashboardManageArticlesComponent, BlogIndividualComponent,
        DashboardProfileComponent, DashboardProfileEditComponent, BlogHomeComponent } from "./pages/pages-barrel";
import { ArticleAddWidgetComponent, ArticleEditWidgetComponent, ArticlesManageWidgetComponent,
        ProfileWidgetComponent, ProfileEditWidgetComponent } from "./widgets/widget-barrel";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardHomeComponent,
    BlogHomeComponent,
    BlogIndividualComponent,
    DashboardNavbarComponent,
    DashboardNotificationBarComponent,
    ArticleAddWidgetComponent,
    DashboardAddArticleComponent,
    DashboardEditArticleComponent,
    ArticleEditWidgetComponent,
    DashboardManageArticlesComponent,
    ArticlesManageWidgetComponent,
    ProfileWidgetComponent,
    DashboardProfileComponent,
    DashboardProfileEditComponent,
    ProfileEditWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router,
    FlashMessagesModule
  ],
  providers: [UsersApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
