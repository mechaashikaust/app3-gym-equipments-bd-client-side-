import React from 'react';
import { Accordion, Card, useAccordionButton } from 'react-bootstrap';
import image1 from '../../images/blog/Authentication_vs_Authorization.png'
import image2 from '../../images/blog/Why-firebase-is-used-1024x680.png'
import image3 from '../../images/blog/firebase11.jpg'

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            style={{ backgroundColor: 'pink' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

const Blog = () => {
    return (
        <Accordion className='marginTop text-center' defaultActiveKey="0">

            <Card>
                <Card.Header>
                    <CustomToggle eventKey="0"> Difference between javascript and nodejs</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">

                    <Card.Body>

                        <h1 className='text-dark'>Authorization</h1>
                        <h6>Authorization means giving access. If someone want to use my files. If i want i can give access to him/her.   </h6>
                        <h1 className='text-dark'>Authentication</h1>
                        <h6>Authentication means verify someone. If someone try to login from another device. He/She won't login without authenticated. </h6>
                        <Card.Img className='img-fluid' src={image1} />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                    <CustomToggle eventKey="1">When should you use nodejs and when should you use mongodb ?</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <h6 className='text-dark'>
                            I'm using firebase for authentication and hosting sytem.
                            Authentication saves a lot of times. It is very effective. Anyone can sign up and sign in with only one click.

                            There are lot of options  to implement authentication. <br></br>

                            1. Google <br></br>
                            2. Facebook <br></br>
                            3. Play Games <br></br>
                            4. Game Center <br></br>
                            5. Apple <br></br>
                            6. Github <br></br>
                            7. Microsoft <br></br>
                            8. Twitter<br></br>
                            9. Yahoo<br></br>

                        </h6>
                        <Card.Img className='img-fluid' src={image2} />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
 
            <Card>
                <Card.Header>
                    <CustomToggle eventKey="2">Differences between sql and nosql databases.
                    </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <h6 className='text-dark'>
                            Firebase is used for many purposes.<br></br>

                            Firebase Database: used to store users data like chat messages, users details and other metadata<br></br>

                            Firebase Cloud Storage: used to store user-generated content like the profile picture, multimedia messages, etc.<br></br>

                            Firebase Cloud Messaging: used to send notification<br></br>

                            Cloud Firestore.<br></br>
                            Cloud Functions.<br></br>
                            Authentication.<br></br>
                            Hosting.<br></br>
                            Google Analytics.
                            Predictions.<br></br>
                  
                        </h6>
                        <Card.Img className='img-fluid' src={image3} />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                    <CustomToggle eventKey="3">What is the purpose of jwt and how does it work?
                    </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        <h6 className='text-dark'>
                            Firebase is used for many purposes.<br></br>

                            Firebase Database: used to store users data like chat messages, users details and other metadata<br></br>

                            Firebase Cloud Storage: used to store user-generated content like the profile picture, multimedia messages, etc.<br></br>

                            Firebase Cloud Messaging: used to send notification<br></br>

                            Cloud Firestore.<br></br>
                            Cloud Functions.<br></br>
                            Authentication.<br></br>
                            Hosting.<br></br>
                            Google Analytics.
                            Predictions.<br></br>
                  
                        </h6>
                        <Card.Img className='img-fluid' src={image3} />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};

export default Blog;