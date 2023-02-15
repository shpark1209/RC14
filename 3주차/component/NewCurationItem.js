import React from "react";
const NewCurationItem =(props)=>{
        return (
            <li className="new-curation-list-item">
                                        <section className="new-curation-card">
                                            <a className="new-curation-card-link">
                                                <img className="new-curation-card-image" src={props.src}></img>
                                                <div className="new-curation-card-wrapper">
                                                    <p className="new-curation-card-title">{props.desc}</p>
                                                </div>
                                            </a>
                                        </section>
                                    </li>
        );
    
}
export {NewCurationItem}