import * as React from "react";
import { Code } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Inspirational Quote */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <Code className="w-8 h-8 text-blue-400" />
            </div>
            <blockquote className="text-xl md:text-2xl font-light text-gray-300 italic mb-4 max-w-3xl mx-auto leading-relaxed">
              "The best way to predict the future is to create it."
            </blockquote>
            <cite className="text-gray-400 text-sm">— Peter Drucker</cite>
          </div>

          {/* Simple Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © {currentYear} Mohamed Bahgat. Built with passion and code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
