import { icons } from 'lucide-react';

const Icon = ({ name, color, size }) => {
  const LucideIcon = icons[name];
  if (!LucideIcon) {
    console.error(`Icon ${name} not found in lucide-react icons`);
    return null;
  }
  return <LucideIcon color={color} size={size} />;
};

export default Icon;