import * as React from 'react';
import { Grid } from 'react-bootstrap/lib';
import BigGrid from './components/BigGrid';
import Header from './components/Header';
import RunControl from './components/RunControls'


class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: null,
      loading: false,
    };
  };


  public render() {
    return (
      <Grid>
        <Header />
        <RunControl onClick={this.runMachine} />
        <BigGrid loading={this.state.loading} data={this.state.data} />
      </Grid>
    );
  }

  private runMachine = () => {
    this.setState({
      data: null,
      loading: true,
    });

    getCurrentTime()
      .then(currentTime => getCurrentTime())
      .then(currentTime => {
        this.setState({ data: "DATA" });
        return true;
      })
      .catch(err =>
        this.setState({ data: 'There was an error:' + err }))
  }
}

export default App;


function getCurrentTime() {
  // Get the current 'global' time from an API using Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const didSucceed = Math.random() >= 0.5;
      didSucceed ? resolve(new Date()) : reject('Error');
    }, 2000);
  })
}
