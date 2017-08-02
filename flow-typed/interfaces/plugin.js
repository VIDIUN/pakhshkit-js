//@flow

/**
 * @memberof Interfaces
 * @interface IPlugin
 */
declare interface IPlugin {
  getConfig(attr?: string): any;

  updateConfig(update: Object): void;

  destroy(): void;
}
