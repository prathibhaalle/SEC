function welcome(props) {
    return <h2>Hello, {props.name}</h2>;
}
function Temp() {
    return (
        <div>
            <welcome name="prathibha"/>
            <welcome name="Megha"/>
            <welcome name="mona"/>
        </div>
    );
}                 