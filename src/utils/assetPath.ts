export const getAssetPath = (path: string): string => {
  // In development, use the path as-is since Vite serves from root
  if (import.meta.env.DEV) {
    return path;
  }
  // In production, prepend the base path
  return `/presentation${path}`;
};
