export interface Writing {
  category: string;
  href?: string;
  title: string;
  description: string;
  date?: string;
  categories?: string;
  series?: {
    name: string;
    href: string;
    part?: string;
  };
}
