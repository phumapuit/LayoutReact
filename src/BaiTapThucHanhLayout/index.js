import React, { Component } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import SlideBar from './SlideBar'
import Content from './Content'
import ProductList from './ProductList'
import Footer from './Footer'
export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="d-flex" style={{marginTop: '56px'}} >
                    <SlideBar/>
                    <div style={{width: '60%'}}>
                        <Carousel />
                        <ProductList />
                    </div>
                    <Content />
                </div>
                <Footer />
            </div>
        )
    }
}
