const rightAnswer = ['1', '2', '3', '4']

function getOutput(numStr) {
    var outPut
    var outPutArr = []
    var numArr = numStr.split('')
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] === rightAnswer[i]) {
            outPutArr.push('A')
        } else {
            for (var j = 0; j < rightAnswer.length; j++) {
                if (numArr[i] === rightAnswer[j]) {
                    outPutArr.push('B')
                    break
                }
            }
        }
    }

    var countA=0,countB=0
    for (var i of outPutArr) {
        if (i === 'A') {
            countA++
        } else if (i === 'B') {
            countB++
        }
    }
    outPut = countA + 'A' + countB + 'B'
    return outPut
}

var numStr = '1527'
var output = getOutput(numStr)
