import {
    FC,
} from 'react';
import { Upload, UploadProps, } from 'antd';

type CustomUploadProps = UploadProps & object;

const CustomUpload: FC<CustomUploadProps> = (props) => {
    return (
        <Upload {...props}>
            {props.children}
        </Upload>
    );
};

export default CustomUpload;