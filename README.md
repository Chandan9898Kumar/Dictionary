# Dictionary App

This is a dictionary app built with React. It allows users to search for words and get their definitions, phonetics, parts of speech, and synonyms. The app also supports offline usage with a service worker.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
```sh
   git clone https://github.com/your-username/dictionary.git
   cd dictionary
```

2. Install the dependencies

```sh
npm install
```

`Usage`
Start the development server:

```sh
npm start
```

`Features`
1. Search for word definitions, phonetics, parts of speech.
2. synonyms.
3. Offline support with a service worker.
4. Light and dark themes.
5. Font customization options.


## Project Structure

```
.env
.gitignore
.npmrc
.prettierignore
.prettierrc
build/
public/
  ServiceWorker.js
README.md
src/
  Components/
    App/
      Container/
        Content/
          Definitions/
            Header/
              Header.js
              styles.css
            PartsOfSpeech/
              PartsOfSpeech.js
              styles.css
            Source/
              Source.js
              styles.css
            Definitions.js
            styles.css
          Message/
            Message.js
            styles.css
          Content.js
          styles.css
        LoadingScreen/
          LoadingScreen.js
          styles.css
        Container.js
        styles.css
      NavigationBar/
        FontOptions/
          FontOptions.js
          styles.css
        LightSwitch/
          ChangeTheme/
            ChangeTheme.js
          LightSwitch.js
          styles.css
        Icons/
          index.js
        NavigationBar.js
        styles.css
      SearchBar/
        MakeAsyncCall/
          MakeAsyncCall.js
        SearchBar.js
        styles.css
      App.js
      styles.css
    FontFiles/
      Inter-VariableFont_slnt,wght.ttf
      Inconsolata-VariableFont_wdth,wght.ttf
      Inter-Bold.ttf
      Inter-Regular.ttf
      Lora-VariableFont_wght.ttf
      Lora-Italic-VariableFont_wght.ttf
    Store/
      Reducer/
        Reducer.js
        index.js
      Store.js
    App.test.js
    index.js
    reportWebVitals.js
    setupTests.js
webpack.config.js
package.json
```