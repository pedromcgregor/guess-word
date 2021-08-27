import React from 'react';
import PropTypes from 'prop-types';



 const Congrats = (props) => {
     const { success } = props;
     //console.log('The value of success ', success);
    
    return (    
     (success ) ? 
             ( 
             <div data-test="component-congrats" className="alert alert-success">
                 <span data-test="congrat-message">
                     Congratulation McGregors 
                 </span>
             </div>
          )
         :  (
             <div data-test="component-congrats" />
         )
    );  
};

    Congrats.propTypes = {
        success: PropTypes.bool.isRequired
    };

export default Congrats;


    //  if (success){
    //      return(
    //             <div data-test="component-congrats">
    //              <span data-test="congrat-message">
    //                  Congratulation McGregors 
    //              </span>
    //          </div>
    //      )
    //  } else {
    //      return (
    //         <div data-test="component-congrats" />
    //      )
    //  }