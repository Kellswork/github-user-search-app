import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode; // This is necessary to define children prop
}

interface ErrorBoundaryState {
  hasError: boolean;
}
class ErrorBoundray extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ hasError: true });
    console.error("Error caught in ErrorBoundary", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      <div>
        <p>something went wrong</p>
        <p> retry again </p>
      </div>;
    }
    return this.props.children;
  }
}
export default ErrorBoundray;
