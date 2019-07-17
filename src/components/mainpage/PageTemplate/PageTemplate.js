import React, { Component } from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Header from '../Header';
import Footer from '../Footer';

const cx = classNames.bind(styles);

/*  페이지 템플릿을 위한 컴포넌트 입니다.
    Header, Content, Footer로 구성된 페이지를 한번에 보여줍니다.*/

//여기서 children은 뭘까. 필요한 걸까.
const PageTemplate = ({children}) => {
    return (
        <div>
            {children}
            <Header />
            <Footer />
        </div>
    );
};

export default PageTemplate;