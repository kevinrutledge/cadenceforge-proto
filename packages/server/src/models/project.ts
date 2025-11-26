export interface Project {
  category: string;
  slug: string;
  href?: string;
  title: string;
  description: string;
  content?: string;
  type?: {
    name: string;
    href: string;
  };
  role?: string;
  stack?: string;
  status?: string;
}
