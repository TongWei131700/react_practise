import {Component} from 'react';
import BasicFigure from './BasicFigure';

class FigureList extends Component {
  render() {
    return (
      <>
        <BasicFigure />
        <BasicFigure />
        <BasicFigure />
      <!--
{`import {Component} from 'react';
import BasicFigure from './BasicFigure';

class FigureList extends Component {
  render() {
    return (
      <>
        <BasicFigure />
        <BasicFigure />
        <BasicFigure />
      </>
    )
  }
}
export default FigureList;
`}
      -->
      </>
    )
  }
}
export default FigureList;
