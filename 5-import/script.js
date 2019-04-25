//5-1 Import

import {hello} from './functions.js'

hello()
import {showError} from './functions.js'

showError('bug')
import {default as cat} from './functions.js'
cat()
// 5-2 Export
import * as cal from './math.js'
const [a, b] = [7, 9]
console.log(cal.sum(a,b))
console.log(cal.sub(a,b))
console.log(cal.multiply(a,b))
console.log(cal.divide(a,b))
console.log(cal.pow(a,b))