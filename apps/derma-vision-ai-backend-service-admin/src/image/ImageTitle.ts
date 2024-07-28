import { Image as TImage } from "../api/image/Image";

export const IMAGE_TITLE_FIELD = "imageUrlField";

export const ImageTitle = (record: TImage): string => {
  return record.imageUrlField?.toString() || String(record.id);
};
