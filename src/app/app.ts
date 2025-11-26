import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal($localize`:@@appTitle:Internationalization`);

  protected readonly pills = [
    {
      title: $localize`:@@exploreDocs:Explore the Docs`,
      link: 'https://angular.dev'
    },
    {
      title: $localize`:@@learnTutorials:Learn with Tutorials`,
      link: 'https://angular.dev/tutorials'
    },
    {
      title: $localize`:@@aiBestPractices:Prompt and best practices for AI`,
      link: 'https://angular.dev/ai/develop-with-ai'
    },
    {
      title: $localize`:@@cliDocs:CLI Docs`,
      link: 'https://angular.dev/tools/cli'
    },
    {
      title: $localize`:@@languageService:Angular Language Service`,
      link: 'https://angular.dev/tools/language-service'
    },
    {
      title: $localize`:@@devTools:Angular DevTools`,
      link: 'https://angular.dev/tools/devtools'
    }
  ];
}
