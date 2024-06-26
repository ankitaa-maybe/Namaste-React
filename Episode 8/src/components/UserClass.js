import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Mumbai",
      },
    };

    // console.log("Child Constructor");
  }

  async componentDidMount() {
    // console.log("Child Component Did Mount");
    // API Call
    const data = await fetch("https://api.github.com/users/ankitaa-maybe");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    // console.log(json);
  }

  componentDidUpdate() {
    this.timer = setInterval(() => {
      console.log("Set Interval inside componentDidMount");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount called");
  }

  render() {
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    // const { count } = this.state;

    return (
      <div className="classContainer">
        <img src="https://avatars.githubusercontent.com/u/98963627?v=4" />
        <h1>Name on github: {name}</h1>
        {/*console.log("Parent Render Called")*/}
        <h1>I wanna go {location}</h1>
        <h2>Contact: @ankitakansra</h2>
        {/*<h3>Count = {count}</h3>*/}
        {/*<button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Increase
        </button>*/}
      </div>
    );
  }
}

export default UserClass;
