import * as reboot from '../../../re-boot/dist/index'
import * as R from 'ramda'
import poolp from '../poolp.js'
let rpoolp = f => arg => rpoolp(poolp(f(arg)));
export let StObject = reboot.Y(withClass => clas => reboot.Y(withFields => fields => reboot.Y(self => f => 
    reboot.COND(reboot.EQ(f)(reboot.ZERO))
    (m => withFields(reboot.PUT(fields)(m(reboot.CAR))(m(reboot.CDR))))
    (reboot.COND(reboot.EQ(f)(reboot.ONE))
    (m => reboot.AT(fields)(m))
    (reboot.COND(reboot.EQ(f)(reboot.TWO))
    (m => reboot.COND(reboot.EQ(m)(reboot.ZERO))(x => clas)(c => withClass(c)(fields)))
    (reboot.COND(reboot.EQ(f)(reboot.THREE))
    (o => self(reboot.ONE)(reboot.ZERO)(reboot.ONE)(o))
    (reboot.COND(reboot.EQ(f)(reboot.ADD1(reboot.THREE)))
    (x => fields)(x => x)))))
)))
export let StVector = reboot.Y(withBase => base => reboot.Y(withContents => contents => reboot.Y(withIndex => index => reboot.Y(self => f => 
    reboot.COND(reboot.EQ(f)(reboot.ZERO))
    (x => withIndex(reboot.ADD1(index)))
    (reboot.COND(reboot.EQ(f)(reboot.ONE))
    (m => withBase(base(reboot.ONE)(reboot.ONE)(reboot.ONE))(m(contents))(reboot.ONE))
    (reboot.COND(reboot.EQ(f)(reboot.TWO))
    (v => base(reboot.ONE)(reboot.TWO)(v))
    (reboot.COND(reboot.EQ(f)(reboot.THREE))
    (reboot.Y(withTable => table => m => table(reboot.CAR)(reboot.CAR)(reboot.THREE)(m)(b => reboot.COND(b)(x => withTable(table(reboot.CDR)))(x => table(reboot.CAR)(reboot.CDR))(reboot.FALSE))))
    (reboot.COND(reboot.EQ(f)(reboot.ADD1(reboot.THREE)))
    (table => vm => m => poolp(self(reboot.ZERO)(FALSE)(reboot.ONE))(poolp(c => poolp(self(reboot.THREE)(table)(m(c(reboot.CAR)))(c(reboot.CDR))(vm)(self)))))
    (reboot.COND(reboot.EQ(f)(reboot.ADD(reboot.THREE)(reboot.TWO)))
    (c => withContents(c)(reboot.ONE))
    (reboot.COND(reboot.EQ(f)(reboot.ADD(reboot.THREE)(reboot.THREE)))
    (x => contents)
    ()))))))
))))
export let StVM = reboot.Y(withDriver => driver => reboot.Y(withObjects => objects => reboot.Y(withCurrentVector => currentVector => reboot.Y(self => f => 
    reboot.COND(reboot.EQ(f)(reboot.ZERO))
    (obj => withObjects(reboot.ADDL(objects)(obj))(currentVector))
    (reboot.COND(reboot.EQ(f)(reboot.ONE))
    (newVector => withCurrentVector(newVector))
    (reboot.COND(reboot.EQ(f)(reboot.TWO))
    (cls => fields => onObj => self(reboot.ZERO)(onObj(StObject(cls)(CONS(t => 
        reboot.COND(reboot.EQ(t)(reboot.ONE))(o => o /*todo*/)
        )(fields)))))
    (reboot.COND(reboot.EQ(f)(reboot.THREE))
    (obj => withObjects(v => obj(reboot.ONE)(reboot.ONE)(reboot.ADD1(reboot.THREE))(v)) (x => obj(reboot.ONE)(reboot.TWO)(reboot.ONE)(reboot.ONE)(x)))
    (reboot.COND(reboot.EQ(f)(reboot.ADD1(reboot.THREE)))
    (a => b => f => reboot.COND(reboot.EQ(f)(reboot.ZERO))(reboot.ADD(a,b))(reboot.COND(reboot.EQ(f)(reboot.ONE))(reboot.MULTIPLY(a,b))(reboot.COND(reboot.EQ(f)(reboot.TWO))(x => reboot.SUB(a,b)))))
    (reboot.COND(reboot.EQ(f)(reboot.ADD1(reboot.ADD1(reboot.THREE))))(f => 
        reboot.COND(reboot.EQ(f)(reboot.ZERO))
        (m => withCurrentVector(currentVector(reboot.ADD1(reboot.THREE))(m(reboot.CAR)(reboot.ONE)(reboot.THREE))(m(reboot.CDR))))
        (reboot.COND(reboot.EQ(f)(reboot.ONE))
        (v => withCurrentVector(currentVector(reboot.TWO)(v)))
        (reboot.COND(reboot.EQ(f)(reboot.TWO))
        /*network primitive*/
        (withStack => stack => callback => R.pipe(url => fetch(reboot.REDUCE(acc => v => v(y => ((acc == reboot.FALSE) ? '' : acc) + String.fromCharCode(y(x => x + 1)(0))))(url),{haeders: {'X-Smalltalk': 'true'}}),R.andThen(res => res.arrayBuffer()),R.andThen(buf => withStack(reboot.CONS(buf)(stack))),R.andThen(vm => callback(vm))))
        (reboot.COND(reboot.EQ(f)(reboot.THREE))
        (then => poolp(nvm => then(nvm))(poolp(withCurrentVector)(currentVector(reboot.ADD1(reboot.THREE))(FALSE)(x => x))))
        (reboot.COND(reboot.EQ(f)(reboot.ADD1(reboot.THREE)))
        (nf => driver(reboot.ZERO)(nf)(self))
        ()))))
        )(FALSE))))))
    ))))
