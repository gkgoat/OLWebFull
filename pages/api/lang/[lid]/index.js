import {get} from 'https'
import * as replaceStream from 'replacestream'
export default (req,res) => {
    const {
        query: { lid },
      } = req;
      const url = 'https://' + lid + '.wikipedia.org';
      let s;
      get(url,r => get(r.headers.location,r => r.on('end',() => s.end()).pipe(s = replaceStream('</body>','<h6>ObjectLand effected</h6></body>'),{end: false}).pipe(res)));

}