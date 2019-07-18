import React, { Component } from 'react';
import styles from './Icon.scss';
import classNames from 'classnames/bind';
import circle from '../picture/circle.png';
import picture1 from '../picture/swipe.png';
import picture2 from '../picture/recommendation.png';
import picture3 from '../picture/group.png';
import picture4 from '../picture/certification.png';
import picture5 from '../picture/tag.png';
import picture6 from '../picture/target.png';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

class Icon extends Component {
            state = {
                
                picture: [picture1,picture2,picture3,picture4,picture5,picture6],
                title: [
                    "스와이핑",
                    "추천인 시스템",
                    "그룹 탐색",
                    "대학생 인증",
                    "태그",
                    "타겟 시스템"
                 ],
                subtitle: [
                    //<br/>는 줄바꿈 기능.
                    <span>세계 최초의 스와이프 UI를 사용한<br/>다수 대 다수 미팅 서비스<br/>쉽고 간편하게 이성을 탐색하세요.</span>,
                    <span>친구를 초대하고<br/>VIP 정기권을 일주일 무료로 사용하세요</span>,
                    <span>그룹을 생성하여 친구와 함께하거나<br/>그룹을 탐색하세요</span>,
                    <span>대학 이메일로 본인인증<br/>대학생 신분이 보장된 안전한 매칭</span>,
                    <span>성격, 취미 등 다양한 태그로<br/>관심사를 쉽게 표현하세요</span>,
                    <span>원하는 대학/학과의 이성을 만나보세요.</span>
                ]
            } 

            static propTypes={
                index: PropTypes.number.isRequired
            }
            
            render(){
                const {picture, title, subtitle} = this.state;
                const {index} = this.props;
                
            
                
            return (
                <div className={cx('icon')}>
                    <div className={cx('circle')} >
                        <img src={picture[index]} alt={"picture" + {index}} className={cx('picture')}/>
                    </div> 
                    <div className={cx('title')}>
                        {title[index]}
                    </div>
                    <div className={cx('subtitle')}>
                        {subtitle[index]}
                    </div>   
                     
                </div>
            )
        
    }
}

export default Icon;