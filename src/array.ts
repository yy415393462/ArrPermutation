

/**
 * 根据给定的元素输出指定长度的所有排列(元素可重复使用,元素顺序敏感)
 * @param arr 元素数组(数组内的元素不可重复，否则结果可能出现重复)
 * @param n 指定长度
 * @param retArr 返回数组中元素是否为数组
 * @return 包含所有排列可能性的数组
 */
export const ArrPermutation = (arr:any[], n:number,retArr:boolean = true) => {
    const ans:any[] = []
    const length = arr.length
    const helps = (tempArr:any[]) => {
        if (tempArr.length == n) {
            if(retArr){
                ans.push(tempArr);
            }else{
                ans.push(tempArr.join(''))
            }
            
        }else{
            for (let i = 0; i < length; i++) {
                helps(tempArr.concat(arr[i]))
            }
        }  
    }
    helps([]);
    return ans;
};