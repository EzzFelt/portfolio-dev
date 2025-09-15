import type { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: Array<{
    name: string;
    icon: ReactNode;
  }>;
  repositoryUrl?: string;
  liveUrl?: string;
  images?: string[]; 
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    technologies: Array<{
      name: string;
      icon: React.ReactNode;
    }>;
    repositoryUrl?: string;
    imageUrl?: string;
    images?: string[];
    liveUrl?: string;
  } | null;
}


interface ProjectCardProps {
    project: Project;
}

export type { ProjectCardProps, ProjectModalProps };
