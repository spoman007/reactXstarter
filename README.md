# reactXstarter
React + Redux + React Native Starter Kit with reusable business logic. Sample TODO app built in.

https://youtu.be/9S3mpotVgXg?t=1833

![](/media/Screenshot.png)

# What is this Repository?

1. **Demo of how the code can be reused between React and React Native Application**
2. **Extracts the business logic to a seperate npm package**
3. **Uses Redux to write application business logic**: Actions and Reducers are extracted to a seperate npm package.


# Code Structure
1. **web**: A web application created using Create React App
2. **mobile**: Mobile app created using React Native cli
3. **core**: The npm package which contains extracted business logic(Actions, Reducers etc). This is reused in both web and mobile




# Sample Screenshots
**Mobile**
![](/media/Mobile.gif)

**Web**
![](/media/Web.gif)




# Other Options
1. Use Lerna and Yarn workspace to manage multiple packages. Here are couple of good implementations  
https://github.com/fixerteam/React-Native-monorepo  
https://github.com/drgx/react-native-plus-web

2. Use React Native Web  
https://blog.logrocket.com/the-state-of-react-native-web-in-2019-6ab67ac5c51e/
