export interface StorageLocation {
  id: string;

  name: string;

  description?: string;

  room?: string;

  shelf?: string;

  box?: string;

  binder?: string;

  createdAt: Date;
}
