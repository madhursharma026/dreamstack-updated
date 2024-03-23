import styles from '../../../styles/careers/TeamTogether.module.css';
import React, { useEffect, useState } from "react";

export default function TeamTogether() {
    const [activeCard, setActiveCard] = useState("1")

    function setActiveCardNo(cardNO) {
        setActiveCard(cardNO)
    }

    return (
        <>
            <div className={`${styles.ContainerWidth}`}>
                <div className="text-center px-md-4 px-3">
                    <h1 className={`${styles.sectionTitle}`}>Getting the team <span className='text-primary'>together</span></h1>
                    {(activeCard === "1") ?
                        <>
                            <video width="100%" controls className='py-5' style={{ maxWidth: '1000px', margin: 'auto' }}>
                                <source src="https://player.vimeo.com/external/371817283.sd.mp4?s=56639e00db07ad3f26d837314e3da531bad01b1b&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                                <source src="https://player.vimeo.com/external/371817283.sd.mp4?s=56639e00db07ad3f26d837314e3da531bad01b1b&profile_id=164&oauth2_token_id=57447761" type="video/ogg" />
                                Your browser does not support the video tag.
                            </video>
                        </>
                        :
                        <></>
                    }
                    {(activeCard === "2") ?
                        <>
                            <video width="100%" controls className='py-5' style={{ maxWidth: '1000px', margin: 'auto' }}>
                                <source src="https://player.vimeo.com/external/372335193.sd.mp4?s=80151fa22b2eba81883c8641f2c9e493762c7357&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                                <source src="https://player.vimeo.com/external/372335193.sd.mp4?s=80151fa22b2eba81883c8641f2c9e493762c7357&profile_id=164&oauth2_token_id=57447761" type="video/ogg" />
                                Your browser does not support the video tag.
                            </video>
                        </>
                        :
                        <></>
                    }
                    {(activeCard === "3") ?
                        <>
                            <video width="100%" controls className='py-5' style={{ maxWidth: '1000px', margin: 'auto' }}>
                                <source src="https://player.vimeo.com/external/406087408.sd.mp4?s=1c2430827d26287be068d809afa9bb629de2260b&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                                <source src="https://player.vimeo.com/external/406087408.sd.mp4?s=1c2430827d26287be068d809afa9bb629de2260b&profile_id=164&oauth2_token_id=57447761" type="video/ogg" />
                                Your browser does not support the video tag.
                            </video>
                        </>
                        :
                        <></>
                    }
                </div>

                <div className="row mx-xl-5 px-md-4 px-3 mb-5">
                    <div className={`col-lg-4`} style={{ cursor: "pointer" }}>
                        <div className={`card w-100 h-100 p-4 ${(activeCard === "1") ? `${styles.activeCard}` : `${styles.cardStyle}`}`} onClick={() => setActiveCardNo("1")}>
                            <div className="card-body">
                                <h6 className={`card-title text-primary pb-3 ${styles.cardSubHeading}`}>IN_PERSON RETREAT</h6>
                                <h5 className="card-subtitle mb-3"><b>Cancun 2019</b></h5>
                                <p className="card-text text-muted">Dreamstack met in person for idea-sharing, team-building, and beach volleyball. Check it out</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-4`} style={{ cursor: "pointer" }}>
                        <div className={`card w-100 h-100 p-4 ${(activeCard === "2") ? `${styles.activeCard}` : `${styles.cardStyle}`}`} onClick={() => setActiveCardNo("2")}>
                            <div className="card-body">
                                <h6 className={`card-title text-primary pb-3 ${styles.cardSubHeading}`}>VIRTUAL RETREAT</h6>
                                <h5 className="card-subtitle mb-3"><b>Retreat from Home 2020</b></h5>
                                <p className="card-text text-muted">See how we celebrate each other and hard work during the 2020 remote retreat</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-4`} style={{ cursor: "pointer" }}>
                        <div className={`card w-100 h-100 p-4 ${(activeCard === "3") ? `${styles.activeCard}` : `${styles.cardStyle}`}`} onClick={() => setActiveCardNo("3")}>
                            <div className="card-body">
                                <h6 className={`card-title text-primary pb-3 ${styles.cardSubHeading}`}>IN_PERSON RETREAT</h6>
                                <h5 className="card-subtitle mb-3"><b>Punta Cana 2022</b></h5>
                                <p className="card-text text-muted">In our first in-person retreat since 2019, Dreamstack gathered for a week of team building, surfing, and beach volleyball.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
