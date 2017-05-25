#File Structure

    src
    |├── readme.md <-- You are here!
    ||      Hello, I am the readme.
    |└── config.json
    |       Config for npm compiling.
    ├── app
    │   ├── app.module.ts
    |   |       Placeholder file. Should be where Module AppModule is defined, but I'm currently... having issues. See: core.module.ts
    │   ├── assets
    │   │   ├── css
    │   │   │   ├── main.scss
    |   |   |   |       Default styling for anything outside of components.
    │   │   │   └── _reset.scss
    |   |   |           Overrides for CSS precociously applied by browers.
    │   │   ├── img
    │   │   │   └── There are pictures here.
    │   │   ├── js
    |   |   |       Placeholder.
    │   │   └── libs
    |   |           Placeholder.
    │   ├── components
    │   │   ├── APIService
    |   |   |   |   Components and services based on interaction with reddit API
    │   │   │   ├── submission-data-mocks.component.ts
    |   |   |   |       Provides preformated data for testing purposes
    │   │   │   ├── submission-data.service.ts
    |   |   |   |       Service providing submission data via http request and rxjs observables
    │   │   │   ├── submission-data.ts
    |   |   |   |       Provides model for submission data
    │   │   │   ├── submission-display.component.html
    |   |   |   |       Template for submission-display component
    │   │   │   ├── submission-display.component.scss
    |   |   |   |       Styling for submission-display component
    │   │   │   ├── submission-display.component.ts
    |   |   |   |       Creates DOM elements for submissions retrived from reddit based on template
    │   │   │   └── subreddit-url-provider.service.ts
                        Creates urls from arrays in multireddit.service make http requests in submission-data.service
    │   │   └── menuMultireddit
    |   |       |
    |   │       ├── menu-multireddit-display.component.html
    |   |       |       Template for displaying multireddit-selection component
    |   │       ├── menu-multireddit-display.component.scss
    |   |       |       Styling for multireddit-selection component
    |   │       ├── menu-multireddit-display.component.ts
    |   |       |       Creates menu options from multireddit.service; isSelected function adds css class and changes submissions displayed
    │   │       ├── multireddit.service.ts
    |   |       |       Provides preset arrays to create menus and JSON request urls
    │   │       └── multireddit.ts
    |   |               Data model for multireddit.service
    │   ├── core
    │   │   ├── core.module.ts
    |   |   |       Currently, where we're exporting AppModule from.
    │   │   └── core.service.ts
    |   |           Business logic.
    │   └── shared
    │       └── shared.module.ts
                    Placeholder file.
    ├── index.html
    |       This is index.html.
    ├── main.ts
    |       Single AppModule bootstrapped here and passed into index.html
    └── tsconfig.json
            Config file.


#Known Issues

##High Priority

* Self post text contains bbcode/HTML artifacts, impairing readablility.

* Imgur/giphy images not displaying.

##Low Priority

* Styling isn't optimum.

* Need to add throbber or similar for slower connections. Is the content loading? Is it not? We don't know currently! 