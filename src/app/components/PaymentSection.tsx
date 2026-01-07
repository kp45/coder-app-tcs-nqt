import { QrCode, MessageCircle, Check, Shield, ArrowLeft } from 'lucide-react';

interface PaymentSectionProps {
  onNavigate?: (tab: string) => void;
}

const PAYMENT_PHONE = "7383160724";
const WHATSAPP_NUMBER = "7383160724";
const QR_CODE_URL = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5Q1MfMbWvp34bRs-wTGFJvPL7QpbuaRDWdOW5KiRYJuWBsJX5zPkxgcT9DXTvGTAJdsU_Tg4fs1zy19M1ZvO1Fx81NgovDd4eg_Iskx8zSV6r6hhknCjIPPq-g_zi_N0pE7VbaUzaQ4IawLXHwXg1y22K0pWQ8spCwp1kkSod5fOvD4A2nCJ70yASc8E/s320/1000136275.png";

export function PaymentSection({ onNavigate }: PaymentSectionProps) {
  const handleCopyNumber = (number: string) => {
    // Try modern clipboard API first
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(number)
        .then(() => {
          showFeedback('✓ Copied');
        })
        .catch(() => {
          // Fallback: show number in alert for manual copy
          fallbackCopy(number);
        });
    } else {
      // Fallback for older browsers or when clipboard is blocked
      fallbackCopy(number);
    }
  };

  const fallbackCopy = (text: string) => {
    // Create a temporary input element
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.top = '0';
    textarea.style.left = '0';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        showFeedback('✓ Copied');
      } else {
        // If all else fails, show in alert
        alert(`Copy this number:\n\n${text}`);
      }
    } catch (err) {
      // Last resort: show in alert
      alert(`Copy this number:\n\n${text}`);
    } finally {
      document.body.removeChild(textarea);
    }
  };

  const showFeedback = (message: string) => {
    // iOS-style haptic feedback simulation
    const feedback = document.createElement('div');
    feedback.className = 'fixed top-20 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium shadow-xl z-50 animate-fade-in';
    feedback.textContent = message;
    document.body.appendChild(feedback);
    setTimeout(() => {
      feedback.classList.add('animate-fade-out');
      setTimeout(() => {
        if (document.body.contains(feedback)) {
          document.body.removeChild(feedback);
        }
      }, 300);
    }, 1500);
  };

  const handleOpenWhatsApp = () => {
    const message = encodeURIComponent("Hi! I've completed the payment for TCS NQT Prep Bundle (₹480). Sending payment screenshot.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const handlePaymentComplete = () => {
    alert('✅ Thank you! We will verify your payment and send the bundle within 24 hours.');
    onNavigate?.('home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Back Button */}
      <div className="pt-2 pb-4">
        <button
          onClick={() => onNavigate?.('bundle')}
          className="flex items-center gap-2 text-blue-600 font-medium active:scale-95 transition-transform"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="space-y-6 pb-6">
        {/* Header */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
            <QrCode className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Pay with UPI</h1>
          <p className="text-gray-500">Scan QR or send to number</p>
        </div>

        {/* Amount Card - Prominent */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Total Amount</p>
            <div className="flex items-end justify-center gap-2 mb-4">
              <span className="text-6xl font-bold text-gray-900">₹480</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium text-green-700">52% OFF • Save ₹519</span>
            </div>
          </div>
        </div>

        {/* QR Code - Hero Element */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Scan QR Code</h2>
            <p className="text-sm text-gray-500">Use any UPI app to pay</p>
          </div>
          
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white p-6 rounded-3xl shadow-xl border-2 border-gray-100">
                <img 
                  src={QR_CODE_URL} 
                  alt="Payment QR Code" 
                  className="w-56 h-56 rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <QrCode className="w-4 h-4" />
            <span>PhonePe • Google Pay • Paytm • Any UPI</span>
          </div>
        </div>

        {/* OR Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-sm font-medium text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* UPI Number Card */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Send to UPI Number</h3>
            <p className="text-sm text-gray-500">Enter this number in your UPI app</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-4 border border-blue-100">
            <p className="text-3xl font-bold text-center text-gray-900 tracking-wider font-mono">
              {PAYMENT_PHONE}
            </p>
          </div>

          <button
            onClick={() => handleCopyNumber(PAYMENT_PHONE)}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold shadow-lg active:scale-[0.98] transition-all"
          >
            Copy Number
          </button>
        </div>

        {/* Steps - Minimal */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 border border-purple-100">
          <h3 className="font-semibold text-gray-900 mb-4">After Payment</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <p className="text-sm text-gray-700">Take screenshot of payment confirmation</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <p className="text-sm text-gray-700">Send screenshot on WhatsApp</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <p className="text-sm text-gray-700">Get bundle access within 24 hours</p>
            </div>
          </div>
        </div>

        {/* WhatsApp Button - Prominent */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-gray-900">Send Screenshot</h3>
              <p className="text-sm text-gray-500">WhatsApp verification</p>
            </div>
            <MessageCircle className="w-6 h-6 text-green-600" />
          </div>

          <button
            onClick={handleOpenWhatsApp}
            className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-semibold shadow-lg shadow-green-500/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Open WhatsApp
          </button>

          <div className="mt-3 text-center">
            <button
              onClick={() => handleCopyNumber(PAYMENT_PHONE)}
              className="text-sm text-blue-600 font-medium"
            >
              Copy number instead
            </button>
          </div>
        </div>

        {/* Completion Button */}
        <button
          onClick={handlePaymentComplete}
          className="w-full py-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-3xl font-semibold shadow-xl shadow-gray-900/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <Check className="w-5 h-5" />
          I've Sent the Payment
        </button>

        {/* Security Badge */}
        <div className="flex items-center justify-center gap-2 text-gray-400 pb-4">
          <Shield className="w-4 h-4" />
          <span className="text-xs font-medium">Secure Payment • 24/7 Support</span>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translate(-50%, -10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        
        @keyframes fade-out {
          from {
            opacity: 1;
            transform: translate(-50%, 0);
          }
          to {
            opacity: 0;
            transform: translate(-50%, -10px);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-fade-out {
          animation: fade-out 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
