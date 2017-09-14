import React, { Component } from 'react';

import {
    Button, Modal, FormGroup, FormControl, ControlLabel
} from 'react-bootstrap';

class TodoForm extends Component {

    state = {};

    onTitleChange = (event) => {
        this.setState({ title: event.target.value })
    }

    onDescriptionChange = (event) => {
        this.setState({ description: event.target.value })
    }

    onSave = () => {
        const { title, description } = this.state;

        if (!title || !description) {
            alert("Preencha o título e a descrição da tarefa.");
            return;
        }

        this.props.onSave(title, description);
    }

    render() {
        // const showForm = this.props.showForm;
        // const onClose = this.props.onClose;
        // const onSave = this.props.onSave;
        const { showForm, onClose, } = this.props;

        // const title = this.state.title;
        // const description = this.state.description;
        const { title, description } = this.props;
        return (
            <Modal show={showForm} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tarefa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup>
                            <ControlLabel> Cód. </ControlLabel>
                            <FormControl value="" disabled />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel> Título </ControlLabel>
                            <FormControl value={title} onChange={this.onTitleChange} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel> Descrição </ControlLabel>
                            <FormControl componentClass="textarea" value={description}
                                onChange={this.onDescriptionChange} />
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsSize="small" onClick={onClose}>Cancelar</Button>

                    <Button bsSize="small" bsStyle="info" onClick={this.onSave}>Salvar</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default TodoForm;