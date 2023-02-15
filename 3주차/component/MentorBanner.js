import React from "react";
const MentorBanner =()=>{
    return(
        <header className="mentor-list-banner">
            <a>
                <div className="mentor-banner-container">
                    <div className="mentor-banner"></div>
                    <h1 className="mentor-banner-header">멘토링</h1>
                    <p className="mentor-banner-desc">   
                        업계 선배들 혹은 동료들과 인사이트를 나눠 보세요.
                        <br></br>
                        더 빨리, 더 멀리 갈 수 있어요.
                    </p>
                    <span className="mentor-banner-link">
                        멘토 지원하기
                        <span className="mentor-banner-arrow">→</span>
                    </span>
                </div>

            </a>
        </header>
    );

}
export {MentorBanner}