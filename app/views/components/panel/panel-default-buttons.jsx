import React, {Component, PropTypes} from 'react';
import Button from 'focus-components/components/button';


const renderEditingButtons = (toggleEdit, getUserInput, save) => (
    <div className='actions'>
        <Button icon='save' label='button.save' onClick={() => save(getUserInput())} shape={null} type='button' />
        <Button icon='undo' label='button.cancel' onClick={() => toggleEdit(false)} shape={null} type='button' />
    </div>
);


const renderConsultingButtons = (toggleEdit) => (
    <div className='actions'>
        <Button icon='edit' label='button.edit' onClick={() => toggleEdit(true)} shape={null} type='button' />
    </div>
);

/**
 * [description]
 * @param  {[boolean]} {editing         form is in Editing mode or not
 * @param  {[function]} toggleEdit      function to display the button corresponding to form mode
 * @param  {[object]}   getUserInput    object with data modify by the user
 * @param  {[function]} save}           save function which will be call on save button click
 * @return {[element]}                  Buttons dipending on the form mode (edit or not)
 */
const renderButtons = ({editing, toggleEdit, getUserInput, save}) => (
    editing ? renderEditingButtons(toggleEdit, getUserInput, save) : renderConsultingButtons(toggleEdit)
);

export default renderButtons;
