import React, { Component } from 'react'
import ModalButtonContainer from '../../../modal/modal_button_container';

export default class EntryItem extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    } 
    componentDidMount() {
 
    }
    handleClick(){
        if(!this.props.entry.trip) {
            this.props.resetTripId()
        }
        this.props.receiveEditEntryObject(this.props.entry)
        
    }

    render() {
        const {entry_photo_url, title} = this.props.entry
        return (
            <div className='trip-entry-item-container' onClick={this.handleClick}>
                <img src={entry_photo_url} className="entry-image" alt="Entry"/>
                <h1 className='entry-message'>{title}</h1>
                <div>
                    <button onClick={() => this.props.openModal("showEntry")}>View</button>
                    <ModalButtonContainer entry={this.props.entry} action={"editEntry"} buttonTitle={"Edit"}/>
                    <button onClick={() => this.props.deleteEntry(this.props.entry._id)}>Remove</button>
                </div>
            </div>
        )
    }
}
