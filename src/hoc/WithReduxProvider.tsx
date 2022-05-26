import {Component, ComponentType} from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

function WithReduxProvider(WrappedComponent: ComponentType) {

    return class extends Component {

        constructor(props: any) {
            super(props);
        }

        render(): React.ReactNode {
            return (
                <Provider store={store}>
                    <WrappedComponent {...this.props} />
                </Provider>
            )
        }
    }
}

export default WithReduxProvider;