import React, { Component } from "react";
// import { Input, FormBtn } from "../../components/Form";
import {Carousel, About, Services, Instafeed, Header} from "../../components/WelcomePage";
import axios from "axios";
import { Link } from "react-router-dom";



export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events:[]
        }
    }

    componentDidMount() {
        axios.get('/api/events')
            .then((response) => {
                this.setState({ events: response.data });      
            })
            .catch((error) => {
                console.log(error);
            });           
    }
    render() {
        const instafeedTarget = 'instafeed';
        
        return (
            <div>
                <Header/>
                <Carousel/>
                <About/>
                {/* <Instafeed id={instafeedTarget}/> */}
   
                <Services/>
            </div>
        )
    }
}








  

  