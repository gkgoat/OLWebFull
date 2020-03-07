import { createFsFromVolume, Volume } from 'memfs'
let fs = createFsFromVolume(new Volume());
export default fs