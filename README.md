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

const data = [
    {
        _id: '1',
        title: 'Play The Beat',
        description: 'Most beginner producers learn make creating by simple beats.',
        image: <LottieView style={styles.lottie} autoPlay source={require('../assets/onboarding/store-2.json')} />
    },
    {
        _id : '2',
        title: 'Live The Life',
        description: 'In our daily lives, we often rush tasks trying to get them finish.',
        image: <Image
            source={{ uri: 'https://i.ytimg.com/vi/VMF1i5I2imE/maxresdefault.jpg' }}
            style={{width: SCREEN_WIDTH*0.9, height: SCREEN_WIDTH}}
        />
    },
    {
      _id : '3',
      title: 'Capture The Moment',
      description: 'You are not alone. You have unique ability to go to another world.',
      image: <Image
        source={{ uri: 'https://i.ytimg.com/vi/VMF1i5I2imE/maxresdefault.jpg' }}
        style={{width: SCREEN_WIDTH*0.9, height: SCREEN_WIDTH}}
      /> 
    },
  ]
  
<OnboardingScreen 
    data={data} 
    dotBackgroundColor='green' 
    onFinish={
        () => {console.log('Done.....');
    }} 
    buttonIconColor='white'
/>
```

# Contributing
If you have a question, found a bug or want to propose a new feature, have a look at the [issues page](https://github.com/Freddywhest/simple-react-native-onboarding/issues).

# License
MIT