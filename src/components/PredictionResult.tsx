
import React from 'react';
import { CheckCircle2, AlertTriangle, Bookmark, Info, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface PredictionResultProps {
  result: {
    status: 'healthy' | 'injured' | null;
    confidence: number;
    details?: string;
  };
  isLoading: boolean;
}

const PredictionResult: React.FC<PredictionResultProps> = ({ result, isLoading }) => {
  const isMobile = useIsMobile();
  
  if (isLoading) {
    return (
      <div className="w-full p-4 md:p-8 border border-muted rounded-xl animate-pulse bg-muted/20">
        <div className="h-6 md:h-8 bg-muted rounded-md w-3/4 mb-4 md:mb-6"></div>
        <div className="h-3 md:h-4 bg-muted rounded-md w-full mb-2 md:mb-3"></div>
        <div className="h-3 md:h-4 bg-muted rounded-md w-5/6 mb-2 md:mb-3"></div>
        <div className="h-3 md:h-4 bg-muted rounded-md w-4/6"></div>
      </div>
    );
  }
  
  if (!result.status) {
    return null;
  }
  
  return (
    <div className={cn(
      "w-full rounded-xl overflow-hidden transition-all duration-500 animate-float-up shadow-lg",
      result.status === 'healthy' ? 'bg-gradient-to-r from-jungle-moss/30 to-jungle-leaf/30 border-l-4 border-jungle-moss' : 'bg-gradient-to-r from-amber-100 to-amber-50 border-l-4 border-amber-400'
    )}>
      <div className="p-4 md:p-6">
        <div className="flex items-center mb-3 md:mb-4">
          {result.status === 'healthy' ? (
            <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-jungle-moss mr-2 md:mr-3" />
          ) : (
            <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-amber-500 mr-2 md:mr-3" />
          )}
          <h3 className="font-bold text-lg md:text-xl">
            {result.status === 'healthy' ? 'Healthy Animal Detected' : 'Potential Injury Detected'}
          </h3>
        </div>
        
        <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
          {result.status === 'healthy' 
            ? 'Our analysis indicates this animal appears to be in good health.' 
            : 'Our analysis suggests this animal may have an injury or health issue that requires attention.'}
        </p>
        
        <div className="flex flex-col space-y-3 md:space-y-4">
          <div className="bg-white/60 backdrop-blur-sm p-3 md:p-4 rounded-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs md:text-sm font-medium">Confidence Score</span>
              <span className="text-xs md:text-sm font-bold">{Math.round(result.confidence * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
              <div 
                className={cn(
                  "h-1.5 md:h-2 rounded-full",
                  result.status === 'healthy' ? 'bg-jungle-moss' : 'bg-amber-500'
                )}
                style={{ width: `${Math.round(result.confidence * 100)}%` }}
              ></div>
            </div>
          </div>
          
          {result.details && (
            <div className="bg-white/60 backdrop-blur-sm p-3 md:p-4 rounded-lg flex">
              <Info className="w-4 h-4 md:w-5 md:h-5 mr-2 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-xs md:text-sm mb-1">Analysis Details</h4>
                <p className="text-xs md:text-sm text-muted-foreground">{result.details}</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex justify-between mt-4 md:mt-6">
          <button className="flex items-center text-xs md:text-sm font-medium text-jungle-canopy">
            <Bookmark className="w-3 h-3 md:w-4 md:h-4 mr-1" />
            Save Result
          </button>
          
          <button className="flex items-center text-xs md:text-sm font-medium text-jungle-canopy">
            <BarChart3 className="w-3 h-3 md:w-4 md:h-4 mr-1" />
            View Full Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default PredictionResult;
