import * as React from 'react';
import Option from './Option';
export interface Props {
    option: Option;
    defaultOption: React.ComponentClass | string;
}
export default class Selector extends React.Component<Props> {
    static contextTypes: {
        optionContext: any;
    };
    private get optionContext();
    componentDidMount(): void;
    componentDidUpdate(nextProps: Props & {
        children?: React.ReactNode;
    }): void;
    componentWillUnmount(): void;
    render(): null;
    private optionContextUpdate;
    private updateOptionValues;
}
