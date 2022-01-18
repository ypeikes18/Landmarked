import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import EntryFormContainer from '../app/body/entry/entry_form_container';
import EditFormContainer from '../app/body/entry/edit_form_container';

function Modal(props) {
  const {modal, closeModal} = props;
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'createEntry':
      component = <EntryFormContainer />;
      break;
    case 'editEntry':
      component = <EditFormContainer entry={props.entry}/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);