export interface Writing {
  category: string;
  slug: string;
  href?: string;
  title: string;
  description: string;
  content?: string;
  date?: string;
  categories?: string;
  series?: {
    name: string;
    href: string;
    part?: string;
  };
}
