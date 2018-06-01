import React, { Component } from 'react';


class FileViewer extends Component {
   state = {orderby:'date',
            reverse:'off'
            }

   handleClick = (event) => {
     console.log(this.state.orderby === event.target.value)
     if(this.state.orderby === event.target.value)
     {if(this.state.reverse === 'on'){this.setState({reverse:'off'})}
     else{this.setState({reverse:'on'})}

   }
     else {this.setState({orderby:event.target.value, reverse:'off'})
     console.log(this.state)

   }
   }


   renderRow = (row) => {
     return <tr>
       <td>{row.firstName}</td>
       <td>{row.surName}</td>
       <td>{row.issueCount}</td>
       <td>{row.dateOfBirth}</td>

     </tr>
   }
    sortedByArray = (array) => {
      switch(this.state.orderby) {
    case 'firstname':
        return array.sort(function(a, b) {
  var nameA = a.firstName
  var nameB = b.firstName
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
        break;
    case 'surname':
        return array.sort(function(a, b) {
  var nameA = a.surName
  var nameB = b.surName
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
        break;
    case 'issues':
        return array.sort(function (a, b) {
  return a.issueCount - b.issueCount;
});
          break;
    case 'date':
        return array.sort(function(a, b) {
    a = new Date(a.dateOfBirth);
    b = new Date(b.dateOfBirth);
    return a>b ? -1 : a<b ? 1 : 0;
});
          break;
    default:
        return array
}
  }



  render = () => {
 const {doc} = this.props
 const arrayForEveryLine = doc.split('\n')
 const contentLines = arrayForEveryLine.slice(1)
 const splitLine = contentLines.map(line => {return line.split(';')})
 const createArrayOfObjects = splitLine.map(line => {

   return{ firstName: line[0],
     surName: line[1],
     issueCount: line[2],
     dateOfBirth: line[3]
   }
 })




    return (<div><table className='table'>
  <thead>
  <tr>
    <th><button type="button" className="btn btn-warning" onClick={this.handleClick} value='firstname'>Firstname</button></th>
    <th><button type="button" className="btn btn-warning" onClick={this.handleClick} value='surname'>Surname</button></th>
    <th><button type="button" className="btn btn-warning" onClick={this.handleClick} value='issues'>Issue Count</button></th>
    <th><button type="button" className="btn btn-warning" onClick={this.handleClick} value='date'>Date Of Birth</button></th>
    </tr>
  </thead>

  <tbody>
{this.state.reverse === 'on' && this.sortedByArray(createArrayOfObjects).reverse().map(row => this.renderRow(row))}
{this.state.reverse === 'off' && this.sortedByArray(createArrayOfObjects).map(row => this.renderRow(row))}
</tbody></table></div>
)
  }
}


export default FileViewer;
