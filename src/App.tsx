import * as React from 'react';
import { Grid } from 'react-bootstrap/lib';
import BigGrid from './components/BigGrid';
import Header from './components/Header';
import RunControl from './components/RunControls'


class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { loading: false };
  };


  public render() {
    return (
      <Grid>
        <Header />
        <RunControl onClick={this.runMachine} />
        <BigGrid loading={this.state.loading}/>
      </Grid>
    );
  }

  private runMachine = () => {
    this.setState({loading: true});
  }
}

export default App;
