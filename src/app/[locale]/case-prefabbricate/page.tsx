import LinePage from '@/components/page/LinePage';
import { metadataFor } from '@/utils/pageMetadata';

export const generateMetadata = metadataFor('prefab', '/case-prefabbricate');

export default function Page() {
  return <LinePage lineKey="prefab" />;
}
