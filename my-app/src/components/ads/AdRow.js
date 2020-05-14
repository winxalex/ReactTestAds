import React from 'react'


export default function AdRow({ ad }) {

    const { city, img, description, title, telephone, category, country } = ad;

    return (

        <div className="tg-ads tg-adsvtwo tg-adslist listing-page">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="tg-ad tg-verifiedad listing-ad-neww">
                        <div className="row">
                            <div className="col-lg-4 col-5 pr-0 pr-lg-1">
                                <figure>
                                    <div className="grid-widget grid-widget--listings">
                                        <div id="demo-1" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <span className="numbering-new">1/7</span>
                                                    <img className="one_img" src={img} alt="img" />
                                                </div>
                                                <div className="carousel-item">
                                                    <span className="numbering-new">1/7</span>
                                                    <img className="one_img" src={img} alt="img" />
                                                </div>
                                                <div className="carousel-item">
                                                    <span className="numbering-new">1/7</span>
                                                    <img className="one_img" src={img} alt="img" />
                                                </div>
                                            </div>
                                            <a className="carousel-control-prev" href="#demo-1" data-slide="prev">
                                                <span className="carousel-control-prev-icon"></span>
                                            </a>
                                            <a className="carousel-control-next" href="#demo-1" data-slide="next">
                                                <span className="carousel-control-next-icon"></span>
                                            </a>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                            <div className="col-lg-8 col-7 pl-0 pl-lg-2">
                                <div className="tg-adcontent">
                                    <ul className="tg-admetadata clearfix mb-lg-2">
                                        <li>For Sale</li>
                                        <li>2 bedrooms</li>
                                        <li>5° Floor</li>
                                        <li>No agency</li>
                                    </ul>
                                    <div className="tg-adtitle mb-1">
                                        <h3><a href="#0">Contact Name</a></h3>
                                        <h5 className="mt-lg-4 mb-0">{title}</h5>
                                        <p>{description}</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <ul className="tg-admetadata clearfix mb-lg-2">
                                                <li>{category}</li>
                                                <li>{country}</li>
                                                <li>{city}</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="tg-adprice py-0 text-right"><h4 className="color-purple">Rs 17,00,200</h4></div>
                                        </div>
                                    </div>
                                    <div className="tg-phonelike">
                                        <a className="tg-btnphone" href="#0">
                                            <i className="icon-phone-handset"></i>
                                            <span data-toggle="tooltip" data-placement="top" title="Show Phone No." data-last="0800 - 1234 - 562 - 6"><em>{telephone}</em></span>
                                        </a>
                                        <span className="tg-like tg-liked"><i className="fa fa-heart"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
