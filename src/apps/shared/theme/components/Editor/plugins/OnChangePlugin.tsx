import {
    FC,
    useEffect,
} from 'react';
import { EditorState, } from 'lexical';
import { useLexicalComposerContext, } from '@lexical/react/LexicalComposerContext';

type OnChangePluginProps = {
    onChange: (state: EditorState) => void;
};

const OnChangePlugin: FC<OnChangePluginProps> = ({
    onChange,
}) => {
    const [editor,] = useLexicalComposerContext();

    useEffect(() => {
        return editor.registerUpdateListener(({ editorState, }) => {
            onChange(editorState);
        });
    }, [editor, onChange,]);

    return null;
};

export default OnChangePlugin;