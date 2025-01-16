import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http'; // Import provideHttpClient for standalone use

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()] // Use this provider for HttpClient in standalone setup
});
