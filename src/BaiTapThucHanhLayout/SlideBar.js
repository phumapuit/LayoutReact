import React, { Component } from 'react'

export default class SlideBar extends Component {
    render() {
        return (
            <div className="text-center" style={{width: '20%'}}>
                <h3>Shop Name</h3>
                <div className="dropdown mb-2">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Category 1
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action 1</a>
                        <a className="dropdown-item" href="#">Action 2</a>
                        <a className="dropdown-item" href="#">Action 3</a>
                    </div>
                </div>
                <div className="dropdown mb-2">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Category 2
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action 1</a>
                        <a className="dropdown-item" href="#">Action 2</a>
                        <a className="dropdown-item" href="#">Action 3</a>
                    </div>
                </div>
                <div className="dropdown mb-2">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Category 3
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action 1</a>
                        <a className="dropdown-item" href="#">Action 2</a>
                        <a className="dropdown-item" href="#">Action 3</a>
                    </div>
                </div>
            </div>
        )
    }
}
