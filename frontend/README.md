# Frontend

## Known issues
I have a proxy.conf.json file. This will proxy my api calls to the backend, but this should not be used for production. 
I believe something like nginx should be used.

### todo:
- https://pusher.com/websockets
- https://medium.com/oril/spring-boot-websockets-angular-5-f2f4b1c14cee


## Development server

Run ` ng serve --proxy-config ./proxy.conf.json ` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
