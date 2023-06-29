import React, { FC } from 'react'
//React.FCの使用例(VFCも同様に定義可能)
// Containerのpropsの型を定義します
type Props = {
    title:string
    children:React.ReactNode
}
const Container :FC<Props> = ({title,children}) => {

    return(
        <div style={{background: 'red'}}>
            <span>{title}</span>
            {/*propsのchildrenを埋め込むと、このコンポーネントの開始タグと閉じタグで囲んだ要素を表示します */}
            <div>{children}</div>
        </div>
    )
}

const Parent: FC = () => {
    return(
        // Container を使用する際に、他の要素を囲って使用する
        <Container title="Hello">
            <p>ここの部分が背景色で囲まれます</p>
        </Container>
    )
}

export default Parent