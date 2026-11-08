import LinePage from '@/components/page/LinePage';
import { metadataFor } from '@/utils/pageMetadata';

export const generateMetadata = metadataFor('solar', '/fotovoltaico');

export default function Page() {
  return <LinePage lineKey="solar" />;
}
