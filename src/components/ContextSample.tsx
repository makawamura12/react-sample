import React from 'react'

//Title を渡すためのContext を作成します
//Providerはデータを渡す
//Consumerはデータを受け取る

const TitleContext = React.createContext('')

//Title コンポーネントの中でContextの値を参照します
const Title = () =>{
    //Consumerを使って、Contextの値を参照します
    return(
        <TitleContext.Consumer>
            {/* Consumer直下に関数を置いて、Contextの値を参照します*/}
            {(title)=>{
                return(
                    <div style={{background:'red' }}>
                    <h1 style={{ margin:0}}>{title}</h1>
                    </div>
                )
            }}
        </TitleContext.Consumer>
    )
}
//Header コンポーネント
const Header = () =>{
    return(
        <div>
            {/*HeaderからTitleへは何もデータを渡しません */}
            <Title/>
        </div>
    )
}

//Pageコンポーネントの中でContextに値を渡します

const Page = () =>{
    const title = 'React Book'

    //Provider を使いContextに値をセットします。
    //Provider 以下のコンポーネントから値を参照出来ます

    return(
        <TitleContext.Provider value={title}>
            <Header/>
        </TitleContext.Provider>
    )
}

export default Page