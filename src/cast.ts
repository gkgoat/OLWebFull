export function toAny<T>(obj: T){return obj as any}
export function toType<T>(){return (obj: any) => (obj as T)}