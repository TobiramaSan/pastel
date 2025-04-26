export interface CardProps {
  title: string;
  broken?: string;
  description: string;
  buttonName: string;
  secondaryButtonName?: string;
  image?: string;
  color?: string;
}

export interface ColorCardProps {
  topText: string;
  title: string;
  color: string;
}
