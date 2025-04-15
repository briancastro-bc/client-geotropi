import {
    FC,
} from 'react';
import { Upload, UploadProps, } from 'antd';

type CustomDraggerProps = UploadProps & object;

const CustomDragger: FC<CustomDraggerProps> = (props) => {
    return (
        <Upload.Dragger {...props}>
            {props.children}
        </Upload.Dragger>
    );
};

export default CustomDragger;