import { ReactElement } from 'react';
import { render, renderHook, RenderHookOptions, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import tabReducer from '@/store/slices/tabSlice';
import { RootState } from '@/store';

const INITIAL_STATE = {
    tabs: { tabs: [], activeTabId: null },
};

interface StoreProviderProps extends Omit<RenderOptions, 'queries'> {
    children: React.ReactNode;
    preloadedState?: RootState;
}

function StoreProvider({ children, preloadedState = INITIAL_STATE }: StoreProviderProps) {
    return (
        <Provider store={configureStore({ reducer: { tabs: tabReducer }, preloadedState})}>
            {children}
        </Provider>
    );
}

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: RootState;
}

export function renderWithRedux(
    ui: ReactElement,
    {
        preloadedState = INITIAL_STATE,
        ...renderOptions
    }: ExtendedRenderOptions = {},
) {
    return render(
        ui,
        {
            wrapper: props => StoreProvider({ children: props.children, preloadedState }),
            ...renderOptions
        }
    );
}

export function renderHookWithRedux<TResult, TProps>(
    hook: (props: TProps) => TResult,
    options?: Omit<RenderHookOptions<TProps>, 'wrapper'>,
    preloadedState?: RootState
) {
    return renderHook<TResult, TProps>(
        hook,
        {
            wrapper: props => <StoreProvider preloadedState={preloadedState}>{props.children}</StoreProvider>,
            ...options
        }
    );
}

export * from '@testing-library/react';