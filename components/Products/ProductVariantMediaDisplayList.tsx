import Image from 'next/image';
import DeleteIconButton from '@components/UI/buttons/DeleteIconButton';
import { MediaFragment } from '@graphql/fragments/MediaFragment';

interface IProductVariantMediaDisplayList {
  media: MediaFragment[];
  onClickDelete: (productVariantMediaId: number) => void;
}

const ProductVariantMediaDisplayList = ({
  media,
  onClickDelete,
}: IProductVariantMediaDisplayList) => (
  <ul
    role="list"
    className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
  >
    {media.map((file) => (
      <li key={file.productVariantMediaId} className="relative">
        <div className="block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
          {file.url && (
            <Image
              layout="raw"
              width="100%"
              height="100%"
              src={file.url}
              alt={file.mediaType}
              className="object-cover pointer-events-none"
            />
          )}
        </div>
        <p className="mt-2 flex justify-between text-sm font-medium text-gray-900">
          {file.name} / {file.mediaType} / {file.quality}
          <DeleteIconButton
            onClick={() => onClickDelete(file.productVariantMediaId || 0)}
          />
        </p>
      </li>
    ))}
  </ul>
);

export default ProductVariantMediaDisplayList;
