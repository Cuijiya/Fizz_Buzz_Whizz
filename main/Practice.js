/**
 * Created by cuijiya on 17-7-14.
 */
barcodeArr=[
    'ITEM001',
    'ITEM002',
    'ITEM002',
    'ITEM003',
    'ITEM002',
    'ITEM001'
]

function getIncludeCount(barcodeArr) {
    var includeCountArr=[]
    var count=0
    for(var i of barcodeArr) {
            if (includeCountArr=== barcodeArr[i]) {
                count++
            } else {
                includeCountArr.push(barcodeArr[i])
                count = 1
            }

    }
    includeCountArr.push(count)
    return includeCountArr
}

var includeCountArr=getIncludeCount(barcodeArr)
console.log(includeCountArr)