import * as React from 'react';
declare function withContainers(...Containers: any[]): (WrappedComponent: any) => {
    new (props: Readonly<any>): {
        render(): JSX.Element;
        setState<K extends never>(state: ((prevState: undefined, props: Readonly<any>) => Pick<undefined, K> | null | undefined) | Pick<undefined, K> | null | undefined, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<any>;
        state: undefined;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: any, context?: any): {
        render(): JSX.Element;
        setState<K extends never>(state: ((prevState: undefined, props: Readonly<any>) => Pick<undefined, K> | null | undefined) | Pick<undefined, K> | null | undefined, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<any>;
        state: undefined;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
};
export default withContainers;
