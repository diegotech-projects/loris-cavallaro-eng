import LinePage from '@/components/page/LinePage';
import { metadataFor } from '@/utils/pageMetadata';

export const generateMetadata = metadataFor('renovation', '/ristrutturazioni');

export default function Page() {
  return <LinePage lineKey="renovation" />;
}
