import unittest
from .. import dk.app.main as Server
from unittest.mock import Mock
from inteop import InteropClass
class NewServer(unittest.TestCase,Server.MyServer):
    def setUp(self):
        unittest.TestCase.setUp(self)
        Server.MyServer.__init__(self,("",9876))
        self.__enter__()
    def tearDown(self):
        self.__exit__()
        unittest.TestCase.tearDown(self)
class MockInterop(unittest.TestCase,InteropClass):
    class MockPreparer:
        def __init__(self,o):
            self.obj = o
        def prepare(self,i):
            m = Mock(wraps = {})
            self.obj.mocks.append(m)
            return m
    def __init__(self,*args):
        self.mocks = []
        InteropClass.__init__(self,*args)
        unittest.TestCase.__init__(self)
    def ifLang(self,a,b):
        return a(self.MockPreparer())
    def newClass(self):
        def output(f):
            class Cls(metaclass=self):
                f(locals())
            return Cls
        return output
        
