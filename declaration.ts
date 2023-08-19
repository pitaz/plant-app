declare module '*.svg' {
  import {FC} from 'react';
  import {SvgProps} from 'react-native-svg';

  interface Props extends SvgProps {
    top?: number | string;
    bottom?: number | string;
    width?: number | string;
    height?: number | string;
    right?: number | string;
    left?: number | string;
    marginRight?: number | string;
    alignSelf?:
      | 'center'
      | 'flex-end'
      | 'stretch'
      | 'flex-start'
      | 'baseline'
      | 'auto'
      | 'initial'
      | 'inherit';
    backgroundColor?: string;
    marginTop?: number | string;
    marginBottom?: number | string;
    style?: object;
  }

  const content: FC<Props>;
  export default content;
}

declare module '*.png';
