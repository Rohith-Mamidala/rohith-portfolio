export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  category: string;
  status?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location: string;
}

export interface Certificate {
  title: string;
  organization: string;
  id?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
