import React from "react"
// external imports
import { connect } from "react-redux"

// internal imports
import { saveTemplate } from "../actions"
import { getSaveability } from "../selectors"

const mapStateToProps = state => {
  const saveability = getSaveability(state)
  return {
    saveability
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleClick() {
      dispatch(saveTemplate())
    }
  }
}

const SaveTemplate = ({ handleClick, saveability }) => {
  if (saveability.saveable) {
    return (
      <button className="btn btn-primary" onClick={handleClick}>
        <span className="glyphicon glyphicon-floppy-disk" />
        Save
      </button>
    )
  } else {
    return (
      <div data-for="saveButtonTooltip" data-tip={saveability.error}>
        <button className="btn btn-primary" disabled={true}>
          <span className="glyphicon glyphicon-floppy-disk" />
          Save
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveTemplate)
