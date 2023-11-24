import React from 'react';
 
class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        //inisialisasi state
        this.state = {
            title: '',
            body: '',
            archived: false,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        //smp sini
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onNameChangeEventHandler(event) {
        this.setState(() => {
            return {
                name: event.target.value,
            }
        });
    }

    onTagChangeEventHandler(event) {
        this.setState(() => {
            return {
                tag: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addContact(this.state);
    }

    render() {
        return (
            <form className='contact-input' onSubmit={this.onSubmitEventHandler}>
            <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler}/>
            <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler}/>
            <button type="submit">Tambah</button>
            </form>
        )
    }
}
 
export default NoteInput;