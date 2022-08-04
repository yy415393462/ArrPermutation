import { ArrPermutation } from '../src';

describe('permutation', () => {
	const arr = [1, 2, 3]
	const length = 4
	const data = ArrPermutation(arr, length, false)
	const uniqueData = Array.from(new Set(data))
	it('排列的结果中没有重复数据', () => {
		expect(data.length).toEqual(uniqueData.length)
	})

	it('排列的结果中没有重复数据', () => {
		expect(data.length).toEqual(Math.pow(3, 4))
	})
})
