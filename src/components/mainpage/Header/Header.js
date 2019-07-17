import React, {Component} from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import mainlogo from '../picture/univsome.png';
import store1 from '../picture/store1.png';
import store2 from '../picture/store2.png';


const cx = classNames.bind(styles);



class Header extends Component {
    render() {
        return (
            <div className={cx('header')}>
                <div className ={cx('background')}>
                    <div className={cx('upper')}>
                        <img src={mainlogo} alt="univsome_logo" className={cx('mainlogo')} />

                        <div className={cx('menu-list')}>
                            <div className={cx('menu-item')}>MENU</div>
                            <div className={cx('menu-item')}>NEWS</div>
                        </div>
                    </div>
                
                    <div className={cx('middle1')}>
                        <div className={cx('title-box')}>
                            <div className={cx('subtitle')}>대학생이 썸타는 방법</div>
                            <div className={cx('title')}>유니썸</div>
                        </div>
                    </div>

                    <div className={cx('middle2')}>
                        <div className={cx('script')}>
                            대학오면, 연애한다던데...
                        </div>
                    </div>

                    <div className={cx('lower')}>
                        <img src={store1} alt ="google_playstore" className={cx('store')} />
                        <img src={store2} alt = "app_store" className={cx('store')} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