export let StToHandler = car => cdr => vm => vect => st_vector => StVector(StObject(FALSE)(FALSE))(reboot.REDUCE(acc => x => (c => reboot.CONS(c(x => acc(reboot.CAR))(acc(reboot.CAR)(reboot.ZERO)(FALSE)))(reboot.Y(res => v => c(y => CONS(x)(acc(reboot.CDR)))(y => CONS(acc(reboot.CAR)(reboot.ZERO)(FALSE)(reboot.ADD(reboot.THREE)(reboot.THREE))(FALSE))(acc(reboot.CDR) ))(st_vector))(cdr)))(reboot.COND(reboot.EQ(x(reboot.CAR)(x => x))(reboot.SUB(reboot.MULTIPLY(reboot.MULTIPLY(reboot.THREE)(reboot.TWO))(reboot.ADD(reboot.THREE)(reboot.TWO)))(reboot.TWO))))))(reboot.ONE)

export let StExternal = car => cdr => vm => vect => poolp(external => external(vm)(vect)(R.construct(Promise))(m => o => k => reboot.COND(reboot.EQ(n)(reboot.ZERO))(o[k])(reboot.COND(reboot.EQ(n)(reboot.ONE))(v => Object.assign(Object.create(o.__proto__),o,{[k]: v}))(reboot.FALSE))))

export let StCodeHandler = car => cdr => vm => vect => (codes => reboot.AT(reboot.MAP(rpoolp)(codes))(reboot.AT(vect(reboot.ZERO)(reboot.ADD1(reboot.THREE))(reboot.ONE)))(cdr(reboot.CDR)(reboot.CAR))(cdr(reboot.CDR)(reboot.CDR))(vm)(vect(reboot.ZERO)))(reboot.CONS(StToHandler)(reboot.CONS(StExternal)(FALSE)))

export let StCPU = reboot.Y(withVM => vm => reboot.Y(self => f => 
    reboot.COND(reboot.EQ(f)(reboot.ZERO))
    (reboot.Y(withStack => stack => stack))
    (reboot.COND(reboot.EQ(f)(reboot.ONE))
    (vect => StCodeHandler(vect(reboot.ADD(reboot.THREE)(reboot.THREE))(reboot.CAR))(vect(reboot.ADD(reboot.THREE)(reboot.THREE))(reboot.CDR))(vm)(vect))
    ())
    ))