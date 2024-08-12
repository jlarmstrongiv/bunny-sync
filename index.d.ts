export type EmptyParameters = {
  accessKeys: string[];
  locations: string[];
};

export function empty(emptyParameters: EmptyParameters): Promise<void>;

export type SyncParameters = {
  locations: string[];
  accessKeys: string[];
};

export function sync(syncParameters: SyncParameters): Promise<void>;

export type PurgeParameters = {
  locations: string[];
  accessKeys: string[];
};

export function purge(purgeParameters: PurgeParameters): Promise<void>;
