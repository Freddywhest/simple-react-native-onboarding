# <OnboardingScreen />

Numerous approaches exist for introducing users to your mobile app, but in the realm of React Native, a standout option is the "simple-react-native-onboarding" component. This component is not only simple to set up but also offers high levels of customization.

Rather than immersing your new users directly into complex features, it's advisable to provide them with a pleasant and delightful introduction. Allow them to gradually explore the various facets of your impressive app after this initial welcoming experience.

## Demo

Demo on Android and iOS

![Demo](https://i.ibb.co/MSNXLFW/Screenshot-62.png)
![Demo](https://i.ibb.co/yfd1rmj/Screenshot-63.png)

# Install

```bash
npm i simple-react-native-onboarding
```

# Usage
```js
import OnboardingScreen from 'simple-react-native-onboarding';

<OnboardingScreen
  data={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('./images/logo.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Screen',
    },
    ...
  ]}

  onFinished={() => {
    console.log('END')
  }}

  footerText='Footer text'

  footerStyle={{ 
    color: 'red'
   }}
/>
```

# Contributing
If you have a question, found a bug or want to propose a new feature, have a look at the [issues page](https://github.com/Freddywhest/simple-react-native-onboarding/issues).

# License
MIT