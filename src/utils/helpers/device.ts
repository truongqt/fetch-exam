import { Dimensions, Platform } from 'react-native';

const designWidth = 375;

let device = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    designWidth: designWidth,
    scale: Dimensions.get('window').width / designWidth,
};
const scale = (size: number) => {
    return Math.round(size * device.scale);
};

const isIos = () => {
    return Platform.OS == 'ios';
};

export {
    device,
    scale,
    isIos,
};
