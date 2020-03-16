import apps from '../../../../src/app.js'
export default async (req,res) => {
await fetch((await apps.get(req.query.aid)).url).then(r => r.text().then(t => req.session.eval(t).then(l => l.serverReport(res))))

}