import React, { Component } from 'react';
import FileViewer from './FileViewer'


class UploadPage extends Component {
  state = {}
  handleChangeDoc = (event) => {

    var reader = new FileReader();
    reader.readAsText(event.target.files[0])
    reader.onload = (e) => {
            this.setState({
                doc: reader.result,

            });
    }


  }
  render = () => {
    return (<div><p>upload your file here!</p>

      <input type='file' onChange={this.handleChangeDoc}/>
      {this.state.doc && <div><h3>YOUR FILE:</h3>
        <FileViewer doc={this.state.doc}/></div>
    }
      </div>)
  }
}

export default UploadPage;
