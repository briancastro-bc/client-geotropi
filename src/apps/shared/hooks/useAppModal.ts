import { App, } from 'antd'

export const useAppModal = () => {
    const { modal, } = App.useApp();
    return modal;
};