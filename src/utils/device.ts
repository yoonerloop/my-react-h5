import { UAParser } from 'ua-parser-js';
/**
 * 类似于 uni.getSystemInfo 的方法实现
 */

export interface SystemInfo {
  /**
   * 设备品牌
   */
  brand: string;
  /**
   * 设备型号
   */
  model: string;
  /**
   * 设备像素比
   */
  pixelRatio: number;
  /**
   * 屏幕宽度
   */
  screenWidth: number;
  /**
   * 屏幕高度
   */
  screenHeight: number;
  /**
   * 可使用窗口宽度
   */
  windowWidth: number;
  /**
   * 可使用窗口高度
   */
  windowHeight: number;
  /**
   * 状态栏的高度
   */
  statusBarHeight: number;
  /**
   * 导航栏的高度
   */
  navigationBarHeight: number;
  /**
   * 标题栏的高度
   */
  titleBarHeight: number;
  /**
   * 应用设置的语言
   */
  language: string;
  /**
   * 引擎版本号
   */
  version: string;
  /**
   * 操作系统版本
   */
  system: string;
  /**
   * 客户端平台
   */
  platform: string;
  /**
   * 用户字体大小设置
   */
  fontSizeSetting: number;
  /**
   * 客户端基础库版本
   */
  SDKVersion: string;
  /**
   * 当前运行环境
   */
  environment: string;
  /**
   * 浏览器信息
   */
  browser: string;
}

export interface SystemInfoOptions {
  success?: (res: SystemInfo) => void;
  fail?: (error: any) => void;
  complete?: () => void;
}

function getSystemInfo(options: SystemInfoOptions): void {
  try {
    const parser = new UAParser();
    const uaResult = parser.getResult();
    const systemInfo = {
      brand: '', // 品牌
      model: uaResult.device?.model || '', // 设备型号
      pixelRatio: window.devicePixelRatio || 1, // 像素比
      screenWidth: window.screen.width || 0, // 屏幕宽度
      screenHeight: window.screen.height || 0, // 屏幕高度
      windowWidth: document.documentElement.clientWidth || window.innerWidth || 0, // 窗口宽度
      windowHeight: document.documentElement.clientHeight || window.innerHeight || 0, // 窗口高度
      statusBarHeight: 0, // 状态栏高度
      navigationBarHeight: 0, // 导航栏高度
      titleBarHeight: 0, // 标题栏高度
      language: navigator.language || 'zh-CN', // 语言
      version: uaResult.browser.version || '', // 版本
      system: `${uaResult.os.name} ${uaResult.os.version}`, // 系统
      platform: uaResult.os.name || '', // 平台
      fontSizeSetting: 16, // 字体大小设置
      SDKVersion: '', // 客户端基础库版本
      environment: '', // 运行环境
      browser: uaResult.browser.name || '' // 浏览器信息
    };
    setTimeout(() => {
      options.success && options.success(systemInfo);
      options.complete && options.complete();
    }, 0);
  } catch (error) {
    setTimeout(() => {
      options.fail && options.fail(error);
      options.complete && options.complete();
    }, 0);
  }
}

export { getSystemInfo };