import { Image } from './Image';
import React from 'react'
const InflearnSection =() =>{

    return(
      <section className="inflab-integrated">
                <header>
                    <div className="inflab-integrated_container">
                        <ul className="inflab-integrated_service">
                            <li>
                                <a >
                                    <Image class="inflab-integrated_image" src="https://cdn.inflearn.com/dist/favicon.ico"></Image>
                                    교육
                                </a>
                            </li>
                            <li>
                                <a>
                                    <Image class="inflab-integrated_image" src="https://cdn.inflearn.com/dist/favicon.ico"></Image>
                                    채용
                                </a>
                            </li>
                        </ul>
                        <ul className="inflab-integrated_links-right">
                            <li>
                                <a>
                                    지식공유 참여
                                </a>
                            </li>
                        </ul>
                    </div>
                </header>
            </section>
    );
}

export  {InflearnSection}