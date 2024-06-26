import UserClass from "./UserClass";
// import UserFunctional from "./UserFunctional";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    return (
      <div>
        {console.log("Parent Render")}
        <h1>This is About page!</h1>
        <UserClass name={"Ankita Kansra"} location={"Mumbai"} />
        {/*<UserClass name={"Ankita Kansra"} location={"Bangalore"} />*/}
      </div>
    );
  }
}

export default About;
