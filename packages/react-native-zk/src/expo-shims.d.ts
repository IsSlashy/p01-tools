// Type stubs for peer and optional dependencies
// In a real project these come from @types/react, react-native-webview, expo-*
// These minimal stubs allow standalone type-checking without installing all peers

declare module 'react-native-webview' {
  import type { Component } from 'react';
  export interface WebViewMessageEvent {
    nativeEvent: { data: string };
  }
  export default class WebView extends Component<any> {
    injectJavaScript(script: string): void;
    postMessage(message: string): void;
  }
}

declare module 'expo-asset' {
  export class Asset {
    localUri: string | null;
    static fromModule(module: number): { downloadAsync(): Promise<Asset> };
  }
}

declare module 'expo-file-system' {
  export function readAsStringAsync(uri: string, options?: { encoding?: string }): Promise<string>;
}
