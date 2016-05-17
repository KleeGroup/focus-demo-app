//libraries
import React, {Component, PropTypes} from 'react';

//web components
import {component as Button} from 'focus-components/common/button/action';
import {component as Modal} from 'focus-components/application/popin';

import FocusFile from 'focus-file';

class AddedFile extends Component {
    render() {
        return (
            <div>
                {'Fichier actuel : '}
                {this.props.fichier &&
                    <div>{this.props.fichier.name}</div>
                }
            </div>
        )
    }
};

export default React.createClass({
    displayName: 'Poster',
    propTypes: {
        poster: PropTypes.string,
        title: PropTypes.string,
        hasZoom: PropTypes.bool,
        hasUpload: PropTypes.bool
    },
    getInitialState() {
        return({});
    },
    openPosterPopin() {
        this.refs['modal-poster'].toggleOpen();
    },
    openUploadPosterPopin() {
        this.refs['modal-upload-poster'].toggleOpen();
    },
    onFileComplete(file) {

    },
    onFileSuccess(file, response) {
        console.log(file, response);
        this.setState({
            fichier: file,
            path: response.path
        });
    },
    validatePoster() {
        this.props.changePoster(this.state.path);
    },
    resizeUploadedPoster() {
        return {
            srcHeight:100,
            srcWidth:100,
            srcX: 25,
            srcY: 32
        }
    },
    render(){
        const {hasZoom, poster, title} = this.props;
        return (
            <div data-demo='poster'>
                {poster &&
                    <img alt={title} src={poster} title={title} />
                }
                {poster && hasZoom &&
                    <div>
                        <div className='zoom'>
                            <Button icon='zoom_in' shape='fab' label='view.person.card.consult.info' handleOnClick={this.openPosterPopin} />
                            <Button icon='file_upload' shape='fab' label='view.person.card.consult.info' handleOnClick={this.openUploadPosterPopin} />
                        </div>
                        <Modal className='popin-poster' ref='modal-poster'>
                            <img alt={title} src={poster} title={title} />
                        </Modal>
                        <Modal className='modal-upload-poster' ref='modal-upload-poster'>
                            <AddedFile fichier={this.state.fichier}/>
                            <div className="FocusFile">
                                <FocusFile url="http://localhost:9998/upload" onFileSuccess={this.onFileSuccess} onFileComplete={this.onFileComplete}
                                    maxFiles={1} acceptedFiles={"image/jpeg,image/png,image/gif"} resize={this.resizeUploadedPoster}/>
                            </div>
                            <button onClick={this.validatePoster}>OK</button>
                    </Modal>
                    </div>
                }
            </div>
        );
    }
});
