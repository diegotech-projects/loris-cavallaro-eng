import type { ReactNode } from 'react';

import { metadataFor } from '@/utils/pageMetadata';

// The page itself is a client component, so its metadata lives here
export const generateMetadata = metadataFor('projects', '/projects');

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
