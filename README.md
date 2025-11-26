# Internationalization

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```
This will generate separate output folders for each locale under `.\dist\appname\browser` (e.g., `.\dist\appname\browser\fr`, `.\dist\appname\browser\de`). By default, the production build optimizes your application for performance and speed.

## Internationalization (i18n)

This project is configured for Angular i18n. Translation files are located in `src/locale/`.

### Building for a specific locale

You can build for a specific locale using:
```bash
ng build --configuration=fr
ng build --configuration=de
```
Note: Running these commands separately will overwrite the contents of the `.\dist\appname\browser` folder with each build. For example, running `ng build --configuration=fr` after `ng build --configuration=de` will replace the previous German build with the French build.

### Marking text for translation

Use the `i18n` attribute in templates:
```html
<h1 i18n="@@hello">Hello, {{ title() }}</h1>
```

### Extracting translatable strings

Run:
```bash
ng extract-i18n --output-path src/locale
```
This generates the default `messages.xlf` file.

### Adding languages

Add translation files (e.g., `messages.fr.xlf`, `messages.de.xlf`) in `src/locale/`.

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