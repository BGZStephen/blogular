import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./app.routes"
import { FlashMessagesModule } from "angular2-flash-messages"
import { UsersApiService } from "./services/users-api.service"
import { ArticlesApiService } from "./services/articles-api.service"
import { AuthGuard } from "./guards/auth.guard"

import { AppComponent } from './app.component';
import { DashboardNavbarComponent, DashboardNotificationBarComponent } from "./components/components-barrel"
import { HomeComponent, DashboardHomeComponent, BlogIndividualComponent,
        BlogHomeComponent } from "./pages/pages-barrel";
import { ArticleAddWidgetComponent, ArticleEditWidgetComponent, ArticlesManageWidgetComponent,
        ProfileWidgetComponent, ProfileEditWidgetComponent, PasswordEditWidgetComponent } from "./widgets/widget-barrel";


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
    ArticleEditWidgetComponent,
    ArticlesManageWidgetComponent,
    ProfileWidgetComponent,
    ProfileEditWidgetComponent,
    PasswordEditWidgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router,
    FlashMessagesModule
  ],
  providers: [UsersApiService, ArticlesApiService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
