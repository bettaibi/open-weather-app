import React from 'react';
import ErrorFallback from '../Fallback/ErrorFallback';

interface ErrorBoundaryProps{
    hasError: boolean;
}
export class ErrorBoundary extends React.Component<any, ErrorBoundaryProps> {

    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        // You can also log the error to an error reporting service
        console.error(error, errorInfo);
    }

    render(): React.ReactNode {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <ErrorFallback />;
        }
        
        return this.props.children;
    }
}

