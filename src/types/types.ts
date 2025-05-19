export interface CardProps {
  title: string;
  broken?: string;
  description: string;
  buttonName: string;
  secondaryButtonName: string;
  image: string;
  color?: string;
}

export interface ColorCardProps {
  topText: string;
  title: string;
  color: string;
}

export interface FooterLinksProps {
  title: string;
  links: string;
}

export interface FooterProps {
  mainTitle: string;
  arr: FooterLinksProps[];
}
