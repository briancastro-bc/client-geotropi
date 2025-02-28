import { App, } from 'antd';

export const useAppNotification = () => {
    const { notification, } = App.useApp();
    return notification;
};