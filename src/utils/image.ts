export function imageNameFromPath(path: string): string | undefined {
  return path.split('/').at(-1)?.split('.').at(0)
}
