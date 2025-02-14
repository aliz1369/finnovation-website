import React from "react";

interface CallToActionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title = "Ready to start your AI journey with us?",
  description = "Simple, transparent pricing. No setup fees or contracts. Try without a credit card, cancel anytime.",
  primaryButtonText = "Explore Our Solutions →",
  secondaryButtonText = "Book a Demo",
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <section className="relative overflow-hidden h-auto md:h-[calc(100vh-4rem)]">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #e9f2fa 0%, #ffffff 100%)",
        }}
      />
      <div
        className="relative max-w-4xl mx-auto h-full flex flex-col
                   items-center justify-center px-6 text-center z-10"
      >
        <h2 className="text-5xl sm:text-7xl font-light text-gray-900 mb-6">
          {title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-light text-gray-400 max-w-2xl mb-8">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={onPrimaryClick}
            className="bg-[#3277BC] text-white px-6 py-3
                       rounded-full hover:bg-[#2b66a2] transition-colors
                       font-light"
          >
            {primaryButtonText}
          </button>
          <button
            onClick={onSecondaryClick}
            className="border border-gray-300 px-6 py-3
                       rounded-full hover:bg-gray-100 transition-colors
                       font-light flex items-center space-x-2"
          >
            <span>{secondaryButtonText}</span>
            <img src="/bd.png" alt="Calendar" className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
