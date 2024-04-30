# React Native Exercises
In this repository, I will post my progress in doing some React Native exercises. In my humble opinion, these exercises will give you a great start for developing applications in React Native

## First application: Custom Font
To do these, you should step forward by these steps:
1. Download some font (e.g Google Fonts)
2. Add font file to src/assets/fonts
3. Create react-native.config.js file
4. Write code for the module
5. Setup @react-native-asset library
6. Style your text component with new font (fontFamily)

## Second application: Custom SVG picture
To do these, you should step forward by these steps:
1. Download some SVG picture
2. Add this picture to your project (e.g src/svg/Heart.svg)
3. Download react-native-svg library (also, I added react-native-svg-transformer to my project)
4. Create file declarations.d.ts and write code (more details you can read in [documentation](https://github.com/kristerkari/react-native-svg-transformer))
5. Create file metro.config.js (if it doesn't exist)
6. Write code for config (more details in [library documentation](https://github.com/kristerkari/react-native-svg-transformer))
7. Add SVG picture as a component to App.tsx

Documentation
1. [React Native SVG](https://www.npmjs.com/package/react-native-svg)
2. [React Native SVG transformer](https://github.com/kristerkari/react-native-svg-transformer)

## Third application: Gradient background
If you want to make a program with a gradient background, you should follow these steps:
1. Add react-native-linear-gradient library
2. Import component to your App.tsx
3. Wrap view component to LinearGradient component
4. Write some style code for your components

Documentation
1. [React Native Linear Gradient](https://www.npmjs.com/package/react-native-linear-gradient)

## Fourth application: Masked View Component
With this additional component, you can make such a beautiful styling for your text. So, for this, you should follow these steps:
1. Add react-native-masked-view library to your project
2. Wrap view component which has text you want to style
3. Style your component (this code will be after <MaskedView>)

Documentation
1. [React Native Masked View](https://www.npmjs.com/package/@react-native-masked-view/masked-view)

## Fifth application: React Navigation
I think this is an essential library for creating navigation between screens in React Native projects. So, if you want to use this technology in your project, you should follow these steps:
1. Add  @react-navigation/native library to your project
2. Add dependencies (how to do this you can watch in documentation)
3. Choose the type of navigation you want to use (Stack, Drawer, Tab, etc.)
4. Add a library based on your choice (for example, stack)
5. Make some screens
6. Import libraries to your App.tsx
7. Write code for navigation
8. Write the route on screen from which you want to go

Documentation
1. [React Navigation](https://reactnavigation.org/docs/getting-started)

## Sixth application: React Config
With this library, you can add .env file to your project to save config variables. But you should be careful with this technology because it doesn't encrypt your variables. So, for this, you should follow these steps:
1. Install react-native-config to your project
2. Create .env file (also, a good practice is to add this file to .gitignore)
3. Add variables to file
4. Import Config to screen code
5. Use these variables whenever you want

Documentation
1. [React Native Config](https://www.npmjs.com/package/react-native-config)

## Seventh application: Splash Screen
As you know, the splash screen is a screen that reveals when you first start an application (the app isn't in the tray). And, with the library react-native-splash-screen, you can easily create and customize this screen. So, you should follow these steps:
1. Add react-native-splash-screen library to your project
2. Add to core files of your platform assets that you want to add to the splash screen
3. Import the library to your project
4. With useEffect hook add code from the documentation

Documentation
1. [React Native Splash Screen](https://www.npmjs.com/package/react-native-splash-screen)

## Eighth application: Flash Message
If you want to make a beautiful app with a great user experience - flash messages is thing you have to use. To provide this feature to your app, you should follow these steps:
1. Install react-native-flash-message library
2. Import methods and FlashMessage component to your screen
3. Add buttons, write code for show or hide message
4. Lastly, add the FlashMessage component before the end of the view

Documentation
1. [React Native Flash Message](https://www.npmjs.com/package/react-native-flash-message)
