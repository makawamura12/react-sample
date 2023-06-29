// 無名関数でコンポーネントを定義し、Textという変数に代入する
// Textコンポーネントは親から`content`というデータを受け取る

const Text = (props:{content:string}) =>{
    // propsからcontentという値を取り出す
    const {content} = props
    // props で渡されたデータを表示する
    return <p className="text">{content}</p>
}

// 同様に定義したコンポーネントをMessageという変数に代入する

const Message = (props:{}) => {
    const content1 = "This is parent component"
    const content2 = "Message uses Text component"

    return(
        <div>
            {/*content というキーでコンポーネントにデータを渡す */}
            <Text content={content1}/>
            {/*違うデータを渡すと、違う内容が表示される */}
            <Text content={content2}/>
        </div>
    )
}

// Message コンポーネントをデフォルトエクスポートする
export default Message