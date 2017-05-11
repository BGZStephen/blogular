import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./app.routes"
import { FlashMessagesModule } from "angular2-flash-messages"

import { AppComponent } from './app.component';
import { DashboardNavbarComponent, DashboardNotificationBarComponent } from "./components/components-barrel"
import { HomeComponent, DashboardHomeComponent, BlogIndividualComponent, BlogHomeComponent } from "./pages/pages-barrel"
import { ArticleAddWidgetComponent } from "./widgets/widget-barrel";
import { DashboardAddArticleComponent } from './pages/dashboard/dashboard-add-article/dashboard-add-article.component'

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
    DashboardAddArticleComponent
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
