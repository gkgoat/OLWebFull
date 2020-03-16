import socketserver
class MyServer(socketserver.TCPServer):
    class MyHandler(socketserver.BaseRequestHandler):
        def __init__(self,obj,*rest):
            socketserver.BaseRequestHandler.__init__(self,*rest)
            self.obj = obj
        def handle(self):
            data = self.rfile.readline().strip()
            if data == 'start_docker':
                import os
                idd = self.rfile.readline().strip()
                with open('/Dockerfile.proto','r') as f:
                    import tempfile, threading
                    with open('/tmp/' + id + '/Dockerfile') as nf:
                        nf.write(f.read() % id)
                        def run():
                            os.system('docker build -t ' + id + ' /tmp/' + id)
                            os.system('docker container run --detach --name ' + id + '' + id)
                        threading.Thread(run).start()
            elif data == 'run_sh' && self.obj.privs == 'all':
                import os
                os.system(self.rfile.readline().strip())
            elif data == 'cat':
                def run():
                    path = self.rfile.readline().strip()
                    with open(path) as f:
                        while True:
                            self.wfile.write(f.read())
                threading.Thread(run).start()
    def __init__(self,p,privs='all'):
        socketserver.TCPServer.__init__(self,p,self.MyHandler)
        self.privs = privs

if __name__ == "__main__":
    HOST, PORT = "", 2500

    # Create the server, binding to localhost on port 9999
    with MyServer((HOST, PORT)) as server:
        # Activate the server; this will keep running until you
        # interrupt the program with Ctrl-C
        with MyServer((HOST,PORT + 1),'user') as userver:
            both = 0
            def run(s):
                s.serve_forever()
                both = both + 1
            threading.Thread(both,args=[server]).start()
            threading.Thread(both,args=[userver]).start()
            while not both == 2:
                pass
