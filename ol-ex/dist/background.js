function read(f){
    var errorHandler = function(error){};
    return new Promise(function(r){
        try{if(read.cache[f])r(read.cache[f])}catch(err){};
    chrome.runtime.getPackageDirectoryEntry(function(root) {
        root.getFile(f, {}, function(fileEntry) {
          fileEntry.file(function(file) {
            var reader = new FileReader();
            reader.onloadend = function(e) {
                read.cache[f] = this.result;
              r(this.result)
            };
            reader.readAsText(file);
          }, errorHandler);
        }, errorHandler);
      });
    });
}
read.cache = {};
chrome.tabs.onCreated.addListener(function(t){Promise.all(['1.js','2.js','3.js','index.js'].map(read)).then(function(a){chrome.tabs.executeScript(t.id,{code: a.join('')})});})