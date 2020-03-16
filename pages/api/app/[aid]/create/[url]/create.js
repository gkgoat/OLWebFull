import apps from '../../../../../../src/app.js'
export default async (req,res) => await apps.set(req.query.aid,{url: req.query.url})