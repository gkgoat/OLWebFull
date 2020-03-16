import apps from '../../../src/app.js'
export default async (req,res) => res.end(await apps.keys())