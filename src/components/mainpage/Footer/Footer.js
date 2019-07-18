import React, { Component } from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import mainlogo2 from '../picture/univsome.png';
import link1 from '../picture/link1.png';
import link2 from '../picture/fmessage.png';
import link3 from '../picture/insta.png';

const cx = classNames.bind(styles);

/*  홈페이지 하단에 위치한 컴포넌트입니다.
    주소 및 통신판매 번호 등의 정보와 서비스, 문의, 링크, copyright가 위치해 있습니다.*/
/*  메인 페이지 다 만든 후 (참고.리액트를 다루는 기술 p.500) import link 하기. */
/* chrome에서 볼때는 비율이 맞는데 edge는 안맞음. rem말고 다른 단위 해야 할듯.*/ 
/* 로고를 png로 바꿀 것*/
class Footer extends Component {

    state = {
        company_infomation: ["(주)유니썸│대표이사 : 김명운│사업자등록번호 : 123-45-67890","통신판매번호 : 2019-경기수원-0000호 유니썸",
            "주소 : 경기도 수원시 영통구 월드컵로 206 10층","전화 : 031- 219 - 2114"],
        service_list: ["유니썸 APP 소개", "공지사항","이용약관","개인정보취급방침" ],
        inquiry_list: ["서비스","대학 추가","광고/제휴"]
    }    

    render() {
        const info = this.state.company_infomation.map(
            (name, index) => (<p key={index}>{name}</p>)
        );
        const list1 =this.state.service_list.map(
            (name, index) => (<p key={index}>{name}</p>) //p, li 둘다 해보기.
        );
        const list2 = this.state.inquiry_list.map(
            (name,index) => (<p key={index}>{name}</p>)
        );
        return (
            <div className={cx('footer')}>
                   
                <div className={cx('upper')}>
                    <img src={mainlogo2} alt="univsome_logo" className={cx('mainlogo2')}/>
                    <div className={cx('font','index1')}>
                        서비스
                    </div>
                    <div className={cx('font','index2')}>
                        문의
                    </div>
                    <div className={cx('font','index3')}>
                        링크
                    </div>

                </div>
                <div className={cx('middle')}>
                    
                    <div className={cx('font','info')}>
                        {info}
                    </div>
                    <div className={cx('font','list1')}>
                        {list1}
                    </div>
                    <div className={cx('font','list2')}>
                        {list2}
                    </div>
                    <div className={cx('link')}>
                        <img src={link1} alt="facebook_link" className={cx('link_style')} />
                        <img src={link2} alt="facebook_message_link" className={cx('link_style')} />
                        <img src={link3} alt="instagram_link" className={cx('link_style')} />
                    </div>
                
                </div>
                
                <div className={cx('lower')}>
                    <div className={cx('copyright')}>
                        <p>COPYRIGHT ⓒ 2019 Univsome Co., Ltd. All rights reserved.</p> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;