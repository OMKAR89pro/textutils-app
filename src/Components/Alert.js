import React from 'react'

function Alert(props) {
  const capitalize = (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  }

  return (
    <div style={{height: '30px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{ padding: "8px 16px", fontSize: "20px", lineHeight: "1.2",textAlign: "center" }}>
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>}
    </div>
)
}

export default Alert