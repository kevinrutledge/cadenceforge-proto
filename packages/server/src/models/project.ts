export interface Project {
  category: string;
  slug: string;
  href?: string;
  title: string;
  description: string;
  type?: {
    name: string;
    href: string;
  };
  role?: string;
  stack?: string;
  status?: string;
}
