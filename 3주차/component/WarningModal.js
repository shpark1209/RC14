import React, { useEffect } from 'react'
let warningTitle;
let warningDesc;
const WarningModal=(props)=>{
    
    return(
        <div className="warning-modal">
            <div className='dimmed'></div>
                <div className="modal-container">
                    <div className="modal-content">
                            <div className="modal-top">
                                <span className="modal-title">
                                    {props.warningTitle}
                                </span>
                                <span className="modal-desc">
                                    {props.warningDesc}
                                </span>
                            </div>
                    </div>
                    <div className="modal-bottom">
                        <button className="modal-button">확인</button>
                    </div>
                </div>
            </div>
    );
    
}
export {WarningModal};