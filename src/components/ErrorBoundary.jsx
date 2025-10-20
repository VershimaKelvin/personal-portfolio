// import { Component } from "react";

// class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   componentDidCatch(error, info) {
//     console.error("Error caught by ErrorBoundary:", error, info);
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
//           <h1 className="text-3xl font-bold text-red-500 mb-2">
//             Something went wrong 😢
//           </h1>
//           <p className="text-gray-600 mb-4">
//             Please refresh the page or try again later.
//           </p>
//           <button
//             onClick={() => window.location.reload()}
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg"
//           >
//             Reload Page
//           </button>
//         </div>
//       );
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;






import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("❌ Error caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            Oops! Something went wrong 😢
          </h1>
          <p className="text-gray-700 mb-6">
            An unexpected error occurred. Try reloading the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
