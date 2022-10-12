Steps to run:
1. Checkout branch dev: "gco dev"
2. Install node modules: "yarn install"
3. Run pod install: "cd ios && pod install"
4. Go back: "cd .."
5. Run on iPhone: "yarn ios"
6. Run on Android: "yarn android"

Additional info:
- This project uses these libraries: 
    + State management: Redux, Redux-Saga
    + Fetch API: apisauce
    + Mutiple language: i18next
    + UI library: https://reactnativeelements.com/
- Use Flipper to debug: https://fbflipper.com/docs/features/react-native/