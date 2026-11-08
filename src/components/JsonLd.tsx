import type { JsonLdObject } from '@/utils/schema';

// Server-rendered JSON-LD; "<" is escaped so content can't close the tag
const JsonLd = ({ data }: { data: JsonLdObject }) => (
  <script
    type="application/ld+json"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data).replace(/</g, '\\u003c'),
    }}
  />
);

export default JsonLd;
