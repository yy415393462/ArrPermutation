
/**
 * 长字符串显示摘要(元素可重复使用,元素顺序敏感)
 * @param str 字符串
 * @param left 左边截取长度
 * @param right 右边截取长度
 * @param vicarious 中间替身
 * @return 字符串摘要
 */
export const StrBreviary = (str:any, left = 4, right = 4,vicarious = '******') => {
    if (str === undefined) {
        return ''
    } else {
        if ([...str].length <= (left + right)) {
            return str
        } else {
            return str.substring(0, left) + vicarious + str.substring([...str].length - right, [...str].length)
        }
    }
}