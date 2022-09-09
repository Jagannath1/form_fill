import React from 'react';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            areaOfInterest : '',
            personalContactNumber : '',
            hasPersonalContactNumberError : false,
            permanentContactNumber : '',
            hasPermanentContactNumberError : false,
        };
    }
    handleAreaOfInterest(event){
        let inputValue = event.target.value;
        this.setState({
            areaOfInterest : inputValue
        })
    }
    handlePersonalContactNumber(event){
        let inputValue = event.target.value;
        let isError = inputValue === '';
        this.setState({
            hasPersonalContactNumberError : isError,
            personalContactNumber : inputValue
        })
    }
    handlePermanentContactNumber(event){
        let inputValue = event.target.value;
        let isError = inputValue === '';
        this.setState({
            hasPermanentContactNumberError : isError,
            PermanentContactNumber : inputValue
        })
    }
    
    render(){
        let personalContactNumberError;
        if(hasPersonalContactNumberError){
            personalContactNumberError = (
                <p className = 'personal-contact-number-error'>
                    Personal Contact Number can't be empty
                </p>
            );
        }
        let permanentContactNumberError;
        if(hasPermanentContactNumberError){
            permanentContactNumberError = (
                <p className = 'permanent-contact-number-error'>
                    Permanent Contact Number can't be empty
                </p>
            );
        }
        return(
            <div>
                <div className = 'area-of-interest'>
                    <textarea
                        value = {this.state.areaOfInterest}
                        onChange = {(event) => {this.handleAreaOfInterest(event)}}
                    />
                </div>   
                 <div>
                    <input
                        value = {this.state.personalContactNumber}
                        onChange = {(event) => {this.handlePersonalContactNumber(event)}}
                    />
                    <input
                        value = {this.state.permanentContactNumber}
                        onChange = {(event) => {this.handlePermanentContactNumber(event)}}
                    />
                 </div>
            </div>
        );
    }
}
