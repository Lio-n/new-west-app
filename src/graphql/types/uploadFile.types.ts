interface FileFormat extends Pick<UploadFile, "name" | "hash" | "ext" | "mime" | "width" | "height" | "size" | "url"> {
  path: string | null;
}

interface UploadFileFormats {
  thumbnail: FileFormat;
  large: FileFormat;
  medium: FileFormat;
  small: FileFormat;
}

interface UploadFile {
  alternativeText: string;
  caption: string;
  createdAt: Date;
  ext: string;
  formats: UploadFileFormats;
  hash: string;
  height: number;
  mime: string;
  name: string;
  previewUrl: string;
  provider: string;
  provider_metadata: JSON;
  related: unknown[]; // type GenericMorph
  size: number;
  updatedAt: Date;
  url: string;
  width: number;
}

interface UploadFileEntity {
  attributes: UploadFile;
  id: number;
}

export interface UploadFileEntityResponse {
  data: UploadFileEntity;
}
