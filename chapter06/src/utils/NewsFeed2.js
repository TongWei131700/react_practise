import {Component} from 'react'

class NewsFeed2 extends Component {

  state = {
    date: new Date(),
    headlines:[]
  }

  render(){
    return(
      <>
        <h1>Headlines for {this.state.date.toLocaleString()}</h1>
        ...
        <!--
{`import {Component} from 'react'

class NewsFeed2 extends Component {

  state = {
    date: new Date(),
    headlines:[]
  }

  render(){
    return(
      <>
        <h1>Headlines for {this.state.date.toLocaleString()}</h1>
        ...
      </>
    )
  }
}

export default NewsFeed2;`}
        -->
      </>
    )
  }
}

export default NewsFeed2;