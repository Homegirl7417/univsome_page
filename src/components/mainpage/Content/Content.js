import React, { Component } from 'react';
import styles from './Content.scss';
import classNames from 'classnames/bind';
import device from '../picture/device.png';
import Icon from './Icon';

const cx = classNames.bind(styles);

class Content extends Component {
      
    render() {
        return (
            <div className={cx('content')}>
                <div className={cx('box')} >
                    <div className={cx('left')} >
                        <Icon index={0}></Icon>
                        <Icon index={1}></Icon>
                        <Icon index={2}></Icon>

                    </div>

                    <div className={cx('center')}>
                        <img src={device} alt={device} className={device} /> 
                    </div>

                    <div className={cx('right')}>
                        <Icon index={3}></Icon>
                        <Icon index={4}></Icon>
                        <Icon index={5}></Icon>

                    </div>
                </div>
            </div>
        );
    }
}

export default Content;




