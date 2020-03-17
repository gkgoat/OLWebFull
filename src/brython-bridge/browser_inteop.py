import browser
from .. import py.inteop
class JSInteop(inteop.InteropClass):
    class JSProvider:
        def __init__(self,obj):
            self.obj = obj
        def prepare(self,i):
            return browser.window.pps(self)
    def ifLang(self,a,b):
        return a(self.JSProvider())