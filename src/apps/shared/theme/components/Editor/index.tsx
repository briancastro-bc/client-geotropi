import {
    FC,
    useMemo,
    useState,
} from 'react';
import { EditorState, } from 'lexical';
import {
    LexicalComposer,
    InitialConfigType,
} from '@lexical/react/LexicalComposer';
import { AutoLinkNode, } from '@lexical/link';
import { ContentEditable, } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary, } from '@lexical/react/LexicalErrorBoundary';

import {
    HistoryPlugin,
    RichTextPlugin,
    OnChangePlugin,
    AutoLinkPlugin,
    AutoFocusPlugin,
    SelectionAlwaysOnDisplay,
} from 'theme/components/Editor/plugins';

const theme: InitialConfigType['theme'] = {};

const URL_MATCHER =
    /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

const MATCHERS = [
    (text: string) => {
        const match = URL_MATCHER.exec(text);
        if (match === null) return null;
        const fullMatch = match[0];
        return {
            index: match.index,
            length: fullMatch.length,
            text: fullMatch,
            url: fullMatch.startsWith('http') ? fullMatch : `https://${fullMatch}`,
            attributes: {
                rel: 'noreferrer',
                target: '_blank',
            },
        };
    },
];

type EditorProps = {
    value?: string;
    onChange?: (content: string) => void;
    isEditable?: boolean;
};

const Editor: FC<EditorProps> = ({
    value: currentValue,
    onChange,
    isEditable = true,
}) => {
    const [value, setValue,] = useState<string>(currentValue || '');

    const initialConfig: InitialConfigType = useMemo(
        () => ({
            namespace: 'Editor',
            theme,
            editable: true,
            onError: (err: any) => console.error(err),
            nodes: [
                AutoLinkNode,
            ],
        }),
        []
    );

    const handleOnChange = (editorState: EditorState) => {
        const stateAsJson = JSON.stringify(editorState.toJSON());
        setValue(stateAsJson);

        if (onChange) onChange(stateAsJson);
    };

    return (
        <LexicalComposer initialConfig={initialConfig}>
            {isEditable &&
                <RichTextPlugin
                    contentEditable={
                        <ContentEditable
                            value={value}
                            className='relative bg-white py-[7px] px-[11px] min-h-8 border rounded-[8px] border-[#d9d9d9] text-base focus:outline-none max-h-40 overflow-y-auto'
                        />
                    }
                    ErrorBoundary={LexicalErrorBoundary}
                />
            }
            <HistoryPlugin/>
            <AutoFocusPlugin/>
            <SelectionAlwaysOnDisplay/>
            <OnChangePlugin onChange={handleOnChange}/>
            <AutoLinkPlugin matchers={MATCHERS}/>
        </LexicalComposer>
    );
};

export default Editor;