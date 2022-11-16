import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useCallback, useState } from 'react';
import AddProductVariantMediaContainer from '@containers/Products/AddProductVariantMediaContainer';
import ProductVariantMediaDisplayListContainer from '@containers/Products/ProductVariantMediaDisplayListContainer';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import { MediaFragment } from '@graphql/fragments/MediaFragment';

export interface IProductVariantMedia {
  productVariantId: number;
  media: MediaFragment[];
}

const ProductVariantMedia = ({
  productVariantId,
  media,
}: IProductVariantMedia) => {
  const [addMedia, setAddMedia] = useState(false);
  const onAddMediaClick = useCallback(() => setAddMedia(true), []);
  const onCancelClick = useCallback(() => setAddMedia(false), []);
  return (
    <>
      <div className="pb-4 pt-4">
        <p>Variant Media</p>
        <ProductVariantMediaDisplayListContainer media={media} />
      </div>
      {addMedia ? (
        <AddProductVariantMediaContainer
          onCancel={onCancelClick}
          productVariantId={productVariantId}
        />
      ) : (
        <PrimaryButton type="button" onClick={onAddMediaClick}>
          <PlusCircleIcon className="h-6 w-6 mr-2" aria-hidden="true" />
          Add Variant Media
        </PrimaryButton>
      )}
    </>
  );
};

export default ProductVariantMedia;
