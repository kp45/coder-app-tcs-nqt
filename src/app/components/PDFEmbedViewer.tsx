import { useState } from 'react';
import { FileText, Loader2 } from 'lucide-react';

interface PDFEmbedViewerProps {
  pdfUrl: string;
}

export function PDFEmbedViewer({ pdfUrl }: PDFEmbedViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Convert Google Drive view URL to preview URL
  const getPreviewUrl = (url: string) => {
    if (url.includes('drive.google.com')) {
      return url.replace('/view', '/preview');
    }
    return url;
  };

  const previewUrl = getPreviewUrl(pdfUrl);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="relative w-full h-full">
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 z-10">
          <div className="text-center">
            <div className="relative mb-4">
              <div className="w-16 h-16 rounded-full border-4 border-blue-100 mx-auto"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-700">Loading PDF...</p>
            <p className="text-xs text-gray-500 mt-1">This may take a few seconds</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && !isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 z-10">
          <div className="text-center px-6">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-red-600" />
            </div>
            <p className="text-sm font-semibold text-gray-900 mb-2">Unable to load PDF</p>
            <p className="text-xs text-gray-600 mb-4">Please check your internet connection and try again</p>
            <button
              onClick={() => {
                setHasError(false);
                setIsLoading(true);
                // Force iframe reload
                const iframe = document.querySelector('iframe[title="PDF Preview"]') as HTMLIFrameElement;
                if (iframe) {
                  iframe.src = iframe.src;
                }
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium active:scale-95 transition-transform"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* PDF iframe */}
      <iframe
        src={previewUrl}
        className="w-full h-full border-0"
        title="PDF Preview"
        onLoad={handleLoad}
        onError={handleError}
        allow="autoplay"
      />

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}