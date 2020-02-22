import rawMorphic from 'raw-loader!string-replace-loader?search=export&replace=!../../../morphic.js/morphic.js'
import rawSymbols from 'raw-loader!../../../Snap/src/symbols.js'
import rawWidgets from 'raw-loader!../../../Snap/src/widgets.js'
import rawBlocks from 'raw-loader!../../../Snap/src/blocks.js'
import rawThreads from 'raw-loader!../../../Snap/src/threads.js'
import rawObjects from 'raw-loader!../../../Snap/src/objects.js'
import rawGUI from 'raw-loader!../../../Snap/src/gui.js'
import rawPaint from 'raw-loader!../../../Snap/src/paint.js'
import rawLists from 'raw-loader!../../../Snap/src/lists.js'
import rawBYOB from 'raw-loader!../../../Snap/src/byob.js'
import rawTables from 'raw-loader!../../../Snap/src/tables.js'
import rawSketch from 'raw-loader!../../../Snap/src/sketch.js'
import rawVideo from 'raw-loader!../../../Snap/src/video.js'
import rawMaps from 'raw-loader!../../../Snap/src/maps.js'
import rawXML from 'raw-loader!../../../Snap/src/xml.js'
import rawStore from 'raw-loader!../../../Snap/src/store.js'
import rawLocale from 'raw-loader!../../../Snap/src/locale.js'
import rawCloud from 'raw-loader!../../../Snap/src/cloud.js'
import rawAPI from 'raw-loader!../../../Snap/src/api.js'
import rawSHA from 'raw-loader!../../../Snap/src/sha512.js'
import rawFileSaver from 'raw-loader!../../../Snap/src/FileSaver.min.js'
class SnapWorker extends Worker{constructor({extraCode}){super(URL.createBlobURL (new Blob(
    rawMorphic + rawSymbols + rawWidgets + rawBlocks + rawThreads + rawObjects + rawGUI + rawPaint + rawLists + rawBYOB + rawTables + rawSketch + rawVideo + rawMaps + rawXML + rawStore + rawLocale + rawCloud + rawAPI + rawSHA + rawFileSaver + `// &%&% moveDeclarationNamed('SomeClass', '../other/file.ts')
    var i = new IDE_Morph();
    i.addMessageListenerForAll(function(s){self.postMessage({type: 'broadcasted',id: Math.random(),data: s})})
    self.addEventListener('message',function(m){if(m.type === 'broadcast')i.broadcast(m.data,function(){self.postMessage({type: 'sucess',id: m.id,data: undefined})})})
    function loop(){
i.stepFrame();
requestAnimationFrame(loop);

    }
    requestAnimationFrame(loop);
    ` + extraCode
    )));

}}