interface DefaultAvatarProps {
  name: string;
  size?: number;
}

export default function DefaultAvatar({ name, size = 40 }: DefaultAvatarProps) {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div 
      className="rounded-full bg-blue-500 flex items-center justify-center text-white font-medium"
      style={{ width: size, height: size }}
    >
      {initials}
    </div>
  );
} 