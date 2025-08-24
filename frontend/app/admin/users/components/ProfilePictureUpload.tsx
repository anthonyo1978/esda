'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import DefaultAvatar from './DefaultAvatar';

interface ProfilePictureUploadProps {
  name: string;
  currentImage?: string | null;
  onImageChange: (file: File) => void;
}

export default function ProfilePictureUpload({ 
  name, 
  currentImage, 
  onImageChange 
}: ProfilePictureUploadProps) {
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onImageChange(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div 
        className="relative cursor-pointer"
        onClick={handleClick}
      >
        {preview ? (
          <div className="h-32 w-32 rounded-full overflow-hidden">
            <Image
              src={preview}
              alt={`${name}'s profile`}
              width={128}
              height={128}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <DefaultAvatar name={name} size={128} />
        )}
        <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 shadow-lg">
          <span className="material-icons text-xl">photo_camera</span>
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      <p className="text-sm text-red-500">Click above to upload/change profile picture</p>
    </div>
  );
} 