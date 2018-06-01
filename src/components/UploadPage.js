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
    return (<div>{!this.state.doc && <div><h1 className='h1'>Upload your file here!</h1>
    <br/>
    <div className="input-group mb-3">
  <div className="custom-file">
    <input type="file" onChange={this.handleChangeDoc}className="custom-file-input" accept=".csv" id="inputGroupFile02" />
    <label className="custom-file-label" for="inputGroupFile02">Choose file</label>
  </div>

</div>
      </div>}
      {this.state.doc && <div><h1 className='h1'>YOUR FILE:</h1>
        <FileViewer doc={this.state.doc}/></div>
    }
      </div>)
  }
}

export default UploadPage;
