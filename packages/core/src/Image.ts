export interface Image {
  id: string;

  collectibleId: string;

  fileName: string;

  filePath: string;

  width: number;

  height: number;

  size: number;

  mimeType: string;

  checksum: string;

  isPrimary: boolean;

  createdAt: Date;

  updatedAt: Date;
}
