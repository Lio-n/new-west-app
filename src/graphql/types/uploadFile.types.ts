interface UploadFile {
  alternativeText: string;
  caption: string;
  createdAt: Date;
  ext: string;
  formats: JSON;
  hash: string;
  height: number;
  mime: string;
  name: string;
  previewUrl: string;
  provider: string;
  provider_metadata: JSON;
  related: unknown[];
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
