// src/components/ErrorBoundary.tsx
import { Component, ReactNode } from "react";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorPage error={this.state.error} />;
    }

    return this.props.children;
  }
}

// Helper component to display errors
function ErrorPage({ error }: { error?: Error }) {
  const routeError = useRouteError();

  let errorMessage: string;

  if (isRouteErrorResponse(routeError)) {
    // Handle router errors
    errorMessage = `${routeError.status} ${routeError.statusText}`;
  } else if (error) {
    // Handle component errors
    errorMessage = error.message;
  } else {
    // Unknown errors
    errorMessage = "Unknown error occurred";
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-gray-700 mb-2">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-gray-500 italic mb-6">{errorMessage}</p>

        <Link
          to="/"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Go back to home
        </Link>

        {process.env.NODE_ENV === "development" && error?.stack && (
          <details className="mt-6 text-sm text-gray-600">
            <summary>Error stack</summary>
            <pre className="mt-2 p-2 bg-gray-100 rounded overflow-auto">
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}

export default ErrorBoundary;
