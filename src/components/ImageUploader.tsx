
import React, { useState, useRef } from 'react';
import { UploadCloud, Image as ImageIcon, X, Camera, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageUploaderProps {
  onImageSelect: (file: File) => void;
  isProcessing: boolean;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect, isProcessing }) => {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0] && e.dataTransfer.files[0].type.startsWith('image/')) {
      handleImageChange(e.dataTransfer.files[0]);
    }
  };
  
  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  
  const handleImageChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
      onImageSelect(file);
    };
    reader.readAsDataURL(file);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleImageChange(e.target.files[0]);
    }
  };
  
  const clearImage = () => {
    setPreview(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto">
      {!preview ? (
        <div 
          className={cn(
            "relative border-2 border-dashed rounded-2xl transition-all duration-200 p-8",
            dragActive 
              ? "border-jungle-canopy bg-jungle-canopy/5" 
              : "border-muted hover:border-jungle-moss/50 hover:bg-jungle-moss/5"
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleInputChange}
            className="hidden"
          />
          
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <div className="w-20 h-20 bg-jungle-moss/20 rounded-full flex items-center justify-center mb-4 animate-pulse-soft">
              <UploadCloud className="w-10 h-10 text-jungle-canopy" />
            </div>
            <h3 className="text-lg font-medium">Drag & drop your image here</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Upload a clear photo of an animal to analyze its health condition
            </p>
            
            <div className="flex gap-3">
              <button
                onClick={handleButtonClick}
                className="px-5 py-2.5 rounded-lg bg-jungle-canopy text-white flex items-center gap-2 hover:bg-jungle-canopy/90 transition-colors"
                disabled={isProcessing}
              >
                <ImageIcon className="w-4 h-4" />
                Browse Images
              </button>
              
              <button
                onClick={handleButtonClick}
                className="px-5 py-2.5 rounded-lg border border-jungle-canopy/20 text-jungle-canopy flex items-center gap-2 hover:bg-jungle-canopy/5 transition-colors"
                disabled={isProcessing}
              >
                <Camera className="w-4 h-4" />
                Take Photo
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative rounded-2xl overflow-hidden shadow-xl animate-float-up">
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            <button 
              onClick={clearImage}
              className="p-2 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/60 transition-colors"
              disabled={isProcessing}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {isProcessing && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-20">
              <div className="flex flex-col items-center">
                <Loader2 className="w-12 h-12 text-white animate-spin mb-4" />
                <p className="text-white font-medium text-lg">Analyzing image...</p>
              </div>
            </div>
          )}
          
          <img 
            src={preview} 
            alt="Preview" 
            className="w-full h-auto max-h-[70vh] object-contain bg-black/5"
          />
        </div>
      )}
      
      <div className="text-xs text-muted-foreground text-center mt-3">
        Supported formats: JPG, PNG, WEBP • Max size: 10MB
      </div>
    </div>
  );
};

export default ImageUploader;
