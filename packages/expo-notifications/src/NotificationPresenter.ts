import { NativeModulesProxy, ProxyNativeModule } from '@unimodules/core';

import { Notification, NotificationContentInput } from './Notifications.types';

export interface NotificationPresenterModule extends ProxyNativeModule {
  getPresentedNotificationsAsync: () => Promise<Notification[]>;
  presentNotificationAsync: (
    identifier: string,
    content: NotificationContentInput
  ) => Promise<string>;
  dismissNotificationAsync: (identifier: string) => Promise<void>;
  dismissAllNotificationsAsync: () => Promise<void>;
}

export default (NativeModulesProxy.ExpoNotificationPresenter as any) as NotificationPresenterModule;
