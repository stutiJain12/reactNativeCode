```Redux```

Redux is a predictable state container for JavaScript apps. It helps you manage application state in a consistent way, making it easier to handle complex state logic and debug your application. Redux works by using a single store to hold the entire state of your app. Actions are dispatched to describe state changes, and reducers handle these actions to update the state accordingly. By integrating Redux with React Native, you can keep your app's state predictable and manageable, leading to better maintainability and scalability.

**The module includes functions for:**
1. Storing Data: Save data in Redux.
2. Retrieving Data: Retrieve data as a string or JSON.
3. Clearing Data: Clear all Redux Data.

By using these functions, you can simplify your code and maintain consistency across your application.

***

```AuthSlice.ts```

The Auth Slice is a part of the Redux state that manages authentication-related data, such as user information and login status. It includes actions and reducers specifically for handling authentication operations, making it easier to manage and update authentication state throughout your app

***

```Hooks.ts```

Redux Hooks are functions provided by the react-redux library that allow you to interact with the Redux store in a more concise and modern way. useDispatch is used to dispatch actions to the Redux store, while useSelector is used to access the current state from the store. These hooks help you integrate Redux with functional React components efficiently.

***

```RootReducer.ts```

The RootReducer combines all your individual reducers into a single root reducer function. This function aggregates the state updates from various slices of your application, ensuring that the state is managed in a consistent manner across different parts of the app.

***

```Store.ts```

The Redux Store is the central repository that holds the application's state. It is created using the createStore function and integrates the root reducer and middleware. The store is responsible for dispatching actions and updating the state based on the actions processed by reducers.

***

```OTPTimer.ts```

The OTP Timer is a component designed to handle the countdown for OTP (One-Time Password) validation. It displays a timer that counts down from a set duration (e.g., 60 seconds) and updates the UI accordingly. This timer is typically used to limit the validity of an OTP and prompt users to request a new code once the timer expires. The OTP Timer helps improve user experience by providing visual feedback on the remaining time to enter the OTP before it becomes invalid.

***
