import React, { Component } from 'react';
import axios from 'axios';
import SchoolItem from "./SchoolItem";

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      schools: []
  }
  }

  componentDidMount(){
      this.getSchools();
    }


  getSchools(){
    let url='http://localhost:3000/api/school/'
    axios.get(url).then((resp)=>{
      this.setState({ schools: resp.data });
      console.log(this.state.schools);
    })
  }

  delete(id){
    console.log(id);
    axios.delete('http://localhost:3000/api/school/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
        <div className="card-group m-5">
        {
          this.state.schools.map(school=>
              <SchoolItem key={school.id} school={school} details={false} />
          )
        }
      </div>
    );
  }
}

export default Show;
