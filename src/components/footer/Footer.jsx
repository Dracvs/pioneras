// @vendors
import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

// @styles
import './footer.sass'

// @logoImages
import twitterIcon from './images/twitterIcon.png'
import instagramIcon from './images/instagramIcon.png'
import facebookIcon from './images/facebookIcon.png'
import youtubeIcon from './images/youtubeIcon.png'
import twitchIcon from './images/twitchIcon.png'
import meetupIcon from './images/meetupIcon.png'

export function Footer() {
    return (
        <>
            <svg
                className="wave"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#69084a"
                    fill-opacity="1"
                    d="M0,192L60,202.7C120,213,240,235,360,234.7C480,235,600,213,720,176C840,139,960,85,1080,64C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
            </svg>

            <footer className="footerSection">
                <h3 className="sectionTitle">¡Súmate a nuestra comunidad!</h3>

                <Container className="socialMediaContainer">
                    <Row>
                        <Col>
                            <a
                                target="_blank"
                                href="https://twitter.com/pionerasdev"
                                alt="Twitter PionerasDev"
                            >
                                <Image
                                    className="socialIcon twitterIcon"
                                    src={twitterIcon}
                                    fluid
                                />
                            </a>
                        </Col>
                        <Col>
                            <a
                                target="_blank"
                                href="https://www.instagram.com/pionerasdev/"
                                alt="Instagram PionerasDev"
                            >
                                <Image
                                    className="socialIcon instagramIcon"
                                    src={instagramIcon}
                                    fluid
                                />
                            </a>
                        </Col>
                        <Col xs={5}>
                            <a
                                target="_blank"
                                href="https://www.youtube.com/c/PionerasDevelopers"
                                alt="Youtube Pioneras Developers"
                            >
                                <Image
                                    className="socialIcon youtubeIcon"
                                    src={youtubeIcon}
                                    fluid
                                />
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a
                                target="_blank"
                                href="https://www.facebook.com/pionerasdev"
                                alt="Facebook Page PionerasDev"
                            >
                                <Image
                                    className="socialIcon facebookIcon"
                                    src={facebookIcon}
                                    fluid
                                />
                            </a>
                        </Col>
                        <Col>
                            <a
                                target="_blank"
                                href="https://www.twitch.tv/pionerasdev"
                                alt="Twitch PionerasDev"
                            >
                                <Image
                                    className="socialIcon twitchIcon"
                                    src={twitchIcon}
                                    fluid
                                />
                            </a>
                        </Col>
                        <Col>
                            <a
                                target="_blank"
                                href="https://www.meetup.com/es-ES/pionerasdevelopers/"
                                alt="Meetup Pioneras Developers"
                            >
                                <Image
                                    className="socialIcon meetupIcon"
                                    src={meetupIcon}
                                    fluid
                                />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
