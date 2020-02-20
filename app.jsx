class App extends React.Component {
    state = {
        omen: "",
        newOmen: "",
        omens: [
            "jutro wygrasz w totolotka", "jutro nie będzie Ci działa internet", "Lepiej skasuj historię przeglądarki", "za miesiąc złamiesz nogę",
        ]
    }

    handleChooseOmen = () => {
        const omens = this.state.omens;
        const omenIndex = Math.floor(Math.random() * omens.length);
        const omen = omens[omenIndex];

        // console.log(omen)
        // return omen
        this.setState({
            omen: omen
        })
    }

    handleChangeInputValue = (e) => {
        this.setState({
            newOmen: e.target.value
        })
    }

    handleAddOmen = () => {
        const omens = [...this.state.omens];
        let newOmen = this.state.newOmen;
        if (newOmen === "") return alert('wróżbita Maciej nie rozpoznaje takiej wróżby!')
        omens.push(newOmen);

        this.setState({
            omens,
            newOmen: ""
        })
        // console.log(omens)
    }

    handleRemoveOmen = () => {
        const omen = this.state.omen
        let omens = [...this.state.omens];
        console.log(omen)

        omens = omens.filter(arrayElement => arrayElement !== omen);
        this.setState({
            omens,
            omen: ""
        })


    }


    render() {
        const omen = this.state.omen;
        return (
            <>
                <h1>WRÓŻBITA MACIEJ WRÓŻY</h1>
                <br />
                <button onClick={this.handleChooseOmen}>Zobacz wróżbę</button>
                <br />
                <label >
                    <input
                        type="text"
                        value={this.state.newOmen}
                        onChange={this.handleChangeInputValue}
                    />
                </label>
                <button onClick={this.handleAddOmen}>Dodaj wróżbę</button>
                <br />
                <br />
                <div>
                    <h2>{omen}</h2>
                    {omen ? <button onClick={this.handleRemoveOmen}>-</button> : null}
                    {/* <DeleteButton click={this.handleRemoveOmen} /> */}
                </div>
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
