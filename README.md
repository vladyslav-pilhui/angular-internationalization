# Internationalization

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.


## Internationalization (i18n)

This project is configured for Angular i18n. Translation files are located in `src/locale/`.

### Extracting translatable strings

Run:
```bash
ng extract-i18n --output-path src/locale
```
This generates the default `messages.xlf` file.

### Adding languages

Add translation files (e.g., `messages.fr.xlf`, `messages.de.xlf`) in `src/locale/`.

### Building for a specific locale

You can build for a specific locale using:
```bash
Note: Running these commands separately will overwrite the contents of the `dist/Internationalization` folder with each build. For example, running `ng build --configuration=fr` after `ng build --configuration=de` will replace the previous German build with the French build.

#### Building all locales at once

To build all configured locales (e.g., French, German, and default) in one step and avoid overwriting, use:
```bash
ng build --localize
```
This will generate separate output folders for each locale under `dist/Internationalization/` (e.g., `dist/Internationalization/fr`, `dist/Internationalization/de`).

### Marking text for translation

Use the `i18n` attribute in templates:
```html
<h1 i18n="@@hello">Hello, {{ title() }}</h1>
```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Serving Localized Versions

To run the localized versions of the site, please install the http-server package globally:

```
npm install -g http-server
```

Then run the server from your project root:

```
http-server .\dist\Internationalization\browser --port 8080
```

Each locale version will be available at:

- http://localhost:8080/en/
- http://localhost:8080/fr/
- http://localhost:8080/de/
