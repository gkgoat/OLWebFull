class InteropClass(type):
    def ifLang(self,a,b):
        return b()
    def __prepare__(self,name,bases):
        return self.ifLang(lambda l: l.prepare(self),lambda: {})
