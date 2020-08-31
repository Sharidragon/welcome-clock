import React from 'react';

function Submit(props) {
    
      return (
        <form onSubmit={props.handleSubmit}>
          <label>
            Answer:  
            <input type="text" onChange={props.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    
  }

export default Submit;