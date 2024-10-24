export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// 下記のINCREMENTとDECREMENTでは書き方が違うが、
// 上はリファクタリングが行われているだけで意味は同じ
// またactionを定義してreturnする関数をアクションクリエイターという
export const increment = ():Action => ({
    type: INCREMENT
})

export const decrement = ():Action => ({
    type: DECREMENT
})

export type Action = {
    type: typeof INCREMENT | typeof DECREMENT
}