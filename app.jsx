class App extends React.Component {
    state = {
        omen: "",
    }

    omens = [
        "Wróżba 1", "Wróżba 2", "Wróżba 3",
    ]



    handleChooseOmen = () => {
        const omens = this.omens;
        const omenIndex = Math.floor(Math.random() * omens.length);
        const omen = omens[omenIndex];

        // console.log(omen)
        // return omen
        this.setState({
            omen: omen
        })
    }


    render() {
        const omen = this.state.omen;


        return (
            <>
                <button onClick={this.handleChooseOmen}>Zobacz wróżbę</button>
                <br />
                <label >
                    <input type="text" />
                </label>
                <br />
                <br />
                <h2>{omen}</h2>
            </>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('root'))
