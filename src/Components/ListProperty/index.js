import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'
const index = () => {
    return (
        <>

            <div className="List_container">
                <h3>List your property on TrekBuddy and start welcoming guests in no time!</h3>
                <span>To get started, choose the type of property you want to list on TrekBuddy</span>
                <div className="Content_container">
                    <div className="List_content">
                        <i class="fa fa-bed" aria-hidden="true"></i>
                        <h3>Apartments</h3>
                        <p>Furnished and self-catering accommodation, where guests rent the entire place.</p>
                        <Link to="/listing"><button>List your property</button></Link>
                    </div>

                    <div className="List_content">
                        <i class="fa fa-home" aria-hidden="true"></i>
                        <h3>GuestHouse</h3>
                        <p>Properties like apartments, holiday homes, villas, etc.</p>
                        <Link to="/listing"><button>List your property</button></Link>
                    </div>

                    <div className="List_content">
                        <i class="fa fa-building" aria-hidden="true"></i>
                        <h3>Hotels</h3>
                        <p>Properties like hotels, B&Bs, guest houses, hostels, aparthotels, etc.</p>
                        <Link to="/listing"><button>List your property</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index