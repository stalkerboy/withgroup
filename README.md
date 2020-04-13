android\app\build.gradle

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"




node_modules\react-native-floating-action\src\FloatingAction.js

    if (animated) {
      Animated.spring(this.animation, { toValue: 0,
        useNativeDriver: true }).start();
      Animated.spring(this.actionsAnimation, { toValue: 0,
        useNativeDriver: true }).start();
    }