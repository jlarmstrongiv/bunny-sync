export type SyncParameters = {
  locations: string[];
  accessKeys: string[];
};

export function sync(syncParameters: SyncParameters): Promise<void>;
