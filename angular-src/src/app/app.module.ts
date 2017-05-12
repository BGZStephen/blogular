import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./app.routes"
import { FlashMessagesModule } from "angular2-flash-messages"

import { AppComponent } from './app.component';
import { DashboardNavbarComponent, DashboardNotificationBarComponent } from "./components/components-barrel"
import { HomeComponent, DashboardHomeComponent, DashboardAddArticleComponent,
        DashboardEditArticleComponent, DashboardManageArticlesComponent, BlogIndividualComponent,
        BlogHomeComponent } from "./pages/pages-barrel";
import { ArticleAddWidgetComponent, ArticleEditWidgetComponent, ArticlesManageWidgetComponent } from "./widgets/widget-barrel";

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
    ArticlesManageWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router,
    FlashMessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
