import React, { Component } from "react";
import API from "../../utils/API";
import AddEvent from "../../components/AddEvent";
import { Nav, Footer } from "../../components/Nav";
// import Profile from "../../components/Profile";
import Jumbotron from "../../components/Jumbotron";
import Callback from "../Callback/Callback";
import './AddEvent.css';


export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token:"",
            userData:[],
            eventData: [],
            name: '',
            email: '',
            phone: '',
            eventDate: '',
            contactOptions: '',
            hairService: false,
            makeupService: false,
            manicurePedicure: false
        }
    }

    login() {
        this.props.auth.login();
    }



    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;


        // Updating the input's state
        this.setState({
            [name]: value
        });

    };

    setTokenAndGetUser = (token)=> {
        
        this.setState({token:token});
        API.getUserByToken(token).then(res => this.setState({userData: res.data}));
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        API.saveEvent({
            token:this.state.token,
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            eventDate:this.state.eventDate,
            contactOptions:this.state.contactOptions,
            hairService:this.state.hairService,
            makeupService:this.state.makeupService,
            manicurePedicure:this.state.manicurePedicure
        })
    };


    getAllEvents = () => {
        API.getAllEvents().then(res => console.log(res.data))
    }
    

    
    componentDidMount() {
        let token = localStorage.getItem('id_token');
        this.setTokenAndGetUser(token)
        this.getAllEvents();
    }

    render() {
        const { isAuthenticated } = this.props.auth;

          if(this.state.userData){
        return (
            <div>
                <Nav auth={this.props.auth} />
                <div className="container-fluid wrapper"   >
                    {
                        isAuthenticated() ? (
                            <div className="row" >
                                <div id="bck" className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center profile" >
                                     <Profile
                                     userData={this.state.userData}
                                     /> 
                                </div>
                                <div className=" col-xs-12 col-sm-12 col-md-8 col-lg-8 text-center">
                                <AddEvent id="events" 
                                     handleInputChange={this.handleInputChange}
                                     handleFormSubmit={this.handleFormSubmit}
                                     name={this.state.name}
                                     email={this.state.email}
                                     phone={this.state.phone}
                                     eventDate={this.state.eventDate}
                                     contactOptions={this.state.contactOptions}
                                     hairService={this.state.hairService}
                                     makeupService={this.state.makeupService}
                                     manicurePedicure={this.state.manicurePedicure}
                                     
                                    />
                                </div>
                            </div>
                        ) : (
                                <div className="py-5" style={{ background: 'red' }}>
                                    <Jumbotron >
                                        <h4>You are not logged in {' '}</h4>
                                        <h5>
                                            <button className=" btn btn-success" style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>Log In</button>
                                            {' '}to continue.
                                        </h5>
                                        </Jumbotron>
                                    </div>
                                )
                        }
                    </div>
                    <Footer />
                </div>

            )
        } else {
            return <Callback />
        }
    }

}
