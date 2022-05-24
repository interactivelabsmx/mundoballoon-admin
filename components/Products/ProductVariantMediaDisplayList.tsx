import Image from 'next/image';
import { MediaFragment } from '@graphql/fragments/MediaFragment';

interface IProductVariantMediaDisplayList {
  media: MediaFragment[];
}

const ProductVariantMediaDisplayList = ({
  media,
}: IProductVariantMediaDisplayList) => (
  <ul
    role="list"
    className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
  >
    {media.map((file) => (
      <li key={file.productVariantMediaId} className="relative">
        <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
          {file.url && (
            <Image
              layout="raw"
              width="100%"
              height="100%"
              src={file.url}
              alt={file.mediaType}
              className="object-cover pointer-events-none group-hover:opacity-75"
            />
          )}
          <button type="button" className="absolute inset-0 focus:outline-none">
            <span className="sr-only">View details for {file.mediaType}</span>
          </button>
        </div>
        <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
          {file.mediaType} {file.quality}
        </p>
      </li>
    ))}
  </ul>
);

export default ProductVariantMediaDisplayList;
